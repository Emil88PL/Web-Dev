function operation(sign) {

    let A = num1.value
    let B = num2.value

    if (A == 0 || B == 0) {
        alert("Put a number");
    }else {

        let result = 0

        switch(sign) {
            case "+": result = parseInt(A) + parseInt(B) ;break
            case "-": result = parseInt(A) - parseInt(B) ;break
            case "x": result = parseInt(A) * parseInt(B) ;break
            case "/": result = parseInt(A) / parseInt(B) ;break
        }
        num3.value = result
    }
}