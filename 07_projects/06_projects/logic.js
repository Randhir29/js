// generate random color

const randomColor = function(){
    const hex ='0123456789ABCDEF'
    let color='#'
    for (let i = 0; i < 6; i++) {
        randomNumber = hex[Math.floor(Math.random()*16)]
        color+=randomNumber
    }
    console.log(color)
    return color
}

let intervalId;
const startChangingBgColor =function(){
    // to start multiple start events
    if (!intervalId) {
        intervalId=setInterval(bgColorChange,1000)
    }
    
    function bgColorChange(){
        document.body.style.backgroundColor= randomColor()
    }

}
const stopChangingBgColor = function(){
    clearInterval(intervalId);
    intervalId=null;
}

document.querySelector('#start').addEventListener('click',startChangingBgColor)
document.querySelector('#stop').addEventListener('click',stopChangingBgColor)