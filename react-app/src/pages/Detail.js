import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDetail } from '../store/actions/detailAction'
import Loader from '../components/Loader'
import SeriesTable from '../components/SeriesTable'

export default function Detail() {
    const {id} = useParams()

    const detail = useSelector(state => state.detailReducer.detail)
    const error_detail = useSelector(state => state.detailReducer.error_detail)
    const loading_detail = useSelector(state => state.detailReducer.loading_detail)
  
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(fetchDetail(id))
    }, [dispatch, id])

    if (error_detail) { return <h1 className="d-flex justify-content-center"><strong>Internal Server Error</strong></h1>  }
    if (loading_detail) { return <div className="mt-5 d-flex justify-content-center"><Loader></Loader></div> }
 
    return (
        <div>
            <section className="jumbotron text-center">
            <div className="container">
              <h1>{detail[0].name}</h1>
              <p className="lead text-muted">{detail[0].description}</p>
              <p>
                <button className="btn btn-primary my-2">Series</button>
              </p>
              <p>To acces series the hero, don't forget to register your account first on marvel.com</p>
            </div>
          </section>        
            <div style={{ width:"100%" }} className="container">            
                <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Resource</th>
                  </tr>
                </thead>
                <tbody>
                {
                    detail[0].series.items.map(series => {
                    return  (
                        <SeriesTable key={series.name} series={series}/>
                    )
                  })
                }            
                </tbody>
              </table>      
            </div>
        </div>
    )
}
