import React, {Component} from 'react';

class LifecycleB extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'Prakash'
    }
    console.log('LifecycleB constructor')
  }
  static getDerivedStateFromProps(props,state) {
    console.log('LifecycleB getderivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('LifecyclB componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifecycleB componentDidupdate')
  }
  

  render(){
    console.log('LifecycleB render')
    return(
      <div>
         <h1>Lifecycle B</h1>
      </div>
    )
  }
}

export default LifecycleB