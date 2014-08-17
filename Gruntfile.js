/* global module:false */

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Tasks configuration
    modernizr: {
      dist: {
        devFile: 'vendor/assets/components/modernizr/modernizr.js',
        outputFile: 'vendor/assets/javascripts/modernizr-custom.js',
        parseFiles: false,
        extra: {
          mq: true
        },
        extensibility: {
          prefixed: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      railsAssets: {
        files: 'app/assets/**/*.+(scss|css|js|png|jpg|svg)'
      },
      rubyFiles: {
        files: 'app/**/*.rb'
      },
      railsLocales: {
        files: 'config/locales/**/*.yml'
      },
      railsStaticFiles: {
        files: 'public/**/*.+(css|html|js|txt)'
      },
      railsViews: {
        files: 'app/views/**/*.+(slim|erb)'
      }
    }

  });

  // Tasks load
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-modernizr");

  // Tasks declaration
  grunt.registerTask('default', ['modernizr']);

};
