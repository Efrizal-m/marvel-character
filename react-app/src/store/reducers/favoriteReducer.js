const initialState = {
    favorites: [],
    loading_favorites: false,
    error_favorites: null
}

function favoriteReducer (state = initialState, action) {
        switch (action.type) {
            case "favorites/setFavorites":
                return { ...state, favorites: action.payload }
            case "favorites/setLoading":
                return { ...state, loading_favorites : action.payload }
            case "favorites/setError":
                return { ...state, error_favorites: action.payload }    
            default:
                return state
        }    
}

export default favoriteReducer