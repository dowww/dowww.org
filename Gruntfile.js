/* globals module:false */

module.exports = function(grunt) {
  'use strict';

  require('load-grunt-config')(grunt);

  grunt.registerTask('default', ['jshint', 'modernizr']);

};
