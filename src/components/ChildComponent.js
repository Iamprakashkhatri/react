import React from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick={()=>props.clickHandler('child')}>Click Here</button>
        </div>
    )
}
export default ChildComponent