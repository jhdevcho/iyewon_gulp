
// 퀵메뉴
function quick_open(){
    document.querySelector('.floatBtn .quick').classList.remove('off');
}
function quick_close(){
    document.querySelector('.floatBtn .quick').classList.add('off');
}
window.onscroll = (event) => {
    document.querySelector('.floatBtn .quick').classList.add('off');
};

//1.메인
const w01 = document.querySelector('.scene01Wrap');
const s01 = document.querySelector('.scene01');
//2.치유
const w02 = document.querySelector('.scene02Wrap');
const s02 = document.querySelector('.scene02');
//3.후대
const w03 = document.querySelector('.scene03Wrap');
const s03 = document.querySelector('.scene03');
//4.현장
const w04 = document.querySelector('.scene04Wrap');
const s04 = document.querySelector('.scene04');
//5.선교
const w05 = document.querySelector('.scene05Wrap');
const s05 = document.querySelector('.scene05');
//6.이웃
const w06 = document.querySelector('.scene06Wrap');
const s06 = document.querySelector('.scene06');
//7.마무리-환영
const w07 = document.querySelector('.scene07Wrap');
const s07 = document.querySelector('.scene07');

const wMain = document.querySelector('.mainWrap');

var w02T = 0;
var s02S = 0;
var s02E = 0;

function size_init(){

    //1.메인
    var w01H = s01.offsetHeight + 100; // innerHeight * 3;//'2000';
    //2.치유
    var w02H = s02.offsetHeight + innerHeight + 100; //innerHeight * 6.5; //'5500';
    //3.후대
    var w03H = s03.offsetHeight; // + 100; // innerHeight * 3; //'3000';
    //4.현장
    var w04H = s04.offsetHeight; // + 100; // innerHeight * 3.5; //'4000';
    // console.log(w04H);
    //5.선교
    var w05H = s05.offsetHeight; // + 200; // innerHeight * 3; //'3000';
    //6.이웃
    var w06H = s06.offsetHeight; // + 100; // innerHeight * 3;  //'3000';
    //7.마무리-환영
    var w07H = s07.offsetHeight + innerHeight + 200; // innerHeight * 2.5;  //'2000';
    
    
    w01.style.height = w01H + 'px';
    w02.style.height = w02H + 'px';
    // s02.style.height = (w02H - innerHeight*2) + 'px';
    w03.style.height = w03H + 'px';
    w04.style.height = w04H + 'px';
    w05.style.height = w05H + 'px';
    w06.style.height = w06H + 'px';
    w07.style.height = w07H + 'px';
    
    w02T = (w01.offsetHeight - innerHeight);
    s02S = w02T+(innerHeight*0.7);
    s02E = Number(w02H) - Number(w02T) + s02.offsetHeight;
    
    w02.style.top = w02T + 'px';
    w03.style.top = w02.offsetTop + w02.offsetHeight + 'px' // + innerHeight +'px';
    w04.style.top = w03.offsetTop + w03.offsetHeight + 'px' // - innerHeight +'px';
    w05.style.top = w04.offsetTop + w04.offsetHeight + 'px' // + innerHeight +'px';
    w06.style.top = w05.offsetTop + w05.offsetHeight + 'px'
    w07.style.top = w06.offsetTop + w06.offsetHeight - innerHeight +'px';
    
    wMain.style.height = w07.offsetTop + w07.offsetHeight +'px';

}


// console.log(innerHeight);

// scene #1 yewon church text animation setting
const scene01Group = document.querySelector('.scene01 .svgFrame .pathGr')
const scene01Paths = scene01Group.querySelectorAll('path')
function writing_init(){
    scene01Paths.forEach((path, i) => {
      const length = path.getTotalLength()
      path.style.setProperty('--length', length)
      path.style.setProperty('--duration', length + 'ms')
      path.style.setProperty('--delay', i * 150 + 'ms')
    })
}
function writing(){
    scene01Paths.forEach((path) => {
        path.style.animation = 'path-in var(--duration) ease-in var(--delay) forwards';
    })
}
function erasing(){
    scene01Paths.forEach((path) => {
        path.style.animation = 'path-out var(--duration) ease-in var(--delay) forwards';
  })
}
writing_init();


function ani_text(op1, op2, op3, aniName, duration, delay){
    /*
    op1 = scene number (classname) 
    op2 = step or section name (classname)
    op3 = kind of h class ex)h1 or all  **
    aniName = name of keyframes ex)text-up 
    duration = full text ex)0.5s 
    delay = full text ex)0.7s or none **
    */
    var arr_items = {};
    var ani_str = aniName + ' ' + duration + ' ease-in-out';
    if(delay!='none'){
        ani_str = ani_str + ' ' + delay;
    }
    ani_str = ani_str + ' forwards';
    if(op3=='all'){
        arr_items = document.querySelectorAll("."+op1+" ."+op2+" p");
    }else{
        arr_items = document.querySelectorAll("."+op1+" ."+op2+" ."+op3);
    }
    arr_items.forEach(element => {
        element.style.animation = ani_str;
    });
}

window.scrollTo({left:0,top:0,behavior:'smooth'});
ani_text('scene01','step1','h1','text-up','1.0s','0.2s');
ani_text('scene01','step1','h2','text-up','0.7s','0.2s');
ani_text('scene01','step1','h3','text-up','0.7s','0.5s');
writing();

function cardBtn_init(){
    var isMobile = /Mobi/i.test(window.navigator.userAgent);
    if(!isMobile){
        document.querySelector('.scene02 .section02 .cardBtn').style.display = 'block';
        const cardWr = document.querySelector('.scene02 .section02 .cardWrap');
        const card = document.querySelector('.scene02 .section02 .reviewCard');
        const cardTop = cardWr.offsetTop;
        const cardLeft = cardWr.offsetLeft; 
        const cardWidth = cardWr.offsetWidth;
        const cardHeight = card.offsetHeight;
        const btnLeft = document.querySelector('.scene02 .section02 .cardBtn .left');
        const btnRight = document.querySelector('.scene02 .section02 .cardBtn .right');
        
        btnLeft.style.left = cardLeft - 25 + 'px';
        btnLeft.style.top = cardTop + cardHeight*0.5 -25 + 'px';
        btnRight.style.left = cardLeft + cardWidth - 25 + 'px';
        btnRight.style.top = cardTop + cardHeight*0.5 -25 + 'px';    
        
        // console.log(cardWr.scrollLeft, cardWidth, card.offsetWidth);
        var gap = card.offsetWidth - cardWidth;        
        if(innerWidth<800){
            gap = gap*0.5;
        }
        // console.log(gap);

        btnLeft.addEventListener('click',()=>{
            cardWr.scrollTo({top:0, left:cardWr.scrollLeft - gap, behavior:'smooth'});
        })
        btnRight.addEventListener('click',()=>{
            cardWr.scrollTo({top:0, left:cardWr.scrollLeft + gap, behavior:'smooth'});
        })

        // card.addEventListener('wheel',()=>{
        //     console.log('wheel');
        // })
    }
}

function bird_init(){
    const scene02Bird = document.querySelector('.scene02 .bird .svgArea');
    var bird_scale = '1';
    var point = document.querySelector('.scene02 .section01 .text .h0');
    var point_x = point.offsetLeft + point.offsetWidth -30;
    var point_y = point.offsetTop + point.offsetHeight - (705*bird_scale)/3 + 30;
    
    document.querySelector('.scene02 .section01 .text .padding').style.marginBottom = '';

    if(innerWidth < 1600 && innerWidth > 1200){
        bird_scale = (Number(innerWidth)/2)/887;
        point_y = point.offsetTop + point.offsetHeight - (705*bird_scale)/3 + 30;
    }else if(innerWidth <= 1200 && innerWidth > 800){
        // bird_scale = (Number(innerWidth)*0.8)/887;
        bird_scale = 600/887;
        point_y = point.offsetTop + point.offsetHeight - (705*bird_scale)/3 + 30;
    }else if(innerWidth <= 800){
        bird_scale = (Number(innerWidth))/887;
        point_x = point.offsetLeft + 20;
        point_y = point.offsetTop + point.offsetHeight + 15;
        document.querySelector('.scene02 .section01 .text .padding').style.marginBottom = bird_scale*705*0.7 + 'px';
    }
    // 새 크기와 svg 뷰박스 위치 조절(left 0, top 0 으로 맞추기)
    scene02Bird.style.transform = 'scale('+bird_scale+')';
    scene02Bird.style.marginLeft = -((1-bird_scale)/2)*887 + 'px';
    scene02Bird.style.marginTop = -((1-bird_scale)/2)*705 + 'px';
    
    // 새 위치 조절
    const bird_area = document.querySelector('.scene02 .bird');
    bird_area.style.left = point_x+'px';
    bird_area.style.top = point_y+'px';
    bird_area.style.height = bird_scale*705 + 'px';
    
}



//새싹 pop
const sprout0 = document.querySelector(".scene03 .sproutWrap .sprout0");
const sprout1 = document.querySelector(".scene03 .sproutWrap .sprout1");
const sprout2 = document.querySelector(".scene03 .sproutWrap .sprout2");
const sprout3 = document.querySelector(".scene03 .sproutWrap .sprout3");
const sprout4 = document.querySelector(".scene03 .sproutWrap .sprout4");

function sprout(spr){
    

    const text1 = document.querySelector(".scene03 .section01 .text");
    const photo1 = document.querySelector(".scene03 .section01 .photo");
    const text2 = document.querySelector(".scene03 .section02 .text");
    const photo2 = document.querySelector(".scene03 .section02 .photo");
    
    var scale0 = text1.offsetWidth / 1000;
    var top0 = text1.offsetTop - 150;
    var left0 = text1.offsetLeft + text1.offsetWidth - 350;
    var deg0 = "348deg";
    
    var scale1 = text1.offsetWidth / 1800;
    var top1 = text1.offsetTop - 150;
    var left1 = text1.offsetLeft + text1.offsetWidth - 250;
    var deg1 = "15deg";
    
    var scale2 = text1.offsetWidth / 1200;
    var top2 = photo1.offsetTop + photo1.offsetHeight - 250;
    var left2 = photo1.offsetLeft + 50;
    var deg2 = "350deg";

    var scale3 = text1.offsetWidth / 1800;
    var top3 = text2.offsetTop - 150;
    var left3 = text2.offsetLeft + 50;
    var deg3 = "330deg";

    var scale4 = text1.offsetWidth / 1000;
    var top4 = photo2.offsetTop - 120;
    var left4 = photo2.offsetLeft + 150;
    var deg4 = "5deg";

    if(innerWidth>=400 && innerWidth < 700){
        console.log(photo1.offsetTop,photo1.offsetLeft)
        top0 = 0;
        left0 = photo1.offsetLeft + photo1.offsetWidth*0.3;
        top1 = photo1.offsetTop;    // no use
        left1 = photo1.offsetLeft;  // no use
        top2 = photo1.offsetTop + photo1.offsetHeight*0.5;
        left2 = photo1.offsetLeft + photo1.offsetWidth*0.4;
        top3 = text2.offsetTop - text1.offsetHeight*0.3;
        left3 = text2.offsetLeft + text1.offsetWidth*0.1;
        top4 = photo2.offsetTop - photo2.offsetHeight*0.2;
        left4 = photo2.offsetLeft;
    }
    else if(innerWidth < 400){
        console.log(photo1.offsetTop,photo1.offsetLeft)
        top0 = 0;
        left0 = photo1.offsetLeft + photo1.offsetWidth*0.3;
        top1 = photo1.offsetTop;    // no use
        left1 = photo1.offsetLeft;  // no use
        top2 = photo1.offsetTop + photo1.offsetHeight*0.4;
        left2 = photo1.offsetLeft + text1.offsetWidth*0.2;
        top3 = text2.offsetTop - text1.offsetHeight*0.5;
        left3 = text2.offsetLeft - text1.offsetWidth*0.2;
        top4 = photo2.offsetTop - photo2.offsetHeight*0.4;
        left4 = photo2.offsetLeft - text1.offsetWidth*0.3;
    }

    var scale = scale0;
    var top = top0;
    var left = left0;
    var deg = deg0;
    
    if(spr==sprout1){
        scale = scale1;
        top = top1;
        left = left1;
        deg = deg1;
    }else if(spr==sprout2){
        scale = scale2;
        top = top2;
        left = left2;
        deg = deg2;
    }else if(spr==sprout3){
        scale = scale3;
        top = top3;
        left = left3;
        deg = deg3;
    }else if(spr==sprout4){
        scale = scale4;
        top = top4;
        left = left4;
        deg = deg4;
    }

    spr.style.top = top + 'px';
    spr.style.left = left + 'px';    
    spr.animate([
        { transform: "rotate("+deg+") scale(0.01)" },   
        { transform: "rotate("+deg+") scale("+scale+")" },        
    ],{
        duration:300,
        easing:"ease-out",
        fill:"forwards",
    });
}
function shrink(spr){
    spr.animate([
        { transform: "scale(0.01)"},
    ],{
        duration:100,
    })
}

let observer_sprout = new IntersectionObserver((e)=>{
    e.forEach((item)=>{
        if(item.isIntersecting){
            sprout(item.target);
        }else{
            shrink(item.target);
        }
    })
},{
    threshold:0.5
})
observer_sprout.observe(sprout0);
// observer_sprout.observe(sprout1);
observer_sprout.observe(sprout2);
observer_sprout.observe(sprout3);
observer_sprout.observe(sprout4);


document.querySelector(".floatBtn .counsel").addEventListener('click',()=>{
    window.scrollTo(0,window.scrollY+100);
})

window.addEventListener("load", function(){
    size_init();
    bird_init();
    cardBtn_init();    
})


window.addEventListener("resize", function(){
    size_init();
    bird_init();
    cardBtn_init();
});

let preScrollTop = 0;   // 스크롤 방향 계산용 변수

window.addEventListener('scroll', () => {
    
    console.log(scrollY);

  	let nextScrollTop = window.scrollY;  
    var scrollDirection = 'down';
    if(preScrollTop < nextScrollTop) { scrollDirection = 'down';}
    else { scrollDirection = 'up';}
    preScrollTop = nextScrollTop;

    // header - dark 세팅
    const s01_dark_s = 10;
    const s01_dark_e = document.querySelector('.scene01Wrap').offsetHeight;
    const s04_dark_s = w03.offsetTop+w03.offsetHeight;
    const s04_dark_e = w04.offsetTop+w04.offsetHeight*0.5;
    console.log(s01_dark_s,s01_dark_e,s04_dark_s,s04_dark_e);
    if((window.scrollY>s01_dark_s && window.scrollY < s01_dark_e)){
        document.querySelector('header').classList.add('dark');
        // console.log('구간1');
    }else if(window.scrollY>s04_dark_s && window.scrollY < s04_dark_e){
        document.querySelector('header').classList.add('dark');
        // console.log('구간2');
    }else{
        document.querySelector('header').classList.remove('dark');
        // console.log('이외');
    }
    

    // intro -> 말씀 영역
    if(window.scrollY>10){
        document.querySelector('.scene01Bg .bgImg').classList.remove('step01');
        document.querySelector('.scene01Bg .bgImg').classList.add('step02');
        document.querySelector('.scene01 .step1').style.transform = 'translate(0,-500px)';

        document.querySelector('.scene01 .step2').classList.add('end');
        
        ani_text('scene01','step1','all','text-down','0.5s','0.2s');
        erasing();
        

    }else{        
        document.querySelector('.scene01Bg .bgImg').classList.remove('step02');
        document.querySelector('.scene01Bg .bgImg').classList.add('step01');
        document.querySelector('.scene01 .step1').style.transform = 'translate(0,0)';

        document.querySelector('.scene01 .step2').classList.remove('end');
        
        setTimeout(function(){
            ani_text('scene01','step1','h1','text-up','1.0s','0.2s');
            ani_text('scene01','step1','h2','text-up','0.7s','0.2s');
            ani_text('scene01','step1','h3','text-up','0.7s','0.5s');
            writing();
        },200);
    }

    // 치유 - 텍스트 및 새 영역
    if(scrollY > s02S && scrollY <s02E+innerHeight*0.8){
        document.querySelector(".scene02 .bird").style.animation = 'bird-in 2.0s ease-out forwards';  
        ani_text('scene02','text','all','text-up','0.5s','none');
        document.querySelector(".scene02 .text a.btn").style.animation = 'text-up 0.5s ease-in-out forwards';

        document.querySelector('.scene02 .section02').style.opacity = '1';

        // set_back(1);
    }else{
        document.querySelector(".scene02 .bird").style.animation = 'bird-out 2.0s ease-in-out forwards';
        
        ani_text('scene02','text','all','text-down','0.5s','0.2s');
        document.querySelector(".scene02 .text .btn").style.animation = 'text-down 0.5s ease-in-out forwards';
        
        document.querySelector('.scene02 .section02').style.opacity = '0';
    }
    // 치유 - 간증 영역
    //review_scroll();


    // 후대 영역
    var s03S = w02.offsetTop+w02.offsetHeight - innerHeight*0.8;
    var s03E = w03.offsetTop+w03.offsetHeight;
    if(scrollY>=s03S && scrollY <s03E){
        // section 1 텍스트 up
        ani_text('scene03>.section01','text','all','text-up','0.5s','0.2s');
        document.querySelector(".scene03 .section01 .text a.btn").style.animation = 'text-up 0.5s ease-in-out forwards';

        if(scrollY>w02.offsetTop+w02.offsetHeight+innerHeight*0.1){
            // section 2 텍스트 up            
            ani_text('scene03>.section02','text','all','text-up','0.5s','0.2s');
            document.querySelector(".scene03 .section02 .text a.btn").style.animation = 'text-up 0.5s ease-in-out forwards';
        }
    }else{
        // 텍스트 down
        ani_text('scene03','text','all','text-down','0.5s','0.2s');
        document.querySelector(".scene03 .section01 .text a.btn").style.animation = 'text-down 0.5s ease-in-out forwards';
        document.querySelector(".scene03 .section02 .text a.btn").style.animation = 'text-down 0.5s ease-in-out forwards';
    }
    
    // 현장을 변화시키는 movement church 영역
    var s04S = w03.offsetTop+w03.offsetHeight;
    var s04E = w04.offsetTop+w04.offsetHeight;
    if(scrollY >= s04S && scrollY < s04E){
        if(scrollY >= s04S + 10){
            document.querySelector('.scene04Bg .bgImg').style.height = '50vh';
            
            ani_text('scene04','text','all','text-up','0.5s','1.0s');
            var arr_btn = document.querySelectorAll(".scene04 .section02 .text a.btn");
            arr_btn.forEach(element => {
                element.style.animation = 'text-up 0.5s ease-in-out 1.0s forwards';
            });
        }
    }else{
        document.querySelector('.scene04Bg .bgImg').style.height = '100vh';
        ani_text('scene04','text','all','text-down','0.5s','none');
        var arr_btn = document.querySelectorAll(".scene04 .section02 .text a.btn");
        arr_btn.forEach(element => {
            element.style.animation = 'text-down 0.5s ease-in-out forwards';
        });
    }

    var s05S = w04.offsetTop+w04.offsetHeight - innerHeight*0.8;
    var s05E = w05.offsetTop+w05.offsetHeight;
    if(scrollY >= s05S && scrollY < s05E){
        if(scrollY >= s05S + 20){            
            ani_text('scene05','top','all','text-up','0.5s','0.2s');
            document.querySelector('.scene05 .image .bartizan').style.animation = 'turn-on 1.5s ease-in-out 0.8s forwards';
            document.querySelector('.scene05 .bottom .left').style.animation = 'slideInL 1.0s ease-out 0.5s forwards';
            document.querySelector('.scene05 .bottom .right').style.animation = 'slideInR 1.0s ease-out 0.5s forwards';
        }
    }else{      
        ani_text('scene05','top','all','text-down','0.5s','0.2s');
        document.querySelector('.scene05 .image .bartizan').style.animation = 'turn-off 1.5s ease-in-out 0.2s forwards';
        document.querySelector('.scene05 .bottom .left').style.animation = 'slideOutL 1.0s ease-out forwards';
        document.querySelector('.scene05 .bottom .right').style.animation = 'slideOutR 1.0s ease-out forwards';
    }

    
    var s06S = w05.offsetTop+w05.offsetHeight-innerHeight*0.8;
    var s06E = w06.offsetTop+w06.offsetHeight;
    if(scrollY>=s06S && scrollY <s06E){        
        ani_text('scene06>.section01','text','all','text-up','0.5s','0.2s');
        var arr_btn = document.querySelectorAll(".scene06 .section01 .text a.btn");
        arr_btn.forEach(element => {
            element.style.animation = 'text-up 0.5s ease-in-out 0.5s forwards';
        });
        if(scrollY>s06S+innerHeight*0.8){            
            ani_text('scene06>.section02','text','all','text-up','0.5s','0.2s');
            var arr_btn = document.querySelectorAll(".scene06 .section02 .text a.btn");
            arr_btn.forEach(element => {
                element.style.animation = 'text-up 0.5s ease-in-out 0.5s forwards';
            });
        }
    }else{
        ani_text('scene06','text','all','text-down','0.5s','0.2s');
        var arr_btn = document.querySelectorAll(".scene06 .text .btn");
        arr_btn.forEach(element => {
            element.style.animation = 'text-down 0.5s ease-in-out forwards';
        });
    }

    
    var s07S = w06.offsetTop+w06.offsetHeight+150;
    var s07E = w07.offsetTop+w07.offsetHeight;
    if(scrollY >= s07S && scrollY < s07E){
        document.querySelector('.scene07').classList.remove('step1');
        document.querySelector('.scene07').classList.add('step2');
    }else{
        document.querySelector('.scene07').classList.remove('step2');
        document.querySelector('.scene07').classList.add('step1');
    }

    // console.log('scrollY: '+ scrollY + ', start:'+s03S+ ', end:' + s03E + ', card:'+ (scrollY-(w01.offsetHeight+200))/(s02E-(w01.offsetHeight+200))*600);
});
