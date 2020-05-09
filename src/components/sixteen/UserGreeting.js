import React, {Component} from 'react';

class UserGreeting extends Component{
  constructor(props){
    super(props)
    this.state={
      isLoggedIn:true

    }

  }
  
  render(){
    //   conditional rendering throgh short circuit operator
    return this.state.isLoggedIn && <div>Welcome Prakash</div>

        // conditional rendering through terenary operator
    // return this.state.isLoggedIn ? (
    //     <div>Welcome Prakash</div>
    // ): (
    //     <div>Welcome Guest</div>
    // )

        // conditional rendering through element variable
    //   let message
    //   if (this.state.isLoggedIn){
    //       message=<div>Welcome Prakash</div>
    //   }else{
    //       message=<div>Welcome Guest</div>
    //   }
    // return <div>{message}</div>

        // conditional rendering through if/else condition
    // if (this.state.isLoggedIn){
    //   return <div>Welcome Prakash</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }

  }
}

export default UserGreeting