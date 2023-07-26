let { form } = document.forms
let btnPlus = document.querySelector(".plus__btn")
let btnMinus = document.querySelector(".minus__btn")
let countSpan = document.querySelector(".counter")
let count = 1
let error = document.querySelector(".error")

btnPlus.addEventListener('click', () => {
  if(countSpan.innerText >19){
    alert("Ko'pi bilan 20 kishilik stol buyurtma qila olasiz")
    countSpan.innerText = 20
  }
  else{
    countSpan.innerText++
    count = countSpan.innerText
  }
})
btnMinus.addEventListener('click', () => {
  if(countSpan.innerText <= 1){
    alert("Eng kamida 1 kishi bo'lishi kerak")
    countSpan.innerText = 1
    count = countSpan.innerText
  }else{
    countSpan.innerText--
    count = countSpan.innerText
  }
})


let selectMonths = document.querySelector("#month"),
    selectDays = document.querySelector("#day"),
    selectYears = document.querySelector("#year"),
    selectHours = document.querySelector("#hour"),
    selectMinuts = document.querySelector("#minut"),
    pickDate = document.querySelector("#date"),
    pickTime = document.querySelector("#time")
let years = ["2023","2024","2025"]

for (let i=1;i <= 12 ;i++){
  let option = document.createElement('option')
  if(i < 10){
      option.text = `0${i}`
      option.value = `0${i}`
  }else{
      option.text = i
      option.value = i
  }
  selectMonths.append(option)
}
for(let i=1; i<=31; i++){
  let option = document.createElement('option')
    if(i < 10){
        option.text = `0${i}`
        option.value = `0${i}`
    }else{
        option.text = i
        option.value = i
    }
    selectDays.append(option)
}
years.forEach((item) => {
  let option = document.createElement('option')
  option.text = item
  option.value = item
  selectYears.append(option)
})
for(let i=1; i<=12; i++){
  let option = document.createElement("option")
  if(i<10){
    option.text =`0${i}`
    option.value = `0${i}`
  }else{
    option.text = i
    option.value = i
  }
  selectHours.append(option)
}
for(let i=0; i<=59; i++){
  let option = document.createElement("option")
  if(i<10){
    option.text =`0${i}`
    option.value = `0${i}`
  }else{
    option.text = i
    option.value = i
  }
  selectMinuts.append(option)
}

selectMonths.addEventListener('blur', () =>{
  if(selectMonths.value == 0){
    pickDate.nextElementSibling.innerText = "This field is required"
  }else if(selectDays.value != 0 && selectYears.value != 0){
    pickDate.nextElementSibling.innerText = ""
  }
})
selectDays.addEventListener('blur', () =>{
  if(selectDays.value == 0){
    pickDate.nextElementSibling.innerText = "This field is required"
  }else if(selectYears.value != 0 && selectMonths.value != 0){
    pickDate.nextElementSibling.innerText = ""
  }
})
selectYears.addEventListener('blur', () =>{
  if(selectYears.value == 0){
    pickDate.nextElementSibling.innerText = "This field is required"
  }else if(selectDays.value != 0 && selectMonths.value != 0){
    pickDate.nextElementSibling.innerText = ""
  }
})
let inpName = document.querySelector("#name"),
    inpEmail = document.querySelector("#email")



function showError(parentElement,msgElement,message){
  msgElement.textContent = message
  parentElement.classList.add('error')
}

function hideError(parentElement,msgElement){
  msgElement.textContent = ''
  parentElement.classList.remove('error')
}
for(let inp of form){
  let {name} = inp
  console.log(name)
  if(name){
    inp.addEventListener('input',validateInput)
  }
}

function validateInput(e){
  let target = e.target
  let formGroup = target.parentElement
  let errorElement = target.nextElementSibling

  if(target.name === 'name'){
    if(target.value.length <= 2){
      showError(formGroup,errorElement,'This field is required')
    }else{
      hideError(formGroup,errorElement)
    }
  }else if(target.name === 'email'){
    if(!target.value.includes('@') || !target.value.includes('gmail') || !target.value.includes('.') || !target.value.includes('com')){
        showError(formGroup,errorElement,'This field is required')
    }else{
        hideError(formGroup,errorElement)
    }
  }
}
inpName.addEventListener('blur', (e) => {
	let target = e.target
	let formGroup = inpName.parentElement
	let errorElement = inpName.nextElementSibling
	if(target.value === ''){
		showError(formGroup, errorElement, "To'ldirilishi shart")
	}else{
		hideError(formGroup, errorElement)
	}
})
inpEmail.addEventListener('blur', (e) => {
	let target = e.target
	let formGroup = inpEmail.parentElement
	let errorElement = inpEmail.nextElementSibling
	if(target.value === ''){
		showError(formGroup, errorElement, "To'ldirilishi shart")
	}else{
		hideError(formGroup, errorElement)
	}
})

let now = new Date()
// function errorDate(){
//   if(selectDays.value < now.getDate() && selectMonths.value < now.getMonth() + 1 || selectDays.value < now.getDate() && selectMonths.value == now.getMonth() + 1){
//     pickDate.nextElementSibling.innerText = "Oldingi vaqtni kiritdingiz"
//   }else if(selectMonths.value > now.getMonth()+1 && selectDays.value < now.getDate() || selectMonths.value > now.getMonth()+1 && selectDays.value > now.getDate()){
//     pickDate.nextElementSibling.innerText = ""
//   }
// }
form.addEventListener('submit', (e) => {
	e.preventDefault()
  // errorDate()
  if(inpName.value.length == 0 && inpEmail.value.length == 0 && selectDays.value == 0 && selectMonths.value == 0 && selectYears.value == 0){
    console.log('Error')
    error.innerText = "To'ldirish shart"
    pickDate.nextElementSibling.innerText = "To'ldirish shart"
    inpEmail.nextElementSibling.innerText = "To'ldirish shart"
  }
  else{
    if(selectDays.value <= now.getDate() && selectMonths.value < now.getMonth() + 1 || selectDays.value <= now.getDate() && selectMonths.value == now.getMonth() + 1){
      pickDate.nextElementSibling.innerText = "Oldingi vaqtni kiritdingiz"
    }else if(selectMonths.value >= now.getMonth()+1 && selectDays.value < now.getDate() || selectMonths.value >= now.getMonth()+1 && selectDays.value > now.getDate()){
      pickDate.nextElementSibling.innerText = ""
      let userDate = {
        name: inpName.value,
        email: inpEmail.value,
        time: selectYears.value  + "-" + selectMonths.value + "-" + selectDays.value + "T" + selectHours.value + ":" + selectMinuts.value + "Z" +" " + ap.value,
        people: count
      }
      console.log(userDate)
    }
  }

})


// let c = now.getMonth()
// console.log(now,c)