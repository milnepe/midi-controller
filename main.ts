basic.showIcon(IconNames.SmallHeart)
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("pitch", input.rotation(Rotation.Pitch))
    radio.sendValue("roll", input.rotation(Rotation.Roll))
    led.plotBarGraph(
    input.rotation(Rotation.Pitch),
    0
    )
})
