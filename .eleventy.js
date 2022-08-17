const { rootPath } = require("./config");

/**
 * 11ty 設定ファイル
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 * @link https://www.11ty.dev/docs/config/
 */
module.exports = (config) => {
    // Copy `src/static` to `public/sample-11ty-with-vite/static`
    config.addPassthroughCopy({ 'src/static': 'static' });

    // return Config object (optional).
    return {
        dir: {
            input: rootPath.input.pages,
            output: rootPath.output,
        },
        pathPrefix: rootPath.base,
        htmlTemplateEngine: 'ejs',
        markdownTemplateEngine: 'ejs',
        templateFormats: ['html', 'ejs'],
    }
};
