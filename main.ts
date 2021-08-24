let azar = 0
let resto = 0
input.onGesture(Gesture.ScreenUp, function () {
    azar = randint(0, 1)
    resto = azar / 2
    if (resto == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.clearScreen()
})
