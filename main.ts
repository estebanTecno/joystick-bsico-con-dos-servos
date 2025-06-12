// Servo eje Y
// Función para mapear valores del joystick al rango del servo (0-180)
function mapJoystickToServo (value: number) {
    return Math.map(value, 0, 1023, 0, 180)
}
let anguloY = 0
let anguloX = 0
let ejeY = 0
let ejeX = 0
// Conecta el LCD
makerbit.connectLcd(39)
// Posición inicial de los servos
// Servo eje X
pins.servoWritePin(AnalogPin.P0, 90)
// Servo eje Y
pins.servoWritePin(AnalogPin.P2, 90)
basic.forever(function () {
    // Leer los ejes del joystick
    ejeX = pins.analogReadPin(AnalogReadWritePin.P1)
    ejeY = pins.analogReadPin(AnalogReadWritePin.P3)
    // --- EJE X ---
    if (ejeX > 700 && ejeX < 800) {
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        anguloX = mapJoystickToServo(ejeX)
        anguloX = Math.constrain(anguloX, 0, 180)
        pins.servoWritePin(AnalogPin.P0, anguloX)
    }
    // --- EJE Y ---
    if (ejeY > 700 && ejeY < 800) {
        pins.servoWritePin(AnalogPin.P2, 90)
    } else {
        anguloY = mapJoystickToServo(ejeY)
        anguloY = Math.constrain(anguloY, 0, 180)
        pins.servoWritePin(AnalogPin.P2, anguloY)
    }
})
basic.forever(function () {
    makerbit.showStringOnLcd1602("EjeX:", makerbit.position1602(LcdPosition1602.Pos1), 16)
    makerbit.showStringOnLcd1602("" + (ejeX), makerbit.position1602(LcdPosition1602.Pos7), 16)
    makerbit.showStringOnLcd1602("Ejey:", makerbit.position1602(LcdPosition1602.Pos17), 16)
    makerbit.showStringOnLcd1602("" + (ejeY), makerbit.position1602(LcdPosition1602.Pos23), 16)
})
