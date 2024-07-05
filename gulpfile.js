const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

// 초기세팅 - 기존 html 파일을 ejs파일로 변경
function htmltoejs(){
    return src('./src/include/inc_header.html','./src/include/inc_footer.html')
    .pipe(rename({
        extname: '.ejs'
    }))
    .pipe(dest('./src/include/'));
}

// html 파일 include  
function html(){
    var basePath = './src/include';
    var path = { source:'./src/html/*.html', destination:'./dist/html/'};

    for(let i = 0; i < path.length; i++){
        src(path[i].source)
        .pipe(fileInclude({prefix:'@@', basepath: basePath}))
        .pipe(dest(path[i].destination));
    }

    done();
}