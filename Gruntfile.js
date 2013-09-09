module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Define our source and build folders
    js_src_path: 'js',
    js_build_path: "../ee/themes/site_themes/skinrenewal/js",
    css_src_path: "css",
    css_build_path: "../ee/themes/site_themes/skinrenewal/css",

    // Grunt Tasks
    concat: {
      options:{
        separator: ''
      },
      js: {
        src: ['<%= js_src_path %>/vendor/jquery.min.js'
        ],
        dest: '<%= js_build_path %>/app.js'
      },
      css:{
        src: ['<%= css_src_path %>/*.css'],
        dest: '<%= css_build_path %>/screen.css'
      }
    },
    uglify: {
      options:{
        mangle: true
      },
      js: {
        src: '<%= concat.js.dest %>',
        dest:'<%= js_build_path %>/app.min.js'
      }
    },
    cssmin: {
      css: {
        src: '<%= concat.css.dest %>',
        dest:'<%= css_build_path %>/screen.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};