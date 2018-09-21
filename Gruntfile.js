module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './public',
          src: ['*.css', '!*.min.css'],
          dest: './public',
          ext: '.min.css',
        }],
      },
    },
  });

  grunt.registerTask('minify-css', ['cssmin']);
};
