function convert() {
    return provideI.call(this)
}

function provideI() {
    const count = this.valueOf()
    return count ? new Array(count).fill().map(()=>'I').join('') : ''
}

module.exports = convert