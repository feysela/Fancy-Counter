const increaseButtonEl= document.querySelector('.counter__button--increase');
const decreaseButtonEl= document.querySelector('.counter__button--decrease');
const resetButtonEl =document.querySelector('.counter__reset-button');
const counterValueEl= document.querySelector('.counter__value');
const counterEl= document.querySelector('.counter');
const counterTitleEl =document.querySelector('.counter__title')

const incrementCounter=(()=>{
    const currentValue=counterValueEl.textContent;
    //convert value to number type
    const currentValueAsNumber = +currentValue;
    if(currentValueAsNumber!==5){
        counterTitleEl.textContent='Fancy Counter';
        counterEl.classList.remove('counter--limit');
    //increase by one
    const newValue = currentValueAsNumber+1;
    //set the counter element with the new one
    counterValueEl.textContent=newValue;
    }
    else{
        increaseButtonEl.disabled =true;
        decreaseButtonEl.disabled=true;
        counterEl.classList.add('counter--limit');
        counterTitleEl.textContent='Limit! Buy Pro for >5'
    }

});

const decrementCounter =(()=>{
    //getcurrent value of counter
    const currentValue=counterValueEl.textContent;
    //convert value to number type
    const currentValueAsNumber = +currentValue;
    if(currentValueAsNumber!==0){
        counterTitleEl.textContent='Fancy Counter';
        counterEl.classList.remove('counter--limit');
    //increase by one
    const newValue = currentValueAsNumber-1;
    //check if new value is zero

      //set the counter element with the new one
      counterValueEl.textContent=newValue;
    }
    else{
        increaseButtonEl.disabled =true;
        decreaseButtonEl.disabled=true;
        counterEl.classList.add('counter--limit');
    }

})

decreaseButtonEl.addEventListener('click',decrementCounter);


increaseButtonEl.addEventListener('click',incrementCounter);

resetButtonEl.addEventListener('click',()=>{
    counterTitleEl.textContent='Fancy Counter';
    increaseButtonEl.disabled =false;
    decreaseButtonEl.disabled=false;
    counterEl.classList.remove('counter--limit');
    counterValueEl.textContent=0;
    resetButtonEl.blur();

})
document.addEventListener('keydown', incrementCounter);