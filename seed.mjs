
import mongoose from "mongoose";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
const apartmentDataList = [
  // Hazel
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 2,
    bathroom: 4,
    city: "London",
    address: "101 London Rad",
    images: [
      "/images/hazel_1.JPEG",
      "/images/hazel_2.JPEG",
      "/images/hazel_3.JPEG",
      "/images/hazel_4.JPEG",
      "/images/hazel_5.JPEG",
      "/images/hazel_6.JPEG",
      "/images/hazel_7.JPEG",
      "/images/hazel_8.JPEG",
      "/images/hazel_9.JPEG",
      "/images/hazel_10.JPEG",
      "/images/hazel_11.JPEG",
    ],
    title: "Hazel",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 100,
  },
  // mocha
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/mocha_1.JPEG",
      "/images/mocha_2.JPEG",
      "/images/mocha_3.JPEG",
      "/images/mocha_4.JPEG",
      "/images/mocha_5.JPEG",
    ],
    title: "Mocha",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 70,
  },
  // pearl
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/pearl_1.JPEG",
      "/images/pearl_2.JPEG",
      "/images/pearl_3.JPEG",
      "/images/pearl_4.JPEG",
      "/images/pearl_5.JPEG",
      "/images/pearl_6.JPEG",
      "/images/pearl_7.JPEG",
      "/images/pearl_8.JPEG",
      "/images/pearl_9.JPEG",
      "/images/pearl_10.JPEG",
    ],
    title: "Pearl",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 70,
  },
  // Valentina
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/valentina_1.JPEG",
      "/images/valentina_2.JPEG",
      "/images/valentina_3.JPEG",
      "/images/valentina_4.JPEG",
    ],
    title: "Valentina",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 70,
  },
  // Cinammon
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/hazel_12.JPEG",
      "/images/hazel_13.JPEG",
      "/images/hazel_14.JPEG",
      "/images/hazel_15.JPEG",
      "/images/hazel_16.JPEG",
    ],
    title: "Cinammon",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 70,
  },
  // Scarlett
  {
    userid: "66476760ef11a9967074c22c",
    bedroom: 1,
    bathroom: 1,
    city: "London",
    address: "101 London Road",
    images: [
      "/images/hazel_7.JPEG",
      "/images/hazel_8.JPEG",
      "/images/hazel_9.JPEG",
      "/images/hazel_10.JPEG",
    ],
    title: "Scarlett",
    description:
      "Family room, nice and spacious with a double and single bed with the fabulous shower room. You won’t want to leave.",
    price: 120,
  },
];


dotenv.config();

const prisma = new PrismaClient(); 
const mongoUrl = process.env.DATABASE_URL;
if (!mongoUrl) {
  throw new Error("MongoDB connection string is not defined.");
}

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) =>
  console.error("MongoDB connection error:", error)
);

const importData = async () => {
  try {
    // Use Prisma to insert data
    await prisma.rooms.createMany({
      data: apartmentDataList,
    });
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // Use Prisma to delete data
    await prisma.rooms.deleteMany();
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error("Error destroying data:", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
