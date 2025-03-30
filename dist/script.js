let btnNumbers = document.querySelectorAll(".btn-number")
let input = document.querySelector(".text")
let funcation12 = document.querySelectorAll(".funcation12")
let mosavi = document.querySelector(".mosavi")

let num1 = 0
let num2 = 0


btnNumbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        input.value += btn.innerHTML
    })
})

let x


funcation12.forEach((amalkard) => {
    amalkard.addEventListener("click", () => {
        num1 = input.value
        x = amalkard.innerHTML
        input.value = ''
    })
})

mosavi.addEventListener("click", () => {
    let sum = 0

    num2 = input.value
    input.value = ''

    switch (x) {
        case "+":
            let number1 = Number(num1)
            let number2 = Number(num2)
            sum = number1+ number2
            break;
        case "-":
            sum = num1 - num2
            break;
        case "×":
            sum = num1 * num2
            break;
        case "÷":
            sum = num1 / num2
            break;
        case "%":
            sum = num1 % num2
            break;
        case "±":
            sum = Math.abs(num1)
            break;
        case "√":
            sum = Math.sqrt(num1)
            break;
        default: alert("moz :)")
            break;
    }
    input.value = sum

})