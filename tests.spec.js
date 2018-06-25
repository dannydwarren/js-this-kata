const convert = require('./numeral_to_roman');
describe('Call to Convert', () => {
    test('input in order', () => {
        console.log(0)
        expect(convert.bind(0)()).toBe("")
        expect(convert.bind(1)()).toBe("I")
        expect(convert.bind(2)()).toBe("II")
        expect(convert.bind(3)()).toBe("III")
        expect(convert.bind(4)()).toBe("IV")
        expect(convert.bind(5)()).toBe("V")
        expect(convert.bind(6)()).toBe("VI")
        expect(convert.bind(10)()).toBe("X")
        expect(convert.bind(9)()).toBe("IX")
        expect(convert.bind(50)()).toBe("L")
        expect(convert.bind(40)()).toBe("XL")
        expect(convert.bind(100)()).toBe("C")
        expect(convert.bind(90)()).toBe("XC")
        expect(convert.bind(500)()).toBe("D")
        expect(convert.bind(400)()).toBe("CD")
        expect(convert.bind(1000)()).toBe("M")
        expect(convert.bind(900)()).toBe("CM")
        expect(() => { convert(-2) }).toThrow()
        expect(() => { convert("Throw error") }).toThrow();
        expect(() => { convert(undefined) }).toThrow();
        expect(() => { convert(true) }).toThrow();
        expect(() => { convert(1.3) }).toThrow();
    })
})