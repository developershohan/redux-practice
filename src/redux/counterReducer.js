
const initialState = 0

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return state - 1
        case "RESET":
            return 0
        case "SET":
            return 1200
        default:
            return state
    }

}
export default counterReducer