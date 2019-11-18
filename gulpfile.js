let gulp = require('gulp');
let sass = require('gulp-sass');
gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src('app/sass/**/*.sass', 'app/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', 'app/sass/**/*.scss', gulp.parallel('sass'));
});
gulp.task('default', gulp.parallel('sass', 'watch'));