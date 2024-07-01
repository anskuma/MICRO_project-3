let inputfield= "";
let buttons=document.querySelectorAll('.key');
let evaluate= document.querySelector('.equal');
let input = document.querySelector('.input')


Array.from(buttons).forEach((key)=>{
    key.addEventListener('click', (e)=>{
        
        if (e.target.innerHTML == '=') {
           inputfield = eval(inputfield);
           input.value = inputfield;             
        }
        else if (e.target.innerHTML == 'RESET') {
            inputfield = '';
            input.value = inputfield;             
         }
         else if (e.target.innerHTML == 'x')  {
            input.value += '*';
         }
         else if (e.target.innerHTML == 'DEL'){
                inputfield = inputfield.substring(0,inputfield.length-1)
                input.value = inputfield;
         }
        else {
            
            inputfield += e.target.innerText;
            input.value = inputfield;

        }
        
    })
})

