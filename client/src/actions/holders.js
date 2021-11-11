import * as api from "../api"

export const getHolders = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHolders()

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createHolder = (holder) => async (dispatch) => {
    try {
        const { data } = await api.createHolder(holder);

        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}