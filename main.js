const dts = document.querySelectorAll("dt");
const dds = document.querySelectorAll("dd");

const dts_a = document.querySelectorAll("dt>a");
//tab키로 이동하게 될 추적할 대상으로써 A태그를 사용했을뿐 a태그에는 큰 의미는 없다 

dts_a.forEach((el, index) => {
  el.addEventListener("focusin", () => {
    activation(dts, index);
    activation(dds, index);
  })
})

dts.forEach((el, index) => {
  //배열에 반복을 돌면서 클릭 이벤트를 부여 한다 
  el.addEventListener("click", (e) => {
    e.preventDefault();
    //모든곳에 on을 떼었다가 
    //for (let el of dts) el.classList.remove("on");
    //el.classList.add("on");

    //for(let el of dds){
    // el.classList.add("on");
    // }
    // dds[index].classList.add("on");

    //활성화 함수를 이름을 불러줌 
    activation(dts, index);
    activation(dds, index);
    })

    //내가 선택한 그 부분만 on을 붙임 
  })

  //활성화 함수를 만듦
  function activation(arr, index) {
    for (let el of arr) {
      el.classList.remove("on");
    }
    arr[index].classList.add("on");
  }


