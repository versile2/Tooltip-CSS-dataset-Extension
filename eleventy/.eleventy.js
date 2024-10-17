const path = require('path');	

module.exports = async function (eleventyConfig) {
    eleventyConfig.addGlobalData("gitlink", "https://github.com/versile2/Tooltip-CSS-dataset-Extension");
    eleventyConfig.addPassthroughCopy("docs_build/css");
    eleventyConfig.addPassthroughCopy("docs_build/icons");
    eleventyConfig.addPassthroughCopy("docs_build/images");
    eleventyConfig.addPassthroughCopy("docs_build/js");
    eleventyConfig.addPassthroughCopy("docs_build/search-index.json");

    // add pathPrefix
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
        pathPrefix: "/Tooltip-CSS-dataset-Extension/"
    });

    // Define a collection named "orderedPages" that includes all .md files
    eleventyConfig.addCollection("orderedPages", function(collectionApi) {
        // Return all .md files, and sort as needed
        return collectionApi.getFilteredByGlob("docs_build/pages/*.md").sort((a, b) => {
            return (a.data.order || 99) - (b.data.order || 99);
        });
    });

    return {
        dir: {
            input: "docs_build",
            // allow output outside of the base directory this way
            output: path.join(__dirname, '..', 'docs')
        }
    };
};
