// const textarea = document.querySelector('textarea')
// const copyBtn = document.querySelector('button')

// copyBtn.addEventListener('click',() =>{
//     textarea.select()
//     let textValue = textarea.value;

//     navigator.clipboard.writeText(textValue)
//     copyBtn.innerText = 'کپی شد'
//     copyBtn.style.backgroundColor = 'rgb(0,8,255)'
//    copyBtn.style.color = "#fff"
//     setTimeout(() => {
//       copyBtn.innerText = "کپی کن"  
//       copyBtn.style.backgroundColor = "rgb(17,111,170 )"
//       copyBtn.style.color = "#000"
//     }, 1500);
// })




const textarea = document.querySelector('textarea')
const copyBtn = document.querySelector('button')

copyBtn.addEventListener('click', ()=>{
  textarea.select()
  let textValue = textarea.value;
  navigator.clipboard.writeText(textValue)
  copyBtn.innerText='کپی شد'
  copyBtn.style.background = 'rgb(0,8,255)'
  copyBtn.style.color = '#fff'
  setTimeout(()=>{
    copyBtn.innerText =  "کپی کن" 
    copyBtn.style.background =  "rgb(17,111,170 )"
    copyBtn.style.color= '#000'
  },1500)
})