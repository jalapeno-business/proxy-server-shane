module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './css',
          src: ['*.css', '!*.min.css'],
          dest: './public',
          ext: '.min.css',
        }],
      },
    },
    run: {
      s3: {
        cmd: 'eb',
        args: [
          'deploy',
        ],
      },
    },
  });
  grunt.registerTask('minify-css', ['cssmin']);
  grunt.registerTask('deploy', ['run:s3']);
  grunt.registerTask('build-deploy', ['minify-css', 'deploy']);
};
