const fetch = require('node-fetch');
const { encode, sign } = require('./transaction');
const vstruct = require('varstruct');
const base32 = require('base32.js');

const Followings = vstruct([
    { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
]);

function doPost(etx) {
    const body = {
        params: etx,
    };
    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };
    return fetch('https://forest-network-dack.herokuapp.com/post', option).then(res => res.json())
        .then(json => json);
}

function createAccount(account, privateKey, address) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    const tx = {
        version: 1,
        operation: 'create_account',
        memo: Buffer.alloc(0),
        params: {
            address,
        },
        sequence,
    }
    sign(tx, privateKey);
    const etx = encode(tx).toString('base64');
    return doPost(etx);
}

function payment(account, privateKey, address, amount) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    const tx = {
        version: 1,
        operation: 'payment',
        memo: Buffer.alloc(0),
        params: {
            address,
            amount,
        },
        sequence,
    }
    sign(tx, privateKey);
    const etx = encode(tx).toString('base64');
    return doPost(etx);
}

function updateAccount(account, privateKey, key, value) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    let newvalue = undefined;
    switch (key) {
        case 'name':
            newvalue = Buffer.from(value.toString('utf-8'));
            break;
        case 'picture':
            newvalue = Buffer.from(value, 'base64');
            break;
        case 'followings':
            newvalue = Followings.encode({
                addresses: value.map(address => {
                    return Buffer.from(base32.decode(address));
                })
            });
            break;
        default: break;
    }
    if (!newvalue)
        return false;
    const tx = {
        version: 1,
        operation: 'update_account',
        memo: Buffer.alloc(0),
        params: {
            key,
            value: newvalue,
        },
        sequence,
    }
    sign(tx, privateKey);
    const etx = encode(tx).toString('base64');
    return doPost(etx);
}

module.exports = { createAccount, payment, updateAccount }