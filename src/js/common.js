function menu_open(){
    // body overflow-y hidden을 먼저, scrollY 값 가져오는걸 나중에 해야함. (스크롤값에 차이가 생김)    
    document.querySelector('.menuWrap').style.width = '100vw';    
    document.querySelector('.menuWrap').style.height = '100%';
    document.querySelector('.menuLayerBg').style.top = window.scrollY+'px';
    document.querySelector('.menuLayerBg').style.display = 'block';
    document.querySelector('body').style.overflowY = 'hidden';
    document.querySelector('.menuLayer').style.top = window.scrollY+'px';
    document.querySelector('.menuLayer').style.height = window.innerHeight +'px';
    // document.querySelector('.menuLayer').style.left = '0px';
    document.querySelector('.menuLayer').style.transform = 'translateX(0)';
}
function menu_close(){
    document.querySelector('.menuLayer').style.transform = 'translateX(100vw)';
    setTimeout(() => {
        document.querySelector('.menuWrap').style.width = '0';    
        document.querySelector('.menuWrap').style.height = '0';           
        document.querySelector('.menuLayerBg').style.display = 'none';
        document.querySelector('body').style.overflowY = 'visible';
    }, 1000);
}

function menu_down(){
    let gnbSubmenu = document.querySelector('header .hCenter .menu');
    gnbSubmenu.addEventListener('mouseover', ()=>{
        // document.querySelector('header .hCenter .menu .submenu').style.height= '220px';
        document.querySelector('header').classList.add('on');
    });
    gnbSubmenu.addEventListener('mouseout', ()=>{
        // document.querySelector('header .hCenter .menu .submenu').style.height= '0px';
        document.querySelector('header').classList.remove('on');
    });
    if(document.querySelector('header.sub .hCenter .menu')){
        let gnbSubmenu2 = document.querySelector('header.sub .hCenter .menu');
        gnbSubmenu2.addEventListener('mouseover', ()=>{
            // document.querySelector('header.sub').style.height ='270px';
        document.querySelector('header.sub').classList.add('on');
        });
        gnbSubmenu2.addEventListener('mouseout', ()=>{
            // document.querySelector('header.sub').style.height= '68px';
        document.querySelector('header.sub').classList.remove('on');
        });
    }
}

function nav_focus(){
    let li_on = document.querySelector('nav.nav_3rd li.on');    
    let li_on_x = li_on.getBoundingClientRect().x + li_on.getBoundingClientRect().width;
    let win_w = window.innerWidth;
    if(li_on_x > win_w){
        let diff = li_on_x - win_w + 20;
        document.querySelector('nav.nav_3rd').scrollLeft += diff;
    }
}

function menu_init(){    
    let openBtn = document.querySelector('header .buttons .btn_menu');
    openBtn.addEventListener('click',menu_open);
    
    let closeBtn = document.querySelector('.menuLayer .mHeader .btn_close');
    closeBtn.addEventListener('click',menu_close);

    menu_down();

    if(document.querySelector('nav.nav_3rd')){
        nav_focus();
    }
}

window.onresize = function(e){
    document.querySelector('.menuLayer').style.height = window.innerHeight +'px';
}

menu_init();
// console msg for mobile
// document.querySelector('.console').style.display = 'block';
// document.querySelector('.console').innerHTML = document.querySelector('body').style.overflowY;

// console.log(document.querySelector('.manuLayer').style.width);