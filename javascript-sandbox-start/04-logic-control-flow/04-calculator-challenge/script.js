function calculate(num1, num2, operator) {
    let result;
    switch(operator){
        case "+":
            result = num1 + num2;
            break
        case "-":
            result = num1 - num2;
            break
        case "*":
            result = num1 * num2;
            break
        case "/":
            result = num1 / num2;
            break
        default:
            result = "invalid operator" ;              
    }
    console.log(result);
    return result;
}
