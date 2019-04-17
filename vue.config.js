module.exports = {
    // 代理设置
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                }
            }
        }
    }
}