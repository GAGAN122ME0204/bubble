
var timer = 60;
var score = 0;
var hitrn = 0;

function increasescore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function bubble() {
    var clutter = "";

    for (var i = 1; i <= 70; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "";
        }
    }, 1000);
}

// Attach the click event listener to a specific element if possible
document.addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increasescore();
        bubble();
        getnewhit();
    }
});

runtimer();
bubble();
getnewhit();
increasescore();
