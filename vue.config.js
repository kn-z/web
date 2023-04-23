const { defineConfig } = require('@vue/cli-service')
// const apiTarget = "http://localhost:3000/api/v1"

module.exports = defineConfig({
  transpileDependencies: true,
  //禁用ES lint
  lintOnSave:false,
  devServer: {
    host: '0.0.0.0',
    allowedHosts: "all",
    port:443,
    client: {
      webSocketURL: 'ws://0.0.0.0:443/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  // proxy:{
  //   'proxy':{
  //     target:apiTarget, // 这是根路径
  //     changeOrigin:true,
  //     pathRewrite: {
  //       '^/proxy': ''
  //     },
  //     fallback: {
  //       "fs": false
  //     },
  //   }
  // }
  }
})

    
