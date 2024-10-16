const path = require('path');

module.exports = function (eleventyConfig) {
    eleventyConfig.addGlobalData("gitlink", "https://github.com/versile2/Tooltip-CSS-dataset-Extension");
    eleventyConfig.addPassthroughCopy("docs_build/css");
    eleventyConfig.addPassthroughCopy("docs_build/icons");
    eleventyConfig.addPassthroughCopy("docs_build/images");
    eleventyConfig.addPassthroughCopy("docs_build/js");
  // Define a collection named "pages" that includes all .md files
  eleventyConfig.addCollection("orderedPages", function(collectionApi) {
    // Return all .md files, or filter/sort as needed
    return collectionApi.getFilteredByGlob("docs_build/pages/*.md").sort((a, b) => {
        return (a.data.order || 99) - (b.data.order || 99);
    });
  });
    return {
        dir: {
            input: "docs_build",
            output: path.join(__dirname, '..', 'docs')
        }
    }
};