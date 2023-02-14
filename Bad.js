feild.onclick = function(event) {
//window realitive feails coords

let feildCoords = this.getBoundingClientRect();

//the ball has nosition: absolute, the feild has postition relitive
// so the ball cordinates are relivie to the fewild inner left upper corner

let ballCoords = {
top: event.clientY - feildCoords.top - feild.clientTop - ball.clientHeight / 2 - 10,

left: event.clientX - feildCoords.left - feild.clientLeft - ball.clientWidth / 2 - 7
}
//prevents crossing the top feild
if(ballCoords.top< 0){ballCoords.top =0}
//prevents crossing the left feild
if(ballCoords.left< 0){ballCoords.left =0}
//prevents crossong the bottom feild
if(ballCoords.top + ball.clientHeight > feild.clientHeight ){ballCoords.top = feild.clientHeight - ball.clientHeight;
}

if(ballCoords.left + ball.clientWidth > feild.clientWidth ){ballCoords.left = feild.clientWidth - ball.clientWidth;}



ball.style.left = ballCoords.left + 'px'

ball.style.top = ballCoords.top + 'px'
}