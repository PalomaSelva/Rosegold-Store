for (let i = 0; i < 2; i++) {
      var numeroAtual = ".currentNumber" + i;
      currentNumberWrapper = window.document.querySelector(numeroAtual)
      console.log(currentNumberWrapper)
      var currentNumber = 1;
      currentNumberWrapper.innerHTML=currentNumber
}
      currentNumberWrapper = window.document.querySelector(".currentNumber0")
      console.log(currentNumberWrapper)
      function decrement(){
            
            currentNumber-=1;
            if (currentNumber<=1) {
                  currentNumber =  1;
            }
            currentNumberWrapper.innerHTML=currentNumber;
      }

      function increment(){
            console.log(currentNumberWrapper)
            for (let i = 0; i < 2; i++) {
                  var numeroAtual = ".currentNumber" + i;
                  currentNumberWrapper = window.document.querySelector(numeroAtual)
                  currentNumber+=1;
                  currentNumberWrapper.innerHTML=currentNumber;
            }

      }

      

