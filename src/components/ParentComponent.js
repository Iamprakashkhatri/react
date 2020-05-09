import React,{Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            parentName:'Parent'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(childname){
        alert(`Hello ${this.state.parentName} from ${childname}`)
        console.log('hello')
    
    }
    


    render() {
        return (
            <div>
                <ChildComponent clickHandler={this.clickHandler.bind(this)} />
            </div>
        )
    }
}
export default ParentComponent