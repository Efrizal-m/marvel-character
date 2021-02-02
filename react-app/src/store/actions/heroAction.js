export const fetchHeroes = () => {
    return (dispatch, getState) => {
        fetch('https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=100&ts=1&apikey=e66c75ee52509076a3af5eea9fe49f8a&hash=1244b8bc7eee31a2b857cfd11e93cd09') //1st account
        // fetch('https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=100&ts=1&apikey=b513d7573de2caac474cf529bf5cd250&hash=be3a8a0c21b237797ff29a1401e1ac87') //2nd account
        .then(res => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error('something went wrong!')
            }
          })
          .then(response => {
            dispatch({
                type: "heroes/setHeroes",
                payload: response.data.results
            })
            dispatch({
                type: "heroes/setLoading",
                payload: false
            })
          })
          .catch(error => {
            dispatch({
                type: "heroes/setError",
                payload: error
            })
          })
    }
}