namespace カラーセンサー {

//% block="COLOR_check"
    export function COLOR_CHIK() {
    
    let MAX = 0
    let BMAP = 0
    let GMAP = 0
    MIN = 800
    MIN = 250
    if (RMAP + (GMAP + BMAP) > MAX) {
        COLOR = "WHT"
    }
    
    if (RMAP + (GMAP + BMAP) <= MIN) {
        COLOR = "BLK"
        if (RMAP + (GMAP + BMAP) < MAX && RMAP + (GMAP + BMAP) > MIN) {
            if (RMAP > GMAP && RMAP > BMAP) {
                COLOR = "RED"
            }
            
            if (GMAP > RMAP && GMAP > BMAP) {
                COLOR = "GRN"
            }
            
            if (BMAP > RMAP && BMAP > GMAP) {
                COLOR = "BLU"
            }
            
        }
        
    }
    
}

let B = 0
let G = 0
let R = 0
let COLOR = ""
let RMAP = 0
let MIN = 0
pins.i2cWriteNumber(57, 16587, NumberFormat.UInt16BE, false)
pins.i2cWriteNumber(57, 16396, NumberFormat.UInt16BE, true)
pins.i2cWriteNumber(57, 16640, NumberFormat.UInt16BE, true)
pins.i2cWriteNumber(57, 17041, NumberFormat.UInt16BE, true)
pins.i2cWriteNumber(57, 17410, NumberFormat.UInt16BE, true)
pins.i2cWriteNumber(57, 24576, NumberFormat.UInt16BE, false)

 basic.forever(function on_forever() {
    
    pins.i2cWriteNumber(57, 80, NumberFormat.UInt8BE, true)
    R = pins.i2cReadNumber(57, NumberFormat.UInt16BE, false)
    pins.i2cWriteNumber(57, 82, NumberFormat.UInt8BE, true)
    G = pins.i2cReadNumber(57, NumberFormat.UInt16BE, false)
    pins.i2cWriteNumber(57, 84, NumberFormat.UInt8BE, true)
    B = pins.i2cReadNumber(57, NumberFormat.UInt16BE, false)
    RMAP = Math.round(Math.round(R / 90))
    RMAP = Math.round(Math.round(G / 100))
    RMAP = Math.round(Math.round(B / 80))
    COLOR_CHIK()
    basic.showString(COLOR)
    basic.pause(1000)
    basic.clearScreen()
})
}
