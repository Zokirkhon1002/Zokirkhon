function timeShow() {
    let hozirgiVaqt = new Date();

document.querySelector(".hours").textContent = hozirgiVaqt.getHours();
document.querySelector(".minuts").textContent = hozirgiVaqt.getMinutes();
document.querySelector(".seconds").textContent = hozirgiVaqt.getSeconds();


}

timeShow();

setInterval(function() {
    timeShow();
}, 1000);

timeShow();