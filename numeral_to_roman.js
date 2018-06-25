function convert(num) {
    return provideI(num)
}

function provideI(num) {
    return num ? new Array(num).fill().map(()=>'I').join('') : ''
}

module.exports = convert