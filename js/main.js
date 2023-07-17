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