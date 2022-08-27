let homeScoreBox = document.getElementById('home-score-box');
let guestScoreBox = document.getElementById('guest-score-box');
let homeScoreEl = document.getElementById('home-score-el');
let guestScoreEl = document.getElementById('guest-score-el');
let scoreBtn1 = document.querySelectorAll('#scoreBtn1');
let resetBtn = document.getElementById('reset-btn');
let homePoint = 0;
let guestPoint = 0;

//Home Score Points
function homePoint1() {
	homePoint = homePoint + 1;
	homeScoreEl.textContent = homePoint;
	styleChange();
}
function homePoint2() {
	homePoint = homePoint + 2;
	homeScoreEl.textContent = homePoint;
	styleChange();
}
function homePoint3() {
	homePoint = homePoint + 3;
	homeScoreEl.textContent = homePoint;
	styleChange();
}

//Guest Score Points
function guestPoint1() {
	guestPoint = guestPoint + 1;
	guestScoreEl.textContent = guestPoint;
	styleChange();
}
function guestPoint2() {
	guestPoint = guestPoint + 2;
	guestScoreEl.textContent = guestPoint;
	styleChange();
}
function guestPoint3() {
	guestPoint = guestPoint + 3;
	guestScoreEl.textContent = guestPoint;
	styleChange();
}

//Style changes
function styleChange() {
	if (homePoint < 10) {
		homeScoreEl.textContent = '0' + homePoint;
	}
	if (guestPoint < 10) {
		guestScoreEl.textContent = '0' + guestPoint;
	}

	if (homePoint > 0) {
		homeScoreEl.style.color = '#e85117';
	}
	if (guestPoint > 0) {
		guestScoreEl.style.color = '#e85117';
	}
	if (homePoint === guestPoint) {
		homeScoreBox.style.border = '5px solid #3CCF4E';
		guestScoreBox.style.border = '5px solid #3CCF4E';
	} else if (homePoint > guestPoint) {
		homeScoreBox.style.border = '5px solid #c21010';
		guestScoreBox.style.border = 'none';
	} else if (homePoint < guestPoint) {
		guestScoreBox.style.border = '5px solid #c21010';
		homeScoreBox.style.border = 'none';
	}
}

//timer
const timerEl = document.getElementById('timer');
const startingMinutes = 1;
let time = startingMinutes * 60;
const setTimer = setInterval(handleTimer, 1000);

function handleTimer() {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	if (seconds < 10) {
		seconds = '0' + seconds;
	} else {
		seconds = seconds;
	}

	timerEl.textContent = `0${minutes}:${seconds}`;
	time--;
}

function stopTimer() {
	if (minutes && seconds <= 0) {
		clearInterval(setTimer);
	}
}



//reset
function handleReset() {
	homeScoreEl.textContent = '00';
	guestScoreEl.textContent = '00';
	homeScoreBox.style.border = 'none';
	guestScoreBox.style.border = 'none';
	stopTimer();
	handleTimer();
}
