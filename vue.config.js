const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//禁用ESlint
  devServer: {
    host: 'hk.knyun.xyz',
    port:8080,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },

    proxy:{
      'proxy':{
        target:'http://hk.knyun.xyz:3000/api/v1', // 这是根路径
        changeOrigin:true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
  }
})

    
