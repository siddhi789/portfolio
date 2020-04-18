function blink(){
    var body = document.querySelector('#hd');
    if(body.style.visibility === 'hidden')
    {
        body.style.visibility = 'visible';
    }
    else{
        body.style.visibility = 'hidden';
    }
}
window.setInterval(blink,500);

