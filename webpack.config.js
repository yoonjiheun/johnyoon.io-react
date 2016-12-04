module.exports = {
  'entry': './src/assets/react/app.js',
  'output': getOutput(),
  'module': {
    'loaders': [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'loader': 'babel-loader',
        'query': {
          'presets': [
            'es2015',
            'stage-0',
            'react'
          ]
        }
      }
    ]
  }
}

function getOutput() {
  if(process.env.NODE_ENV !== 'production') {
    return {
      publicPath: 'http://localhost:8080/react',
      filename: 'app.bundle.js'
    }
  }

  return {
    path: 'dist/assets/react',
    filename: 'app.bundle.js'
  }
}
