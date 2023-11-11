module.exports = (options) => {
    return {
        transformIndexHtml: {
            // 插件执行时机
            enforce: 'pre',
            transform: (html, ctx) => {
                html = html.replace(/<%= title %>/g, options.inject.data.title)
                return html
            }
        }
    }
}