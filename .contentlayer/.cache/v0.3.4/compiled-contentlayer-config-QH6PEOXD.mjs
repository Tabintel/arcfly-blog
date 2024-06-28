// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: { type: "string" },
    shortDescription: { type: "string" },
    image: { type: "string" },
    author: { type: "string" },
    createdAt: { type: "date" },
    updatedAt: { type: "date" }
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/pages\/?/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-QH6PEOXD.mjs.map
