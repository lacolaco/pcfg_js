/**
 * Created by laco on 14/12/26.
 */

var grunt = require("grunt");

grunt.loadNpmTasks('grunt-typescript');
//grunt.loadNpmTasks('grunt-contrib-watch');

grunt.initConfig({
  typescript: {
    base: {
      src: ['./src/ts/*.ts'],
      dest: './dest/js',
      options: {
        module: 'commonjs', //or commonjs
        target: 'es5', //or es3
        basePath: './src/ts',
        sourceMap: true,
        watch: true
      }
    }
  }
});
