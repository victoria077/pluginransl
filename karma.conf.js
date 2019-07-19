module.exports = function(config) {
    config.set({
      frameworks: ['jasmine-jquery','jasmine'],
  
      files: [
        '*.js'
      ],
      plugins: [
        'karma-jasmine-jquery',
        'karma-jasmine',
  
      ],
    })
  }