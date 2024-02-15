var hr = 0;
var min = 0;
var sec = 0;
var timer = false;
var count = 0;

function start() {
    timer = true;
    stopwatch();
    ઇ
}
function stop() {
    timer = false;
}

function reset() {
    timer = false;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";   


}

function stopwatch() {
    if (timer === true) {
        count++;
        document.getElementById("count").innerHTML = count;
        if (count >= 99) {
            count = 0;
            sec++;
            document.getElementById("sec").innerHTML = sec;
            if (sec > 60) {
                sec = 0;
                min++;
                document.getElementById("min").innerHTML = min;
                if (min > 60) {
                    hr++;
                    document.getElementById("hour").innerHTML = hr;
                }
            }
        }
    }
    setTimeout(() => {
        stopwatch();
    }, 0.1);
}