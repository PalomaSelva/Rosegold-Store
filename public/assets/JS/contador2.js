for (let i = 0; i < 2; i++) {
      var numeroAtual = ".currentNumber" + i;
      currentNumberWrapper = window.document.querySelector(numeroAtual)

      var currentNumber = 1;
      currentNumberWrapper.innerHTML=currentNumber

for (let i = 0; i < 2; i++) {
      idButtonAdd = "#add" + i;
      increment = window.document.querySelector(idButtonAdd)
      increment.onclick = function(){
            currentNumber+=1;
            currentNumberWrapper.innerHTML=currentNumber;
            console.log(currentNumberWrapper)

      }
      
      idButtonSub = "#sub" + i;
      decrement = window.document.querySelector(idButtonSub)
      decrement.onclick = function(){
            
            currentNumber-=1;
            if (currentNumber<=1) {
                  currentNumber =  1;
            }

            currentNumberWrapper.innerHTML=currentNumber;
      }

}

}
      

