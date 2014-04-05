module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    copy:
      jquery:
        files: [{
          expand: true
          cwd: 'bower_components/jquery/dist/'
          src: ['jquery.min.js']
          dest: 'example/assets/'
        }]

      underscore:
        files: [{
          expand: true
          cwd: 'bower_components/underscore/'
          src: ['underscore.js']
          dest: 'example/assets/'
        }]

      backbone:
        files: [{
          expand: true
          cwd: 'bower_components/backbone/'
          src: ['backbone.js']
          dest: 'example/assets/'
        }]

    clean: ['example/assets/**/*']

    connect:
      server:
        options:
          port: 8000
          base: 'example/'
          keepalive: true

  })

  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['clean', 'copy'])
  grunt.registerTask('server', ['connect'])
