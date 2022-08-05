const $btns = document.getElementById('btns');
$btns.addEventListener('click', (e) => {
    // console.log(e.target);
    // num
    if(e.target.classList.contains("num")) {
        console.log(e.target.innerHTML);
    }
})



function inputNum(num) {
    const result = document.getElementById('result-inpur');
    result.value += num;

}

function inputOperator(operator) {
  if(operator == '/'){
    
  }
}

