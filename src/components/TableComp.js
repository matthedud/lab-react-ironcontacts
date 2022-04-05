import React from "react"
import ButtonComp from "./ButtonComp"
import './TableComp.css'
import TrophyComp from "./TrophyComp"

const TableComp = (props) => {
  return (
    <tbody>
      <th>
        <img src={props.pictureUrl} alt="imapge" />
      </th>
      <th>{props.name}</th>
      <th>{props.popularity}</th>
      <th><TrophyComp trophy= {props.wonOscar}/></th>
      <th><TrophyComp trophy= {props.wonEmmy}/></th>
      <th><ButtonComp title= {'Delete'} onClick={()=>props.deleteActor(props.id)}/></th>
    </tbody>
  )
}

export default TableComp
