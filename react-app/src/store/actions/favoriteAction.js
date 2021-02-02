import Swal from 'sweetalert2'

export const fetchFavorites = (id) => {
    return (dispatch, getState) => {
        const allState = getState()
        const state = allState.favoriteReducer
        let fav;

        fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=e66c75ee52509076a3af5eea9fe49f8a&hash=1244b8bc7eee31a2b857cfd11e93cd09`) //1st account
        // fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=b513d7573de2caac474cf529bf5cd250&hash=be3a8a0c21b237797ff29a1401e1ac87`) //2nd account
        .then(res => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error('something went wrong!')
            }
          })
          .then(response => {
                if (state.favorites.length === 0) {
                    Swal.fire(
                        'Done!',
                        'You have add this to favorites',
                        'success'
                    )
                    fav = { ...state, favorites: [...state.favorites, response.data.results[0]] }
                } else {
                    state.favorites.find(e => {
                        if (e.id === response.data.results[0].id) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'You have added this to favorites!'
                            })
                            fav = state
                        } else {
                            Swal.fire(
                                'Done!',
                                'You have add this to favorites',
                                'success'
                            )        
                            const newArr = state.favorites.concat(response.data.results[0])
                            fav = { ...state, favorites: newArr }
                        }
                        return fav
                    });                    
                }
            dispatch({
                type: "favorites/setFavorites",
                payload: fav.favorites
            })
            dispatch({
                type: "favorites/setLoading",
                payload: false
            })
          })
          .catch(error => {
              console.log(error);
            dispatch({
                type: "favorites/setError",
                payload: error
            })
          })
    }
}