const convert = require('./numeral_to_roman');
describe('Call to Convert', () => {
    test('input in order', () => {
        console.log(0)
        expect(convert.call(0)).toBe("")
        expect(convert.call(1)).toBe("I")
        expect(convert.call(2)).toBe("II")
        expect(convert.call(3)).toBe("III")
        expect(convert.call(4)).toBe("IV")
        expect(convert.call(5)).toBe("V")
        expect(convert.call(6)).toBe("VI")
        expect(convert.call(10)).toBe("X")
        expect(convert.call(9)).toBe("IX")
        expect(convert.call(50)).toBe("L")
        expect(convert.call(40)).toBe("XL")
        expect(convert.call(100)).toBe("C")
        expect(convert.call(90)).toBe("XC")
        expect(convert.call(500)).toBe("D")
        expect(convert.call(400)).toBe("CD")
        expect(convert.call(1000)).toBe("M")
        expect(convert.call(900)).toBe("CM")
        expect(() => { convert(-2) }).toThrow()
        expect(() => { convert("Throw error") }).toThrow();
        expect(() => { convert(undefined) }).toThrow();
        expect(() => { convert(true) }).toThrow();
        expect(() => { convert(1.3) }).toThrow();
    })
})