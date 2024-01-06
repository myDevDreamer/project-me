const modal = document.querySelector('.modal-continer')
const openModal = document.getElementById('openBtn')
const closeModal = document.querySelector('.closeBtn')

openModal.addEventListener('click', ()=>{
    modal.style.display ='block'
    modal.style.background = 'rgb(132, 55, 204)'
})
closeModal.addEventListener('click' , ()=>{
    modal.style.display ='none'
})
window.addEventListener('click' , (e)=>{
    if(e.target ==  modal)
    modal.style.display ='none'
})








