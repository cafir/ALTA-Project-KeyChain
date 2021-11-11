export default (holders = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...holders, action.payload];
        default:
            return holders
    }
}