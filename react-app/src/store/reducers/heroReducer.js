const initialState = {
    heroes: [],
    loading_heroes: true,
    error_heroes: null
}

function heroReducer (state = initialState, action) {
    switch (action.type) {
        case "heroes/setHeroes":
            return { ...state, heroes: action.payload }
        case "heroes/setLoading":
            return { ...state, loading_heroes : action.payload }
        case "heroes/setError":
            return { ...state, error_heroes: action.payload }    
        default:
            return state
    }
}

export default heroReducer