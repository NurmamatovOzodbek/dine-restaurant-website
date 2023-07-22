let { form } = document.forms
let btnPlus = document.querySelector(".plus__btn")
let btnMinus = document.querySelector(".minus__btn")
let countSpan = document.querySelector(".counter")
let count = 1

btnPlus.addEventListener('click', () => {
  // countSpan.innerText=1
  countSpan.innerText++
  count = countSpan.innerText
  // countStatus = true
  console.log(count)
})
btnMinus.addEventListener('click', () => {
  if(countSpan.innerText <= 1){
    alert("Eng kamida 1 kishi bo'lishi kerak")
    countSpan.innerText = 1
    count = countSpan.innerText
    // countStatus = true
  }else{

    countSpan.innerText--
    count = countSpan.innerText
    // countStatus=true
    console.log(count)
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
    }else{
        option.text = i
    }
    option.value = i
    selectMonths.appendChild(option)
    // console.log(selectMonths);
}
for(let i=1; i<=31; i++){
  let option = document.createElement('option')
    if(i < 10){
        option.text = `0${i}`
    }else{
        option.text = i
    }
    option.value = i
    selectDays.appendChild(option)
      // console.log(selectDays)
}
years.forEach((item) => {
  let option = document.createElement('option')
  option.text = item
  option.value = item
  selectYears.appendChild(option)
  // console.log(selectYears)
})
for(let i=1; i<=12; i++){
  let option = document.createElement("option")
  if(i<10){
    option.text =`0${i}`
  }else{
    option.text = i
  }
  option.value = i
  selectHours.appendChild(option)
  // console.log(selectHours)
}
for(let i=0; i<=59; i++){
  let option = document.createElement("option")
  if(i<10){
    option.text =`0${i}`
  }else{
    option.text = i
  }
  option.value = i
  selectMinuts.appendChild(option)
}
// console.log(selectMinuts)

selectMonths.addEventListener('blur', () =>{
  if(selectMonths.value == 0){
    pickDate.nextElementSibling.innerText = "This field is required"
    dateStatus = false
  }else if(selectDays.value != 0 && selectYears.value != 0){
    pickDate.nextElementSibling.innerText = ""
    dateStatus = true
  }
})
selectDays.addEventListener('blur', () =>{
  if(selectDays.value == 0){
    pickDate.nextElementSibling.innerText = "This field is required"
    dateStatus = false
  }else if(selectYears.value != 0 && selectMonths.value != 0){
    pickDate.nextElementSibling.innerText = ""
    dateStatus = true
  }
})
selectYears.addEventListener('blur', () =>{
  if(selectYears.value == 0){
    pickDate.nextElementSibling.innerText = "This field is required"
    dateStatus = false
  }else if(selectDays.value != 0 && selectMonths.value != 0){
    pickDate.nextElementSibling.innerText = ""
    dateStatus = true
  }
})
let inpName = document.querySelector("#name"),
    inpEmail = document.querySelector("#email")



let nameStatus = false,
    emailStatus = false,
    dateStatus = false,
    hourStatus = false,
    minuteStatus = false,
    countStatus = false

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
      nameStatus = false
    }else{
      hideError(formGroup,errorElement)
      nameStatus = true
    }
  }else if(target.name === 'email'){
    if(!target.value.includes('@')){
        showError(formGroup,errorElement,'This field is required')
        emailStatus = false
    }else{
        hideError(formGroup,errorElement)
      emailStatus = true
    }
  }
}
inpName.addEventListener('blur', (e) => {
	let target = e.target
	let formGroup = inpName.parentElement
	let errorElement = inpName.nextElementSibling
	if(target.value === ''){
		showError(formGroup, errorElement, "To'ldirilishi shart")
		nameStatus = false
	}else{
		hideError(formGroup, errorElement)
		nameStatus = true
	}
})
inpEmail.addEventListener('blur', (e) => {
	let target = e.target
	let formGroup = inpEmail.parentElement
	let errorElement = inpEmail.nextElementSibling
	if(target.value === ''){
		showError(formGroup, errorElement, "To'ldirilishi shart")
		emailStatus = false
	}else{
		hideError(formGroup, errorElement)
		emailStatus = true
	}
})
form.addEventListener('submit', (e) => {
	e.preventDefault()
	// let formData = new FormData(form)
	// let values = Object.fromEntries(formData.entries())
if(inpName.value.length != 0 && inpEmail.value.length != 0 && selectDays.value != 0 && selectMonths.value != 0 && selectYears.value != 0){
  let userDate = {
    name: inpName.value,
    email: inpEmail.value,
    date: `0${selectDays.value}` + "-" + `0${selectMonths.value}` + "-" + `${selectYears.value}`,
    time: `0${selectHours.value}` + ":" + `0${selectMinuts.value}`,
    AMorPM: ap.value,
    countPeople: count
  }
  console.log(userDate)
}else{
  console.log('Error')

}
})
// console.log(form)