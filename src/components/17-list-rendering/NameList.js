import React,{Component} from 'react'
import Person from './Person'
// console.log('hello',Person)
const NameList  = (props) => {
    const names=['Bruce','Rokesh','Santosh','Santosh']
    const namelist=names.map((name,index)=><h2 key={index}>{name}</h2>)
  return(
    <div>
        {namelist}
    </div>
   )
  }
export default NameList

//     const persons=[
//     {
//         id:1,
//         name:'Santosh',
//         age:23,
//         skill:'React'
//     },
//     {
//         id:2,
//         name:'Clark',
//         age:25,
//         skill:'Angular'
//     },
//     {
//         id:3,
//         name:'Rokesh',
//         age:30,
//         skill:'Vue'
//     }
// ]
// const personlist=persons.map(person=> <Person key={person.name}  person={person}/>)
// return <div>{personlist}</div>

//  }

//  export default NameList

//  class Personlist extends Component{
//      constructor(props){
//          super(props)
//          this.persons=[
//             {
//                 id:1,
//                 name:'Santosh',
//                 age:23,
//                 skill:'React'
//             },
//             {
//                 id:2,
//                 name:'Clark',
//                 age:25,
//                 skill:'Angular'
//             },
//             {
//                 id:3,
//                 name:'Rokesh',
//                 age:30,
//                 skill:'Vue'
//             }
//          ]
//      }
//      render(){
//          const personlist=this.persons.map(person=><Person person={person}/>)
//          return(
//              <div>
//                 {<h1>{personlist}</h1>}
//              </div>
//          )
//      }

//  }

// export default Personlist