//variables 
const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const imageMin = require('gulp-imagemin');
const concat = require('gulp-concat');

//Rutas genericas de los archivps compilados
const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*'
}

//Compilar sass y mandarlo a la carpeta build
function css() {
    return src(paths.scss)
        .pipe(sass({ outputStyle: 'expanded'}))
        .pipe(dest('./build/css'))
        .pipe(notify({ message: 'Transformando sass en css'}));
}

//Mandar js a carpeta de produccion
function js() {
    return src(paths.js)
        .pipe(concat('app.js'))
        .pipe(dest('./build/js'));
}

//Compilar archivos al guardar los cambios
function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, js);
}

exports.default = series(css, js, watchArchivos);