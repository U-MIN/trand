//모바일 메뉴 스크립트

const ham = document.querySelector('.m-btn');
const close = document.querySelector('.close');
const m_gnb = document.querySelector('.m-gnb')


ham.addEventListener("click",()=>{
    m_gnb.style.right="0px";
});

close.addEventListener("click",()=>{
    m_gnb.style.right="-300px";
});


//모바일 gnb 클릭시 메뉴 늘어났다가 줄어드는 것
const mList = document.querySelectorAll(".m-gnb .gnb > li"); //다섯개의 메인메뉴
const depth2 = document.querySelectorAll(".m_depth2");




for(let i=0; i<mList.length; i++){

    mList[i].addEventListener("click",(e)=>{
        e.preventDefault();
        
        if(mList[i].classList.contains("on")){
            mList[i].classList.remove("on");
            mList[i].style.height = mList[i].offsetHeight - depth2[i].offsetHeight +"px"
        }
        else{
            const open = document.querySelectorAll(".m-gnb .gnb > li.on");
            for(let j=0; j < open.length; j++){
                open[j].classList.remove("on");
                open[j].style.height = mList[i].offsetHeight + "px";
            }

            mList[i].classList.add("on");
            mList[i].style.height = mList[i].offsetHeight + depth2[i].offsetHeight + "px";

        }
    });
}





//전체 드롭다운 스크립트
const gnb = document.querySelector(".gnb");
const gnbBg = document.querySelector(".gnb_bg");
const depth = document.querySelectorAll(".depth2");

//gnb 메뉴와 gnbBg에 배열변수를 만들어준다 -> 이후 메뉴 선택 반복문 달아주기
const gnbSet = [gnb , gnbBg];

for(let i = 0; i < gnbSet.length; i++){

    gnbSet[i].addEventListener("mouseover",()=>{

        for(let j = 0; j <depth.length; j++){
            depth[j].style.display = "block";
        };

        gnbBg.style.display = "block";

    });

    gnbSet[i].addEventListener("mouseout",()=>{
        for(let j = 0; j < depth.length; j++){
            depth[j].style.display = "none";    
        };

        gnbBg.style.display = "none";
    });
}


//슬라이드 스크립트
/*필요한 변수 세팅*/

const view = document.querySelector(".slider_view");
//움직이는 슬라이드 화면

const leftBtn = document.querySelector(".leftBtn");
//클릭할 이전 버튼

const rightBtn = document.querySelector(".rightBtn");
//클릭할 이후 버튼


const pager = document.querySelectorAll(".pager > li");
//pager 안의 li태그 4마리 선택(배열형태)


const stopBtn = document.querySelector(".stopBtn");
const playBtn = document.querySelector(".playBtn");

const pagerLength = pager.length; //현재는 4로 나옴!!
//pager안에 li태그 갯수(길이) 값 담아놓음 -> 나중에 수정할 필요가 없도록 하기 위해서 변수로 잡아둠




let slideNumber = 0;
//버튼 클릭시 순번 바뀔 값

//슬라이드 버튼+원 :조건문 반복문
//이전버튼 클릭시 슬라이드 이동 + 동그라미 색도 변하게
leftBtn.addEventListener("click",()=>{
    if (slideNumber == 0){
        slideNumber =pagerLength-1;

    }
    else{
        slideNumber--;

    }

    //동그라미 버튼들 클래스 on 전부 제거
    for(let i=0; i<pager.length; i++){
        pager[i].classList.remove("front");
    }

    pager[slideNumber].classList.add("front");  //배열변수 i는 반복문 안에서만 사용 가능
                                             //그러므로 조건문에서 만들어준 슬라이드넘버로 변수 만들어줌

    //slideNumber 숫자값과 매칭되는 li태그 버튼만 선택


    view.style.marginLeft = -100*slideNumber+"%";
});

//이후버튼 클릭시 슬라이드 이동 + 동그라미 색 변하게
rightBtn.addEventListener("click",()=>{
    if(slideNumber == pagerLength-1){
        slideNumber=0;

    }
    else{
        slideNumber++;
    }

    //동그라미 제거 후 다시 넣어주기
    for(let i=0; i <pager.length; i++){
        pager[i].classList.remove("front");
    }

    pager[slideNumber].classList.add("front");


    view.style.marginLeft = -100*slideNumber+"%";

});



//동그라미 누르면 슬라이드 움직이도록 하는 작동
//pager안의 li태그 클릭시 data-index 값을 가지고 옴
for(let i=0; i<pager.length; i++){
    pager[i].addEventListener("click",(e)=>{
        //동그라미 클릭하면 색상변경 
        //1. 클래스가 다 빠진 뒤
        //2. 클릭한 것만 색이 들어감

        for(let j=0; j<pager.length; j++){
            pager[j].classList.remove("front");
        }
        //내가 마우스를 선택한 현재대상의 클래스 값을 붙여주겠다
        e.currentTarget.classList.add("front");
        

        //클릭한 li태그의 html에 심어놓은 data-index 속성값을 가지고 옴
        //동그라미 속 숫자값을 slideNumber로 넣자!!
        slideNumber = e.currentTarget.getAttribute("data-index");
        

        //슬라이드 화면 움직임
        view.style.marginLeft = -100*slideNumber+"%";
    });
}




//탭메뉴
//변수만들기
const tabMenu = document.querySelectorAll(".tab_menu > ul > li");
const tabList = document.querySelectorAll(".tab_list > div");


// 반복문으로 전체 사라졌다가, front변수로 붙여주면서 다시 플렉스 시키기
for(let i=0; i < tabMenu.length; i++){
    tabMenu[i].addEventListener("click",(e)=>{
        e.preventDefault();

        for(let j=0; j < tabMenu.length; j++){
            tabMenu[j].classList.remove("front");
            tabList[j].style.display = "none";
        }

        
        //클릭한 li 사건만 활성화처리
        e.currentTarget.classList.add("front");
        tabList[i].style.display = "block";
    });
}


//슬라이드 자동실행 및 재생 멈춤 버튼
//버튼 변수 상단에 만들어 줌

//처음 자동실행 + 조건문으로 만들어 줌
let autoSlide = setInterval(()=>{
    if(slideNumber == pagerLength-1){
        slideNumber =0;
    }
    else{
        slideNumber++;
    }
    //동그라미도 같이 움직어야 하니까 반복문으로 동그라미 제거 후 다시 붙여줌
    for (let i=0; i<pagerLength; i++){
        pager[i].classList.remove("front");
    }
    //조건문 실행시 결과로 나온 slideNumber로 현재몇번째인지 배열변수 정해줌
    pager[slideNumber].classList.add("front");

    //슬라이드의 화면을 움직이게 함
    view.style.marginLeft = -100*slideNumber+"%";

},3000);



//멈춤버튼을 눌렀을 때 자동실행 멈춤
stopBtn.addEventListener("click",()=>{
    clearInterval(autoSlide);

    stopBtn.style.display = "none";
    playBtn.style.display = "block";
});


//재생버튼 눌렀을 때 다시 자동실행
playBtn.addEventListener("click",()=>{
    stopBtn.style.display = "block";
    playBtn.style.display = "none";
    
    autoSlide = setInterval(()=>{
        if(slideNumber == pagerLength-1){
            slideNumber =0;
        }
        else{
            slideNumber++;
        }
        //동그라미도 같이 움직어야 하니까 반복문으로 동그라미 제거 후 다시 붙여줌
        for (let i=0; i<pagerLength; i++){
            pager[i].classList.remove("front");
        }
        //조건문 실행시 결과로 나온 slideNumber로 현재몇번째인지 배열변수 정해줌
        pager[slideNumber].classList.add("front");
    
        //슬라이드의 화면을 움직이게 함
        view.style.marginLeft = -100*slideNumber+"%";
    
    },3000);
});




//스크롤기능


const hTop = document.querySelector(".h-top");
const topBtn = document.querySelector(".topBtn");
const logo = document.querySelector(".logo img");

window.addEventListener("scroll",()=>{
    let scTop = window.scrollY;

    if(scTop > 0){
        hTop.classList.add("on");
        logo.setAttribute("src","img/logo_change.png");
    }

    else{
        hTop.classList.remove("on");
        logo.setAttribute("src","img/logo.png");
    }

    if(scTop >= 700){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

//우측 하단 버튼을 클릭했을 때 스크롤바가 부드럽게 이동되게끔 처리

topBtn.addEventListener("click",(e)=>{

    e.preventDefault();
        
    window.scrollTo({ 
        top:0,
        left:0,
        behavior:"smooth" //부드러운 움직임을 추가할 때의 옵션 , 기본값은 "auto"


    });
});

