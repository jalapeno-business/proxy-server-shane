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
<<<<<<< HEAD
  grunt.registerTask('minify-css', ['cssmin']);
  grunt.registerTask('deploy', ['run:s3']);
=======
  grunt.registerTask('deploy', ['run:s3']);
  grunt.registerTask('minify-css', ['cssmin']);
>>>>>>> fee594a31987c82f4537f6544f0c5392401ea940
  grunt.registerTask('build-deploy', ['minify-css', 'deploy']);
};
