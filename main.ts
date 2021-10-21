input.onButtonPressed(Button.A, function () {
    scene += 1
    basic.showNumber(scene)
    radio.sendNumber(scene)
})
input.onButtonPressed(Button.B, function () {
    scene += -1
    basic.showNumber(scene)
    radio.sendNumber(scene)
})
let scene = 0
radio.setGroup(105)
scene = 0
basic.showNumber(scene)
radio.sendNumber(scene)
