const contextMenu = document.querySelector('.container')
const subMenu = document.querySelector('.ul-share')

document.addEventListener('contextmenu', (e)=>{
    e.preventDefault()
    contextMenu.style.visibility = 'visible'

    let x = e.offsetX;
    let y = e.offsetY;
    let winWidth = window.innerWidth;
    let winHeight =  window.innerHeight;

    let cmWidth = contextMenu.offsetWidth
    let cmHeight = contextMenu.offsetHeight


    x = x > winWidth - cmWidth ? winWidth - cmWidth : x
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y

    if(x >(winWidth - cmWidth - subMenu.offsetWidth)){
        subMenu.style.left = '-200px'
    }
    else{
        subMenu.style.left = '260px'
    }


    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`


   
})
document.addEventListener('click', ()=>{
    contextMenu.style.visibility = 'hidden'
})

