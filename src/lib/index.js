const axios = require('axios');
const fetch = require('node-fetch');
const { encode, sign } = require('./transaction');
const vstruct = require('varstruct');
const base32 = require('base32.js');

const Followings = vstruct([
    { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
]);
const PlainTextContent = vstruct([
    { name: 'type', type: vstruct.UInt8 },
    { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) },
]);
const ReactContent = vstruct([
    { name: 'type', type: vstruct.UInt8 },
    { name: 'reaction', type: vstruct.UInt8 },
]);

function doPost(etx) {
    const body = {
        jsonrpc: "2.0",
        method: "broadcast_tx_commit",
        params: [etx],
        id: "1"
    }
    const option = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };
    fetch("https://komodo.forest.network", option);
    return true;
}

function createAccount(account, privateKey, address) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    try {
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
    catch (e) {
        console.log(e);
        return false;
    }
}

function payment(account, privateKey, address, amount) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    try {
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
    } catch (e) {
        console.log(e);
        return false;
    }
}

function updateAccount(account, privateKey, key, value) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    try {
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
    } catch (e) {
        console.log(e);
        return false;
    }
}

function post(account, privateKey, content) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    try {
        const tx = {
            version: 1,
            operation: 'post',
            memo: Buffer.alloc(0),
            params: {
                keys: [],
                content: PlainTextContent.encode({ type: 1, text: content }),
            },
            sequence,
        }
        sign(tx, privateKey);
        const etx = encode(tx).toString('base64');
        return doPost(etx);
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

function comment(account, privateKey, object, content) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    try {
        const tx = {
            version: 1,
            operation: 'interact',
            memo: Buffer.alloc(0),
            params: {
                object,
                content: PlainTextContent.encode({ type: 1, text: content }),
            },
            sequence,
        }
        sign(tx, privateKey);
        const etx = encode(tx).toString('base64');
        return doPost(etx);
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

function react(account, privateKey, object, content) {
    if (!privateKey)
        return false;
    const sequence = account.sequence + 1;
    try {
        const tx = {
            version: 1,
            operation: 'interact',
            memo: Buffer.alloc(0),
            params: {
                object,
                content: ReactContent.encode({ type: 2, reaction: content }),
            },
            sequence,
        }
        sign(tx, privateKey);
        const etx = encode(tx).toString('base64');
        return doPost(etx);
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = { createAccount, payment, updateAccount, post, comment, react }