            var currentNumberWrapper = window.document.getElementById('currentNumber')
            var currentNumber = 1;
            currentNumberWrapper.innerHTML=currentNumber

                  function decrement(){
                        currentNumber-=1;
                        if (currentNumber<=1) {
                              currentNumber =  1;
                        }
                        currentNumberWrapper.innerHTML=currentNumber;
                  }

                  function increment(){
                        currentNumber+=1;
                        currentNumberWrapper.innerHTML=currentNumber;
                  }