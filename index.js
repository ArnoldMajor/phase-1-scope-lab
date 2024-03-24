var customerName = 'bob';

function upperCaseCustomerName () {
    return customerName = 'BOB';
}

function setBestCustomer(){
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Frank';

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'Jane';
}

console.log (changeLeastFavoriteCustomer())