function getCash(value, cash = [], i = 0) {
    let units = [100, 50, 20, 10]; 
    let unit  = units[i];

    if (value % 10 > 0) return false;
    if (value <= 0) return cash;

    let quantity = getQuantityOfUnitByValue(value, unit);
    let newCash  = addUnitInCollection(unit, quantity, cash);
    let newValue = getRemaning(value, unit);

    return getCash(newValue, newCash, i + 1);
}

function getQuantityOfUnitByValue(value, unit) {
    return parseInt(value / unit);
}

function addUnitInCollection(unit, quantity, collection) {
    for (let i = 0; i < quantity; i++) collection.push(unit);
    return collection;
}

function getRemaning(total, unit) {
    let quantity = getQuantityOfUnitByValue(total, unit);
    return total - (quantity * unit);
}

module.exports = { getCash, getQuantityOfUnitByValue, addUnitInCollection, getRemaning };