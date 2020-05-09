import React from 'react'

const Hello= () => {
    // return (
    //     <div>
    //         <h1>Hello Prakash</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'hello',class:'dummyClass'},
        React.createElement('h1',null,'Hello Prakash')
    )
}

export default Hello