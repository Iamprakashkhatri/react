import React from 'react'

const Greet = (props) => {
    const {name , nickname}= props
    return (
        <div>
            <h1>Hello {name} a.k.a {nickname}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Greet