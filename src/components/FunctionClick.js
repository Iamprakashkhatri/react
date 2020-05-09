import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log('This is it')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
export default FunctionClick