
// gulp plugin import
// import문(ES6)으로 쓰기 위해 package.json 마지막에 	"type": "module" 추가하였음. (default: "commonjs")
import { src, dest, series, parallel } from 'gulp';
import {deleteAsync as del} from 'del';
import rename from 'gulp-rename';
import ejs from 'gulp-ejs';

// 설치하였으나 사용하지 않는 플로그인
// import browserSync from 'browser-sync';


// 0. 초기세팅에 사용한 함수 (파일 확장자 변환용)
function htmltoejs(){
    return src(['./src/include/inc_header.ejs','./src/include/inc_footer.ejs'])
    .pipe(rename({
        extname: '.html'
    }))
    .pipe(dest('./src/include/'));
}


// 1. dist 디렉토리 내 기존 파일 삭제 (images제외)
function clearAll(done) {
  let paths = ["./dist/html/*", "./dist/css/*", "./dist/js/*"];

  Promise.all(paths.map(path => del(path, {force:true})))
    .then(() => {
      done();
    });

}

// 2. header, footer를 include하여 html 파일 생성
function html(done){
  var basePath = './src/include';
  var path = {source:'./src/ejs/*.ejs', destination:'./dist/html/'};

  src(path.source)
    .pipe(ejs().on('error', console.error))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(dest(path.destination));
  
  done();
}

// 3. css 파일 복사
function css(done){
  
    var path = { source:'./src/css/*.css', destination:'./dist/css/'};

    src(path.source)
      .pipe(dest(path.destination));

    done();
  
}

// 4. js 파일 복사
function js(done){
  
  var path = { source:'./src/js/*.js', destination:'./dist/js/'};

  src(path.source)
    .pipe(dest(path.destination));

  done();

}


// function images(done){
  
//   var paths = [
//     { source:'./src/images/*', destination:'./dist/images/'},
//     { source:'./src/images/p/*', destination:'./dist/images/p/'},
//   ];

  
//   Promise.all(paths.map(path => {
//     src(path.source)
//     .pipe(image())
//     .pipe(dest(path.destination));
//   }))
//     .then(() => {
//       done();
//     });

// }

// 5. default task - dist 디렉토리 초기화 후 html 생성과 css, js 복사 를 병렬로 실행
export default series(clearAll, parallel(html, css, js));