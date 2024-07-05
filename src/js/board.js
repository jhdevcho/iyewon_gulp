
// 주일예배 - 녹취록 부분 더보기/ 줄이기
if(document.querySelector('.viewArea .moreBtn button')){
const contMoreBtn = document.querySelector('.viewArea>.moreBtn button');
contMoreBtn.addEventListener('click', ()=>{
    console.log('click');
    if(document.querySelector('.recordedText').style.height=='auto'){
        document.querySelector('.recordedText').style.height='500px';
        document.querySelector('.viewArea>.moreBtn button').innerHTML = '더보기';
    }else{
        document.querySelector('.recordedText').style.height='auto';
        document.querySelector('.viewArea>.moreBtn button').innerHTML = '줄이기';
    }
});
}


// 주일예배, 금요철야, 원단메세지, 특별예배 - 우측 리스트 버튼 플레이
if(document.querySelector('.viewArea .btns .moreBtn .prev')){
    const prevBtn = document.querySelector('.viewArea .btns .moreBtn .prev');
    const nextBtn = document.querySelector('.viewArea .btns .moreBtn .next');
    var page = 0;
    var transX = 0;
    prevBtn.addEventListener('click', ()=>{
        console.log('prev');
        transX = transX - 1;
        document.querySelector('.viewArea .listWrap.viewer .listSlide').style.transform = "translateX("+transX*100+"%)";
    });
    nextBtn.addEventListener('click', ()=>{
        console.log('next');
        transX = transX + 1;
        document.querySelector('.viewArea .listWrap.viewer .listSlide').style.transform = "translateX("+transX*100+"%)";
    });
}

// 예배와 훈련 검색부분
function searchChange(obj){
    // document.querySelectorAll('.searchWrap').forEach(item => {
    //     console.log(item);
    //     item.style.display='none';
    // });
    document.querySelector('.searchTitle').style.display='none';
    document.querySelector('.searchPastor').style.display='none';
    document.querySelector('.searchBible').style.display='none';
    document.querySelector('.searchDate').style.display='none';
    document.querySelector('.selectWrap').classList.remove('date');
    if(obj.value=='title'){
        document.querySelector('.searchTitle').style.display='block';
    }else if(obj.value=='pastor'){
        document.querySelector('.searchPastor').style.display='block';
    }else if(obj.value=='bible'){
        document.querySelector('.searchBible').style.display='block';
    }else if(obj.value=='date'){
        document.querySelector('.searchDate').style.display='block';
        document.querySelector('.selectWrap').classList.add('date');
    }else{
        console.log('none');
    }
}