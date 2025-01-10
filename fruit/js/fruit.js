function checki() {


  event.preventDefault();
  const gift3kgInput = document.getElementById("gift3kgInput");
  const gift5kgInput = document.getElementById("gift5kgInput");
  const home3kgInput = document.getElementById("home3kgInput");
  const home5kgInput = document.getElementById("home5kgInput");
  // const giftWrap = document.querySelector("#packaging");
  // const noWrap = document.querySelector("#packaging");
  // 입력 필드 존재 여부 확인
  // if (!gift3kgInput || !gift5kgInput) {
  //   console.error("입력 필드가 존재하지 않습니다.");
  //   return;
  // }
  // if (!home3kgInput || !home5kgInput) {
  //   console.error("입력 필드가 존재하지 않습니다.");
  //   return;
  // }

  // 값 가져오기
  const gift3kgValue = gift3kgInput.value;
  const gift5kgValue = gift5kgInput.value;
  const home3kgValue = home3kgInput.value;
  const home5kgValue = home5kgInput.value;

  // 값 출력
  console.log("선물용 3kg 입력값:", gift3kgValue);
  console.log("선물용 5kg 입력값:", gift5kgValue);
  console.log("가정용 3kg 입력값:", home3kgValue);
  console.log("가정용 5kg 입력값:", home5kgValue);

  const name = document.querySelector("#name");
  const address = document.querySelector("#address");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const deliveryDate = document.querySelector("#deliveryDate");
  const memo = document.querySelector("#memo");

  console.log("name : " + name.value);
  console.log("address : " + address.value);
  console.log("email : " + email.value);
  console.log("phone : " + phone.value);
  console.log("deliveryDate : " + deliveryDate.value);
  console.log("memo :" + memo.value);
}
// toggleInput 함수 정의
function toggleInput(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  const input = document.querySelector(`#${checkboxId} + input[type='text']`);
  if (checkbox.checked) {
    input.disabled = false;
    input.focus();
  } else {
    input.disabled = true;
    input.value = ""; // 체크 해제 시 입력란 초기화
  }
}
function logPackagingChoice() {
  // 선택된 라디오 버튼 값 읽기
  const selectedOption = document.querySelector('input[name="packaging"]:checked');
  
  if (selectedOption) {
    console.log('선택한 포장 옵션:', selectedOption.value === 'giftWrap' ? '선물 포장' : '포장 안 함');
  } else {
    console.log('포장 옵션이 선택되지 않았습니다.');
  }
}
document.getElementById('shippingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const selectedOption = document.querySelector('input[name="packaging"]:checked');
  if (selectedOption) {
    console.log('제출된 포장 옵션:', selectedOption.value === 'giftWrap' ? '선물 포장' : '포장 안 함');
  } else {
    console.log('포장 옵션이 선택되지 않았습니다.');
  }
});