let day = document.querySelector(".days p")
let hours = document.querySelector(".hourse p")
let minute = document.querySelector(".minutes p")
let second = document.querySelector(".seconds p")
let time = document.querySelector(".timer")
let days = document.querySelector(".days")
let hour = document.querySelector(".hourse")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let deadline = "2023-07-22T13:00:00Z"

function dataTimer(dl){
  let t = Date.parse(new Date(dl)) - Date.parse(new Date()),
      days = Math.floor(t / ( 1000 * 60 * 60 * 24 )),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minute = Math.floor((t / 1000 / 60 ) % 60),
      second = Math.floor((t / 1000) % 60)
  if(t < 0){
		t = 0
		days = 0
		hours = 0
		minute = 0
		second = 0
	}

	return {
		t, days, hours, minute, second
	}
}
function startTimer(dl){
	let timerId = setInterval(updateTimer, 1000)
	function updateTimer(){
		let timer = dataTimer(dl)
    day.innerText = addZero(timer.days)
    hours.innerText = addZero(timer.hours)
    minute.innerText = addZero(timer.minute)
    second.innerText = addZero(timer.second)
     if(day.innerText == 0){
      days.style.display = "none"
    }
    //  if(hours.innerText == 0){
    //   hour.style.display = "none"
    // }if(minute.innerText == 0){
    //   minutes.style.display = "none"
    // }if(second.innerText == 0){
    //   seconds.style.display = "none"
    // }
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

// let btnLeft = document.querySelector('.btn__prev')
// let btnRight = document.querySelector('.btn__next')
// let userImg = document.querySelectorAll('.slider__content .slide__img')
// let textContent = document.querySelectorAll('.slider__content .slide__about')
// let count = 0
// btnRight.addEventListener('click', ()=>{
//     if(count > textContent.length - 2){
//         count = 0
//     }
//     else{
//         count++
//     }
//     hide()
//     showAll(count)
// })
// btnLeft.addEventListener('click', ()=>{
//     if(count <= 0){
//         count = textContent.length - 1
//     }
//     else{
//         count--
//     }
//     hide()
//     showAll(count)
// })

// function hide() {
//     textContent.forEach((txtContent) =>{
//         txtContent.classList.remove('active')
//     })
//     userImg.forEach((imgContent) =>{
//         imgContent.classList.remove('active')
//     })
// }
// function showAll(i = 0) {
//     textContent[i].classList.add('active')
//     userImg[i].classList.add('active')
// }
// hide()
// showAll()



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