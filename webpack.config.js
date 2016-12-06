const production =  { path: 'dist/assets/react', filename: 'app.bundle.js' };
const dev = { publicPath: 'http://localhost:8080/react', filename: 'app.bundle.js' };

module.exports = {
  'entry': './src/assets/react/app.js',
  'output': production,
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
