var gulp = require('gulp');
var concat = require('gulp-concat');
var scss = require('gulp-sass');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');


// set source files
var source = {
	scss : './src/css/Start.scss',
	scss_doc : './documentation/assets/css/documentation.scss',
	js : [
		''
	]
};


// scss to css
gulp.task('scss', function(){
	gulp.src(source.scss)
		.pipe(sourcemaps.init())
		.pipe(scss({
			outputStyle: 'compact'
			//outputStyle: 'compressed'
		}).on('error', scss.logError))
		.pipe(rename('ibuilder-lib.css'))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('dist/css/'));
});
gulp.task('scss:watch', function(){
	gulp.watch('./src/css/*.scss', ['scss']);
});


// scss to css from documentation
gulp.task('scss-doc', function(){
	gulp.src(source.scss_doc)
		.pipe(scss({
			outputStyle: 'compact'
			//outputStyle: 'compressed'
		}).on('error', scss.logError))
		.pipe(gulp.dest('documentation/assets/css/'));
});
gulp.task('scss-doc:watch', function(){
	gulp.watch(source.scss_doc, ['scss-doc']);
});




// build javascript files
gulp.task('javascript', function(){
	gulp.src(source.js)
			.pipe(sourcemaps.init())
			.pipe(concat('ibuilder-lib.min.js', { newLine: '\n' }))
			//.pipe(uglify())
			.pipe(sourcemaps.write('maps'))
			.pipe(gulp.dest('dist/js/'));
});
// watch javascript
gulp.task('javascript:watch', function(){
	gulp.watch(source.js, ['javascript']);
});


// default
gulp.task('default', function(){
	console.log('hello');
});

