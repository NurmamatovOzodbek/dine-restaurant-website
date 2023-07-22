let day = document.querySelector(".days p")
let hour = document.querySelector(".hourse p")
let minute = document.querySelector(".minutes p")
let second = document.querySelector(".seconds p")
let time = document.querySelector(".timer")

let days = document.querySelector(".days")
let houre = document.querySelector(".hourse")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let deadline = "2023-07-23T14:00:00Z"

function dataTimer(dl){
  let t = Date.parse(new Date(dl)) - Date.parse(new Date()),
      days = Math.floor(t / ( 1000 * 60 * 60 * 24 )),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minutes = Math.floor((t / 1000 / 60 ) % 60),
      seconds = Math.floor((t / 1000) % 60)
  if(t < 0){
		t = 0
		days = 0
		hours = 0
		minutes = 0
		seconds = 0
	}

	return {
		t, days, hours, minutes, seconds
	}
}
function startTimer(dl){
	let timerId = setInterval(updateTimer, 1000)
	function updateTimer(){
		let timer = dataTimer(dl)
        day.innerText = addZero(timer.days)
        hour.innerText = addZero(timer.hours)
        minute.innerText = addZero(timer.minutes)
        second.innerText = addZero(timer.seconds)
        if(day.innerText == 0){
         days.style.display = "none"
       }
        if(hour.innerText == 0 && day.innerText == 0){
         houre.style.display = "none"
       }if(minute.innerText == 0 && hour.innerText == 0 && day.innerText == 0){
         minutes.style.display = "none"
       }if(second.innerText == 0 && minute.innerText == 0 && hour.innerText == 0 && day.innerText == 0){
         seconds.style.display = "none"
       }
        if(timer.t < 0){
            clearInterval(timerId)
        }
	}
	updateTimer()
}
startTimer(deadline)

function addZero(num){
	if(num >= 0 && num < 10){
		return `0${num}`
	}else{
		return num
	}
}

let slideCount = 0


//SLIDER JS

let btnLeft = document.querySelector('.btn__prev')
let btnRight = document.querySelector('.btn__next')
let textContent = document.querySelectorAll('.slider__one')
let count = 0
btnRight.addEventListener('click', ()=>{
    if(count > textContent.length - 2){
        count = 0
    }
    else{
        count++
    }
    hide()
    showAll(count)
})
btnLeft.addEventListener('click', ()=>{
    if(count <= 0){
        count = textContent.length - 1
    }
    else{
        count--
    }
    hide()
    showAll(count)
})

function hide() {
    textContent.forEach((txtContent) =>{
        txtContent.classList.remove('active')
    })
    // userImg.forEach((imgContent) =>{
    //     imgContent.classList.remove('active')
    // })
}
function showAll(i = 0) {
    textContent[i].classList.add('active')
    // userImg[i].classList.add('active')
}
hide()
showAll()


//TAB JS
let tabLinksEl = document.querySelectorAll(".tab__link")
let tabContentsEl = document.querySelectorAll(".tab__text .title__about")
let tabImgsEl = document.querySelectorAll(".tab__images .tab__img")
function tabAll(tabContents,tabLinks,tabImgs){
    function hiddenTab(){
        tabContents.forEach((tabContent) => {
          tabContent.style.display = "none"
        })
        tabLinks.forEach((tablink) => {
            tablink.classList.remove("active")
        })

    }
    function showTab(i=0){
        tabContents[i].style.display = "flex"
    }
    tabLinks.forEach((tablink, i) => {
        tablink.addEventListener('click', () => {
            tablink.classList.add("active")
            hiddenTab()
            showTab(i)
        })
    })
    hiddenTab()
    showTab()
    function hiddeTab(){
        tabImgs.forEach((tabImg) => {
          tabImg.style.display = "none"
        })
        tabLinks.forEach((tablink) => {
            tablink.classList.remove("active")
        })

    }
    function shoTab(i=0){
        tabImgs[i].style.display = "flex"
        tabLinks.forEach((tablink, i) => {
            tablink.addEventListener('click', () => {
                hiddeTab()
                shoTab(i)
                tablink.classList.add("active")
            })
        })
    }
    hiddeTab()
    shoTab()
}
tabAll(tabContentsEl,tabLinksEl,tabImgsEl)
