let form = document.forms
let btnPlus = document.querySelector(".plus__btn")
let btnMinus = document.querySelector(".minus__btn")
let countSpan = document.querySelector(".counter")
let count = 1

btnPlus.addEventListener('click', () => {
  // countSpan.innerText=1
  countSpan.innerText++
  count = countSpan.innerText
  console.log(count)
})
btnMinus.addEventListener('click', () => {
  if(countSpan.innerText <= 1){
    alert("Eng kamida 1 kishi bo'lishi kerak")
    countSpan.innerText = 1
  }else{

    countSpan.innerText--
    count = countSpan.innerText
    console.log(count)
  }
})


let inpName = document.querySelector("#name"),
    inpEmail = document.querySelector("#email")
let selectMonths = document.querySelector("#month"),
    selectDays = document.querySelector("#day"),
    selectYears = document.querySelector("#year"),
    selectHours = document.querySelector("#hour"),
    selectMinuts = document.querySelector("#minut")
let years = ["2023","2024","2025"]

for (let i=1;i <= 12 ;i++){
    let op = document.createElement('option')
    if(i < 10){
        op.text = `0${i}`
    }else{
        op.text = i
    }
    op.value = i
    selectMonths.appendChild(op)
    // console.log(selectMonths);
}
for(let i=1; i<=31; i++){
  let op = document.createElement('option')
    if(i < 10){
        op.text = `0${i}`
    }else{
        op.text = i
    }
    op.value = i
    selectDays.appendChild(op)
      // console.log(selectDays)
}
years.forEach((item) => {
  let op = document.createElement('option')
  op.text = item
  op.value = item
  selectYears.appendChild(op)
  // console.log(selectYears)
})
for(let i=1; i<=12; i++){
  let op = document.createElement("option")
  if(i<10){
    op.text =`0${i}`
  }else{
    op.text = i
  }
  op.value = i
  selectHours.appendChild(op)
  console.log(selectHours)
}
for(let i=1; i<=59; i++){
  let op = document.createElement("option")
  if(i<10){
    op.text =`0${i}`
  }else{
    op.text = i
  }
  op.value = i
  selectMinuts.appendChild(op)
  console.log(selectMinuts)
}