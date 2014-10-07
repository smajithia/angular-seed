module.exports = function(grunt) {

    grunt.initConfig({
        protractor: {
            options: {
                configFile: "protractor.conf.js",
                keepAlive: true,
                noColor: false
            },
            run: {}
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: true
            }
        },
        watch: {
            karma: {
                files: ['app/**/**/*.js'],
                tasks: ['karma:unit:run']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('devmode', ['karma:unit', 'watch']);
    grunt.registerTask('test', [
        'karma',
        'protractor:run'
    ]);

};