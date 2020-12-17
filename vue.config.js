module.exports = {
  publicPath: '/wxzf/dist/', // 打包文件相对路径
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    before: app => { }
  }
};
