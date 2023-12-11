let num = 0
        let numprint = document.getElementById("num")
        function counter(x) {
            if (x == "DECREASE") {
                num--
            }
            else if (x == "INCREASE") {
                num++
            }
            else {
                num = 0
            }
            numprint.innerHTML = num
            if (num < 0) {
                numprint.style.color = "red"
            }
            else if (num > 0){
                numprint.style.color = "green"
            }
            else{
                numprint.style.color = "#0f2a42"
            }
        }