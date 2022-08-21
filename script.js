const valor = document.querySelectorAll('li')
let evaluation = 0
const button = document.querySelector('button')

valor.forEach(element => {        
    element.addEventListener('click', ()=>{        
        if(evaluation === 0){
            console.log("Campo vazio");
        }else{
            valor[evaluation-1].style.backgroundColor = "hsl(210, 19%, 18%)";
        }; 
        element.style.background = "grey";
        element.style.color = "white";
        evaluation = element.textContent;
        console.log(evaluation);            
    })
});


button.addEventListener('click', ()=>{
    if(evaluation === 0){
        return
    }else{
    document.querySelector('#notes').classList.add('ative');
    document.querySelector('#thanks').classList.remove('ative');        
    const text = document.querySelector('.selected');
    const p = document.createElement('p');
    p.classList.add('grade')
    p.innerHTML = `You selected ${evaluation} out of 5`;
    text.appendChild(p);
}
})


