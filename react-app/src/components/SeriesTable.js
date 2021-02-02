import React from 'react'

export default function SeriesTable(props) {
    return (
        <tr>
        <td>{props.series.name}</td>
        <td><a href={props.series.resourceURI}>{props.series.resourceURI}</a></td>
        </tr>
    )
}
