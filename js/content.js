const btns = document.querySelectorAll(".btns li");
const articles = document.querySelectorAll("section article");

// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록
for(let i in btns){
    // console.log(btn);

    // 각 버튼 클릭
//     btn.addEventListener("click", function mouseDown(e) => {
//         // on 클래스 추가 및 제거 로직
//         // console.log(btn);
//         for(let element of btns) {
//             // console.log(element);
//             element.classList.remove("on");
//         };
//         btn.classList.add('on');  
//         for(let element of articles) {
//             element.classList.remove("on");
//         };
//     });
// };


        btns[i].addEventListener("click", (e) => {
            // on 클래스 추가 및 제거 로직
            // console.log(btn);
            for(let element of btns) {
                // console.log(element);
                element.classList.remove("on");
            };
            btns[i].classList.add('on');  
            for(let element of articles) {
                element.classList.remove("on");
            };
            articles[i].classList.add('on');
        });
};
