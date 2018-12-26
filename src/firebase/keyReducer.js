const initialState = {
    publicKey: 'GAKXVIL35CL7QRBFIAXCYMOAV4JKD3QDWGRYJRMSWNRJWX7RL726IAOF',
    privateKey: 'SCRODMRHQMYICWOWI7DADXOZLZDMPK34PXPYC7L6376VSXH7ODPHKUWM',
}
const keyReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'setKey':
            return { ...prevState, publicKey: action.publicKey, privateKey: action.privateKey };
        case 'logout':
            return { ...prevState, publicKey: '', privateKey: '' };
        default:
            return prevState;
    }
}
export default keyReducer;