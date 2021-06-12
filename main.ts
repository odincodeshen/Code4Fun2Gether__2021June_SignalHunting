radio.onReceivedNumber(function (receivedNumber) {
    signal_level = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -42, 0, 100)
})
let signal_level = 0
radio.setGroup(66)
radio.setTransmitPower(2)
basic.forever(function () {
    led.plotBarGraph(
    signal_level,
    100
    )
    basic.pause((120 - signal_level) * 5)
})
basic.forever(function () {
    radio.sendNumber(0)
})
