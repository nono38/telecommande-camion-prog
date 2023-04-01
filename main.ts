let direction = 0
let vitesse = 0
radio.setGroup(255)
basic.forever(function () {
    vitesse = pins.analogReadPin(AnalogPin.P1)
    radio.sendNumber(vitesse)
    direction = pins.analogReadPin(AnalogPin.P0)
    radio.sendValue("\"caca\"", direction)
})
