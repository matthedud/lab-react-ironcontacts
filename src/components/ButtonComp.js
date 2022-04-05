import React from 'react'

const ButtonComp = props => {
  return (
    <button onClick={props.onClick}>{props.title}</button>
  )
}

export default ButtonComp