const output= document.querySelector('.text');
const vals = document.querySelectorAll('.val');
const clearBtn = document.querySelector('.AC');
const deletBtn = document.querySelector('.DEL');
const equalBtn = document.querySelector('.equal');
vals.forEach((val) =>{
    val.addEventListener("click",() => {
        output.value += val.value
    });
});
    clearBtn.addEventListener("click",() => {
        output.value = "";
    });
    deletBtn.addEventListener("click",() => {
        output.value = output.value.slice(0,-1);
    });
    equalBtn.addEventListener("click",() =>{
        output.value = eval(output.value);
    } );


