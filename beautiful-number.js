function isBeautifulNumber(number) {
    let numberAsString = number.toString();
    let existsFour = () => numberAsString.indexOf('4') > -1;
    let notExistsNine = () => numberAsString.indexOf('9') === -1;

    return existsFour() && notExistsNine();
}

module.exports = { is: isBeautifulNumber };