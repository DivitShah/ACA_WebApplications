let string='';
var screen=document.querySelector('input');
function sin(){
    screen.value=Math.sin(eval(screen.value));
}
function cos() {
    screen.value = Math.cos(eval(screen.value));
}

function tan() {
    screen.value = Math.tan(eval(screen.value));
}

function pow() {
    screen.value = Math.pow(eval(screen.value), 2);
}

function sqrt() {
    screen.value = Math.sqrt(eval(screen.value, 2));
}

function log() {
    screen.value = Math.log(eval(screen.value));
}

function pi() {
    screen.value += 3.14159265359;
}

function exp() {
    screen.value= Math.exp(screen.value);
}
function del(){
    var length=screen.value.length;
    screen.value=screen.value.substring(0,length-1);
}
function fact(){
    
        let i=1;
        let fact=1;
        while(i<=screen.value){
            fact=i*fact;
            i=i+1;
        }
        screen.value=fact;
    
}


let buttons=document.querySelectorAll('.btn')
Array.from(buttons).forEach((button)=>{
    
        button.addEventListener('click',(e)=>{
            
            if(e.target.innerHTML=='<b>=</b>'){
                try{
                    screen.value=eval(screen.value);
                    
                }
                catch(err){
                    string='Error';
                    screen.value=string;
                }
                if(screen.value==Infinity){
                    screen.value='Undefined';
                }
            }
            else if(e.target.innerHTML=='sin'){
                sin();
            }
            else if(e.target.innerHTML=='cos'){
                cos();
            }
            else if(e.target.innerHTML=='tan'){
                tan();
            }
            else if(e.target.innerHTML=='x<sup>2</sup>'){
                pow();
            }
            else if(e.target.innerHTML=='√'){
                sqrt();
            }
            else if(e.target.innerHTML=='log'){
                log();
            }
            else if(e.target.innerHTML=='П'){
                pi();
            }
            else if(e.target.innerHTML=='exp'){
                exp();
            }
            else if(e.target.innerHTML=='DEL'){
                del();
            }
            else if(e.target.innerHTML=='×'){
                screen.value+='*';
                
            }
            else if(e.target.innerHTML=='÷'){
                screen.value+='/';
                
            }
            
            
            else if(e.target.innerHTML=='x!'){
                if((screen.value%1)!=0){
                    screen.value='Error';
                }
                else{
                fact();
                }
            }
            
            
            else if(e.target.innerHTML=='AC'){
                string='';
                screen.value=string;
            }
            
            else{
            console.log(e.target)
            screen.value=screen.value+e.target.innerHTML;
            
            }


        })
    
})

let input=document.querySelector('input')
input.addEventListener('keypress',function(event){
    if(event.key=='Enter'){
    screen.value=eval(screen.value);
    }
})
