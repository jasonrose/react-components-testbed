var getConfig = require('hjs-webpack')

var isDev = (process.argv[1] || '').indexOf('hjs-dev-server') !== -1

var config = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  port: 8000,
  html: function(context) {
    return ("<!doctype html>\n<head>\n  <meta charset=\"utf-8\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\"/>\n</head>\n<body>\n<div id=\"container\">\n  <div id=\"header\"></div>\n  <div id=\"application\"></div>\n  <div id=\"footer\"></div>\n</div>\n</body>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js\"></script>\n<script src=\"/app.js\"></script>");
  }
})

config.externals = [{
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-components-testbed-shared': 'react_components_testbed_shared'
}]

module.exports = config
