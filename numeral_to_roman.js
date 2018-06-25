function convert(num) {
    this.num = num
    this.provideI = provideI
    return this.provideI()
}

function provideI() {
    return { value: this.num ? new Array(this.num).fill().map(() => 'I').join('') : '' }
}

module.exports = convert