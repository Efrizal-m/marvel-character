import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteCards from '../components/FavoriteCards'
import Loader from '../components/Loader'

export default function Favorites() {
    const favorites = useSelector(state => state.favoriteReducer.favorites)
    const error_favorites = useSelector(state => state.favoriteReducer.error_favorites)
    const loading_favorites = useSelector(state => state.favoriteReducer.loading_favorites)

    if (error_favorites) { return <h1 className="d-flex  mt-5 justify-content-center"><strong>Internal Server Error</strong></h1>  }
    if (loading_favorites) { return <div className="mt-5 d-flex justify-content-center"><Loader></Loader></div>  }
    if (favorites.length === 0 ) { return <h1 className="d-flex mt-5 justify-content-center"><strong>You don't have any favorites hero yet</strong></h1>  }
    
    return (
            <div className="container mr-5 mt-3 mb-3">
            <div className="row d-flex justify-content-center">
            {
              favorites.map(favorite => {
                return  (
                  <div key={favorite.id} className="d-flex justify-content-center mt-5 col col-sm-6 col-md-4 col-lg-3 ml-2 mr-2">
                    <FavoriteCards favorite={favorite}/>
                  </div>
                )
              })
            }
            </div>
          </div>
    )
  }
