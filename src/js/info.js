
// 새가족 안내 - FAQ 접고 펴기 
var faq = document.querySelectorAll('.faq');
faq.forEach(element => {
    console.log(element.firstElementChild);
    element.firstElementChild.addEventListener('click',()=>{
        element.classList.toggle('open');
        if(element.classList.contains('open')){
            element.lastElementChild.style.height = element.lastElementChild.lastElementChild.offsetHeight + 'px';            
        }else{
            element.lastElementChild.style.height = '0px';
        }
        // console.log(element.lastElementChild.style.height+','+element.lastElementChild.lastElementChild.offsetHeight);
        // element.lastElementChild.style.height=element.lastElementChild.lastElementChild.offsetHeight + 'px';
    })
});
var faq_open = document.querySelectorAll('.faq.open');
faq_open.forEach(element => {
    element.lastElementChild.style.height = element.lastElementChild.lastElementChild.offsetHeight + 'px';
});

// I'm new - 언어선택 부분
var language = document.getElementById('selLang');
if(language){
language.addEventListener('change',()=>{
    if(language.selectedOptions[0]){
        var lang = language.selectedOptions[0].value;
        // language.removeAttribute('id');
        var blocks = document.querySelectorAll('.imNew');
        var count = 0;
        blocks.forEach(element => {
            if(element.classList.contains(lang)){
                count++;
                element.classList.remove('off');
                element.classList.add('on');
                // element.querySelector('select').setAttribute('id','selLang');
            }else{
                element.classList.remove('on');
                element.classList.add('off');
            }
        });
        if(count<1){                
            document.querySelector('.imNew.English').classList.remove('off');
            document.querySelector('.imNew.English').classList.add('on');
        }
    }
    // console.log(language.selectedOptions[0].label);

})
}

const exist_imnew = document.querySelector('.imNew');
if(exist_imnew){
    const combobox = document.querySelectorAll('.imNew .combobox');
    combobox.forEach(element1 => {
        var combo_li = element1.querySelectorAll('.imNew .combobox li');
        combo_li.forEach(element2 => {
            // console.log(element1,element2);
            element2.addEventListener('click',(e)=>{
                var opened = element1.classList.toggle('open');
                // console.log(opened);
                if(!opened){
                    document.querySelector('.imNew.on').classList.replace('on','off');
                    document.querySelector('.imNew.'+element2.className).classList.replace('off','on');
                }
            })        
        })
        element1.addEventListener('blur',()=>{
            element1.classList.remove('open');
        })
        
    });
}

// 교회 소개 - 담임목사 저서 부분 slide
function books_slide(){
    const slider = document.querySelector('.booksWrap');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    if(slider){
        slider.addEventListener('mousedown', e => {
            isDown = true;
            // slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            // console.log('down', scrollLeft);
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            // slider.classList.remove('active');
            // console.log('leave');
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            // slider.classList.remove('active');
            // console.log('up');
        });
        
        slider.addEventListener('mousemove', e => {
            if (!isDown) return; 
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollTo(scrollLeft - walk,0);
            // console.log('move', scrollLeft - walk, x);
        });
    }
}
books_slide();

// 교회 소개 - 교회 역사 부분 slide
function history_slide(){
    const slider = document.querySelector('.historyWrap');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    if(slider){
        slider.addEventListener('mousedown', e => {
            isDown = true;
            // slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            // console.log('down', scrollLeft);
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            // slider.classList.remove('active');
            // console.log('leave');
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            // slider.classList.remove('active');
            // console.log('up');
        });
        
        slider.addEventListener('mousemove', e => {
            if (!isDown) return; 
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollTo(scrollLeft - walk,0);
            // console.log('move', scrollLeft - walk, x);
        });
}
}
history_slide();

window.addEventListener('load',()=>{

})

// 교회 시설 - tab action
if(document.querySelector('.facilities')){
    const bt01 = document.querySelector('.facilities button.bd01');
    const bt02 = document.querySelector('.facilities button.bd02');
    const bt03 = document.querySelector('.facilities button.bd03');
    bt01.addEventListener('click',()=>{
        document.querySelector('.facilities button.on').classList.remove('on');
        bt01.classList.add('on');
        document.querySelector('.floor.on').classList.remove('on');
        document.querySelector('.floor.bd01').classList.add('on');
    });
    bt02.addEventListener('click',()=>{
        document.querySelector('.facilities button.on').classList.remove('on');
        bt02.classList.add('on');
        document.querySelector('.floor.on').classList.remove('on');
        document.querySelector('.floor.bd02').classList.add('on');
    });
    bt03.addEventListener('click',()=>{
        document.querySelector('.facilities button.on').classList.remove('on');
        bt03.classList.add('on');
        document.querySelector('.floor.on').classList.remove('on');
        document.querySelector('.floor.bd03').classList.add('on');
    });
}


// 주일학교 - 일러스트 네비게이션 
if(document.querySelector('.sunday_school')){    
    const sec01 = document.getElementById('section01');
    var sec01_top = sec01.offsetTop - 0.6*innerHeight;
    const sec02 = document.getElementById('section02');
    var sec02_top = sec02.offsetTop - 0.6*innerHeight;
    const sec03 = document.getElementById('section03');
    var sec03_top = sec03.offsetTop - 0.6*innerHeight;
    const sec04 = document.getElementById('section04');
    var sec04_top = sec04.offsetTop - 0.6*innerHeight;
    const sec05 = document.getElementById('section05');
    var sec05_top = sec05.offsetTop - 0.6*innerHeight;
    // const title_top = document.querySelector('.h1.title').offsetTop;
    var navi_top = sec01.offsetTop;
    var middle_top = (innerHeight - document.querySelector('.fixed_illust').offsetHeight)*0.5;

    // 로딩후 일러스트네비 위치 지정 - PC 세로형
    if((navi_top - scrollY) > middle_top){
        document.querySelector('.fixed_illust').style.top = navi_top - scrollY + 'px';
    }else{
        document.querySelector('.fixed_illust').style.top = middle_top + 'px';    
    }

    // 로딩후 일러스트네비 위치 지정 - mobile 가로형
    if(scrollY>sec01_top){         
        document.querySelector('.fixed_illust_bt').style.opacity = '100';            
    }else{            
        document.querySelector('.fixed_illust_bt').style.opacity = '0';
    }
    
    window.addEventListener('scroll',()=>{
        // console.log(scrollY);
        var arr_illust = document.querySelectorAll('.fixed_illust img');
        arr_illust.forEach(element => {
            element.style.filter = 'grayscale(100%)';
        });
        var arr_illust_bt = document.querySelectorAll('.fixed_illust_bt img');
        arr_illust_bt.forEach(element => {
            element.style.filter = 'grayscale(100%)';
        });
        if(scrollY>sec01_top && scrollY<sec02_top){
            document.querySelector('.sec01_img').style.filter = 'none';
            document.querySelector('.fixed_illust_bt .sec01_img').style.filter = 'none';
        }else if(scrollY>sec02_top && scrollY<sec03_top){
            document.querySelector('.sec02_img').style.filter = 'none';
            document.querySelector('.fixed_illust_bt .sec02_img').style.filter = 'none';
        }else if(scrollY>sec03_top && scrollY<sec04_top){
            document.querySelector('.sec03_img').style.filter = 'none';
            document.querySelector('.fixed_illust_bt .sec03_img').style.filter = 'none';
        }else if(scrollY>sec04_top && scrollY<sec05_top){
            document.querySelector('.sec04_img').style.filter = 'none';
            document.querySelector('.fixed_illust_bt .sec04_img').style.filter = 'none';
        }else if(scrollY>sec05_top){
            document.querySelector('.sec05_img').style.filter = 'none';
            document.querySelector('.fixed_illust_bt .sec05_img').style.filter = 'none';
        }else{
            arr_illust.forEach(element => {
                element.style.filter = 'none';
            });
        }
        
        // 모바일 - 컨텐츠 영역에서만 일러스트 네비가 나타남
        if(scrollY>sec01_top){         
            document.querySelector('.fixed_illust_bt').style.opacity = '100';            
        }else{            
            document.querySelector('.fixed_illust_bt').style.opacity = '0';
        }

        // height 중앙에 위치하기 전까지는 화면과함께 일러스트 네비도 이동됨
        if((navi_top - scrollY) > middle_top){
            document.querySelector('.fixed_illust').style.top = navi_top - scrollY + 'px';
        }
    });
    
    window.addEventListener('resize',()=>{
        sec01_top = sec01.offsetTop - 0.6*innerHeight;
        sec02_top = sec02.offsetTop - 0.6*innerHeight;
        sec03_top = sec03.offsetTop - 0.6*innerHeight;
        sec04_top = sec04.offsetTop - 0.6*innerHeight;
        sec05_top = sec05.offsetTop - 0.6*innerHeight;
        navi_top = sec01.offsetTop;
        middle_top = (innerHeight - document.querySelector('.fixed_illust').offsetHeight)*0.5;
    
        // 로딩후 일러스트네비 위치 지정 - PC 세로형
        if((navi_top - scrollY) > middle_top){
            document.querySelector('.fixed_illust').style.top = navi_top - scrollY + 'px';
        }else{
            document.querySelector('.fixed_illust').style.top = middle_top + 'px';    
        }
    
        // 로딩후 일러스트네비 위치 지정 - mobile 가로형
        if(scrollY>sec01_top){         
            document.querySelector('.fixed_illust_bt').style.opacity = '100';            
        }else{            
            document.querySelector('.fixed_illust_bt').style.opacity = '0';
        }
    });

}