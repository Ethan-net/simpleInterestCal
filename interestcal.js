let inputPrincipal = document.getElementById("principal");
        let rate = document.getElementById("rateOfInt");
        let year = document.getElementById("year");
        let display = document.getElementById("displayresult");
        let p2 = document.getElementById("p2");
        function intcalc() {
          let numerator = inputPrincipal.value * rate.value * year.value;
          let denominator = 100 
          let simpleInterestRate = numerator/denominator
          
          display.textContent = "N" + " " + simpleInterestRate;
        }
        function reset(){
            inputPrincipal.value = "";
            rate.value = "";
            year.value = "";
            display.textContent = "";
        }
        