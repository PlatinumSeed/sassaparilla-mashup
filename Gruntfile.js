module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Define our source and build folders
    //JS
    js_src_path: 'js/vendor',
    js_build_path: "js/compiled",
    //CSS
    css_src_path: "css",
    css_build_path: "css",
    //Sprites
    sprite_src_path: 'images/sprites',
    sprite_build_path: "images",

    // Grunt Tasks
    watch: {
        css: {
            files: [
                        '<%= css_src_path %>/*.scss',
                        '<%= css_src_path %>/libs/*.scss'
                   ],
            tasks: ['css']
        },
        javascript: {
            files: [
                        '<%= js_src_path %>/*.js',
                   ],
            tasks: ['javascript']
        }
    },
    sprite:{
        desktop: {
            src: '<%= sprite_src_path %>/*.png',
            destImg: '<%= sprite_build_path %>/frontend_sprite.png',
            destCSS: '<%= css_src_path %>/libs/_sprites.scss',
            imgPath: '../images/frontend_sprite.png',
            engine: 'pngsmith'
        }
    },
    compass: {
        dist: {
            options: {
                config: 'config.rb'
            }
        }
    },
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
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['compass', 'concat', 'cssmin', 'uglify']);
    
    grunt.registerTask('css', ['compass', 'cssmin']);
    grunt.registerTask('javascript', ['concat', 'uglify']);
};