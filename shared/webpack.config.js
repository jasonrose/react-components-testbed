var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/shared.js',
  out: 'public',
  output: {
    filename: 'shared.js',
    cssFilename: 'shared.css'
  },
  clearBeforeBuild: true,
  port: 8000
})

config.externals = [{
  'react': 'React',
  'react-dom': 'ReactDOM'
}]

config.output.library = 'react_components_testbed_shared'
config.output.libraryTarget = 'umd'

module.exports = config
