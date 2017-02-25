const path = require('path')

// this will copy ./static/** to ./dist/**
module.exports = (options, req) => ({
  entry: 'src/index.js',
  postcss: [
    // add more postcss plugins here
    // by default we have autoprefixer pre added
  ],
  webpack(cfg) {
    cfg.resolve.modules.push(path.resolve('src'))

    return cfg
  }
})
