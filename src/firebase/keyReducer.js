const initialState = {
    publicKey: '',
    privateKey: '',
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