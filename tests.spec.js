const convert = require('./numeral_to_roman');
describe('Call to Convert', () => {
    test('input in order', () => {
        console.log(0)
        expect(convert(0)).toBe("")
        expect(convert(1)).toBe("I")
        expect(convert(2)).toBe("II")
        expect(convert(3)).toBe("III")
        expect(convert(4)).toBe("IV")
        expect(convert(5)).toBe("V")
        expect(convert(6)).toBe("VI")
        expect(convert(10)).toBe("X")
        expect(convert(9)).toBe("IX")
        expect(convert(50)).toBe("L")
        expect(convert(40)).toBe("XL")
        expect(convert(100)).toBe("C")
        expect(convert(90)).toBe("XC")
        expect(convert(500)).toBe("D")
        expect(convert(400)).toBe("CD")
        expect(convert(1000)).toBe("M")
        expect(convert(900)).toBe("CM")
        expect(() => { convert(-2) }).toThrow()
        expect(() => { convert("Throw error") }).toThrow();
        expect(() => { convert(undefined) }).toThrow();
        expect(() => { convert(true) }).toThrow();
        expect(() => { convert(1.3) }).toThrow();
    })
})