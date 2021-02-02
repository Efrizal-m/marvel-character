import React, {useEffect} from 'react'
import HeroesCard from '../components/HeroesCard'
import Loader from '../components/Loader'

import { useSelector, useDispatch } from 'react-redux'
import { fetchHeroes } from '../store/actions/heroAction'

export default function Heroes() {
  const heroes = useSelector(state => state.heroReducer.heroes)
  const error_heroes = useSelector(state => state.heroReducer.error_heroes)
  const loading_heroes = useSelector(state => state.heroReducer.loading_heroes)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHeroes())
  }, [dispatch])

  if (error_heroes) { return <h1 className="d-flex justify-content-center"><strong>Internal Server Error</strong></h1>  }
  if (loading_heroes) { return <div className="mt-5 d-flex justify-content-center"><Loader></Loader></div>  }

  return (
        <div className="container mr-5 mt-3 mb-3">
          <div className="row d-flex justify-content-center">
          {
            heroes.map(hero => {
              return  (
                <div key={hero.id} className="d-flex justify-content-center mt-5 col col-sm-6 col-md-4 col-lg-3 ml-2 mr-2">
                  <HeroesCard hero={hero}/>
                </div>
              )
            })
          }
          </div>
        </div>
  )
}
