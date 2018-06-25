const convert = require('./numeral_to_roman');
describe('Call to Convert', () => {
    test('input in order', () => {
        console.log(new convert(0))
        expect(new convert(0).value).toBe("")
        expect(new convert(1).value).toBe("I")
        expect(new convert(2).value).toBe("II")
        expect(new convert(3).value).toBe("III")
        expect(new convert(4).value).toBe("IV")
        expect(new convert(5).value).toBe("V")
        expect(new convert(6).value).toBe("VI")
        expect(new convert(10).value).toBe("X")
        expect(new convert(9).value).toBe("IX")
        expect(new convert(50).value).toBe("L")
        expect(new convert(40).value).toBe("XL")
        expect(new convert(100).value).toBe("C")
        expect(new convert(90).value).toBe("XC")
        expect(new convert(500).value).toBe("D")
        expect(new convert(400).value).toBe("CD")
        expect(new convert(1000).value).toBe("M")
        expect(new convert(900).value).toBe("CM")
        expect(() => { convert(-2) }).toThrow()
        expect(() => { convert("Throw error") }).toThrow();
        expect(() => { convert(undefined) }).toThrow();
        expect(() => { convert(true) }).toThrow();
        expect(() => { convert(1.3) }).toThrow();
    })
})