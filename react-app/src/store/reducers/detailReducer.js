const initialState = {
    detail: [],
    loading_detail: true,
    error_detail: null
}

function detailReducer (state = initialState, action) {
    switch (action.type) {
        case "detail/setDetail":
            return { ...state, detail: action.payload }
        case "detail/setLoading":
            return { ...state, loading_detail : action.payload }
        case "detail/setError":
            return { ...state, error_detail: action.payload }    
        default:
            return state
    }
}

export default detailReducer