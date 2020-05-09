import React,{Component} from 'react'

class Welcome extends Component {
    render(){
        const {name,nickname}=this.props
        return (
            <div>
                {/* <h1> Welcome {this.props.name} a.k.a {this.props.nickname}</h1> */}
        <h1>Welcome {name} a.k.a {nickname}</h1>
            </div>
        
        )
    }

}

export default Welcome;