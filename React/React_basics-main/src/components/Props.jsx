import React from 'react'

function Props() {
  return (
    <div>
      <Name name ="prakash"/>
    </div>
  )
}

function Name(props){
    return(
        <div>
            <h1>Hi, <p className='prakash' style={{color:'gray'}}>{props.name}</p> Special offers for you</h1>
        </div>
    )
}

export default Props
