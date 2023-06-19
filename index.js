const buttons = document.getElementById('buttons_wrap')
const screen = document.getElementById('screen')
let value1, value2, operation
clean()

const count = (a, b, operation) => {
    switch (operation) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
            return "error"
    }
}


function clean() {
    value1 = 0
    value2 = null
    operation = null
    screen.textContent = value1
}

function pressButton(e) {
    console.log(e.target.id)
    switch (e.target.id) {
        case "delete":
            if (value2 !== null) {
                let temp = value2.toString()
                if (temp.length > 1) {
                    value2 = +temp.slice(0, temp.length - 1)
                    screen.textContent = value1 + operation + value2
                } else if (temp.length === 1) {
                    value2 = null
                    screen.textContent = value1 + operation
                }

            } else if (operation !== null) {
                operation=null
                screen.textContent=value1
            } else {
                let temp = value1.toString()
                if (temp.length > 1) {
                    value1 = +temp.slice(0, temp.length - 1)
                    screen.textContent = value1
                } else if (temp.length === 1) {
                    value1 = 0
                    screen.textContent = value1
                }
            }

            break
        case "root":
            if (!value2) {
                value1 = value1 ** (1 / 2)
                screen.textContent = value1
            }
            break
        case "clean":
            clean()
            console.log('yes')
            break
        case "square":
            if (!value2) {
                value1 = value1 ** 2
                screen.textContent = value1
            }
            break
        case "+":
        case "-":
        case "*":
        case "/":
            operation = e.target.id
            screen.textContent = value1 + operation
            break
        case "=":
            if (!(value2 || operation)) return
            const result = count(value1, value2, operation)

            clean()
            screen.textContent = result
            value1 = result
            break
        default:
            const temp = +e.target.id
            if (isNaN(temp)) return
            if (!operation) {
                value1 = +(value1 + String(temp))
                screen.textContent = value1
            } else {
                value2 = !value2 ? temp : +(value2 + String(temp))
                const res = value1 + operation + value2
                screen.textContent = res
            }
            break


    }
}

buttons.addEventListener("click", pressButton)





