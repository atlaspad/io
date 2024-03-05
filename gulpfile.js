var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass')(require('sass')),
	minify = require('gulp-minify');

gulp.task('sass', function () {
	return gulp
		.src('src/sass/**/*.sass')
		.pipe(sass())
		.pipe(
			autoprefixer(['last 10 versions'], {
				cascade: true,
			})
		)
		.pipe(gulp.dest('public/css/'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'public',
		},
		notify: true,
	});
});

gulp.task('img', function () {
	return gulp.src('public/img/**/*').pipe(gulp.dest('public/img'));
});

gulp.task('video', function () {
	return gulp.src('public/video/**/*').pipe(gulp.dest('public/video'));
});

gulp.task('min-js', function () {
	return gulp
		.src('src/js/*.js')
		.pipe(
			minify({
				noSource: true,
				ext: {
					min: '.min.js',
				},
				ignoreFiles: ['min.js'],
			})
		)
		.pipe(gulp.dest('public/js/min'));
});

gulp.task('html', function () {
	return gulp.src('src/*.html').pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
	gulp.watch('src/sass/**/*.sass', gulp.parallel('sass'));

	gulp.watch('src/js/*.js').on('change', gulp.parallel('min-js'), browserSync.reload);
	
	gulp.watch('src/*.html').on('change', gulp.parallel('html'), browserSync.reload);
});

gulp.task('prebuild', async function () {
	var buildCss = gulp.src('src/css/**/*').pipe(gulp.dest('public/css'));
	var buildFonts = gulp.src('src/fonts/**/*').pipe(gulp.dest('public/fonts'));
	var buildJs = gulp.src('src/js/**/*').pipe(gulp.dest('public/js'));
	var buildHtml = gulp.src('src/*.html').pipe(gulp.dest('public/'));
});

gulp.task('build', gulp.parallel('prebuild', 'img', 'video', 'sass', 'min-js'));

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'browser-sync')));
