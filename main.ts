input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        mode = 1
    } else {
        mode = 0
    }
})
let mode = 0
mode = 0
basic.forever(function () {
    if (mode > 0) {
        if (input.lightLevel() > 60) {
            basic.showIcon(IconNames.Happy)
            RingbitCar.freestyle(40, 40)
        } else if (input.lightLevel() > 0) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            RingbitCar.freestyle(10, 10)
        } else {
            basic.showIcon(IconNames.Sad)
            RingbitCar.brake()
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
