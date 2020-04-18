document.querySelector("btn1").onclick = function() {myFunction()};
document.querySelector("btn2").onclick = function() {myFunction1()};
document.querySelector("btn3").onclick = function() {myFunction2()};
function myFunction() {
    document.querySelector('#p1').innerHTML = '<strong>VISION:3D</strong><br>-based on<br>  AR';
}
function myFunction1() {
    document.querySelector('#p2').innerHTML = '<strong>XAC-titude</strong><br>-an event<br>website';
}
function myFunction2() {
    document.querySelector('#p3').innerHTML = '<strong>EYE</strong><br>-on machine<br>learning';
}
window.onclick = myFunction;
window.onclick = myFunction1;
window.onclick = myFunction2;



