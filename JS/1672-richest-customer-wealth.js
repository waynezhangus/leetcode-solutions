/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    accounts = accounts.map(customer => customer.reduce((acc, money) => acc + money), 0);
    return accounts.sort((a, b) => b - a)[0];
};