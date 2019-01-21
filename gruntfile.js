module.exports = function(grunt) {

	// Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			// doesnt need to be called build, we can call it whatever we want
			build: {
				src: ['src/js/vendor/jquery.min.js',
				'src/js/vendor/jquery.easing.min.js',
				'src/js/vendor/bootstrap.min.js',
				'src/js/vendor/slick.min.js',
				'src/js/vendor/jquery.prettyembed.js',
				'src/js/vendor/jquery.fitvids.js',
				'src/js/vendor/jquery.waitforimages.js',
				'src/js/scripts.js'],
				dest: 'js/script.min.js'
			},

			dev: {
				options: {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: ['src/js/vendor/jquery.min.js',
				'src/js/vendor/jquery.easing.min.js',
				'src/js/vendor/bootstrap.min.js',
				'src/js/vendor/slick.min.js',
				'src/js/vendor/jquery.prettyembed.js',
				'src/js/vendor/jquery.fitvids.js',
				'src/js/vendor/jquery.waitforimages.js',
				'src/js/scripts.js'],
				dest: 'js/script.min.js'
			}
		},



		watch: {
			options: {
				livereload: true,
			},
			js: {
				files: ['src/js/*.js',
				'src/js/vendor/*.js'],
				tasks: ['uglify:dev']
			},
				css: {
				files: ['src/scss/**/*.scss'], // <-- when these files change
				tasks: ['sass:dev'] // <-- run this task
			},
			html: {
				files: ['index.html']
			}
		},



		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'css/application.css' : 'src/scss/application.scss'
				}
			},

			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/application.css' : 'src/scss/application.scss'
				}
			}
		},






	});


	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	// Register tasks(s)
	grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
	grunt.registerTask('build', ['uglify:build', 'sass:build']);

};
