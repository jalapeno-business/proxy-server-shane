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
    run: {
      s3: {
        cmd: 'aws',
        args: [
          's3',
          'cp',
          './client/dist/reviews.js',
          's3://fec-zagat/',
          '--grants',
          'read=uri=http://acs.amazonaws.com/groups/global/AllUsers',
        ],
      },
    },
  });
  grunt.registerTask('deploy', ['run:s3']);
  grunt.registerTask('minify-css', ['cssmin']);
  grunt.registerTask('build-deploy', ['minify-css', 'deploy']);
};
