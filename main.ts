//codeByMoses
radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 200; index++) {
        if (receivedNumber == 1) {
            if (input.pinIsPressed(TouchPin.P0)) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
                mark += 1
            }
            if (input.pinIsPressed(TouchPin.P1)) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        } else if (receivedNumber == 2) {
            if (input.pinIsPressed(TouchPin.P0)) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (input.pinIsPressed(TouchPin.P1)) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
                mark += 1
            }
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        } else if (receivedNumber == 3) {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . # .
                    # . # . .
                    . # . . .
                    `)
                mark += 1
            }
            if (input.pinIsPressed(TouchPin.P0)) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (input.pinIsPressed(TouchPin.P1)) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
        }
        basic.pause(100)
    }
    basic.showNumber(mark)
})
//A_Button
input.onButtonPressed(Button.A, function () {
    control.reset()
    radio.sendString("reset")
})
//startLet
let mark = 0
// setGroup
radio.setGroup(2428)
