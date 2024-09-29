def COLOR_CHIK():
    global MIN, COLOR
    MAX = 0
    BMAP = 0
    GMAP = 0
    MIN = 800
    MIN = 250
    if RMAP + (GMAP + BMAP) > MAX:
        COLOR = "WHT"
    if RMAP + (GMAP + BMAP) <= MIN:
        COLOR = "BLK"
        if RMAP + (GMAP + BMAP) < MAX and RMAP + (GMAP + BMAP) > MIN:
            if RMAP > GMAP and RMAP > BMAP:
                COLOR = "RED"
            if GMAP > RMAP and GMAP > BMAP:
                COLOR = "GRN"
            if BMAP > RMAP and BMAP > GMAP:
                COLOR = "BLU"
B = 0
G = 0
R = 0
COLOR = ""
RMAP = 0
MIN = 0
pins.i2c_write_number(57, 16587, NumberFormat.UINT16_BE, False)
pins.i2c_write_number(57, 16396, NumberFormat.UINT16_BE, True)
pins.i2c_write_number(57, 16640, NumberFormat.UINT16_BE, True)
pins.i2c_write_number(57, 17041, NumberFormat.UINT16_BE, True)
pins.i2c_write_number(57, 17410, NumberFormat.UINT16_BE, True)
pins.i2c_write_number(57, 24576, NumberFormat.UINT16_BE, False)


def on_forever():
    global R, G, B, RMAP
    pins.i2c_write_number(57, 80, NumberFormat.UINT8_BE, True)
    R = pins.i2c_read_number(57, NumberFormat.UINT16_BE, False)
    pins.i2c_write_number(57, 82, NumberFormat.UINT8_BE, True)
    G = pins.i2c_read_number(57, NumberFormat.UINT16_BE, False)
    pins.i2c_write_number(57, 84, NumberFormat.UINT8_BE, True)
    B = pins.i2c_read_number(57, NumberFormat.UINT16_BE, False)
    RMAP = Math.round(Math.round(R / 90))
    RMAP = Math.round(Math.round(G / 100))
    RMAP = Math.round(Math.round(B / 80))
    COLOR_CHIK()
    basic.show_string(COLOR)
    basic.pause(1000)
    basic.clear_screen()
basic.forever(on_forever)

