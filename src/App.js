import React, {Component} from 'react';
import './App.css';
// import Hello from './components/hello'
// import Greet from './components/Greet'
// import Welcome from './components/welcome'
// import Message from './components/message'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EvenvBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'

// import UserGreeting from './components/sixteen/UserGreeting'
import NameList from 'components/17-list-rendering/NameList'
import Stylesheet from 'components/20-style-css/Stylesheet'
import Inline from 'components/20-style-css/inline'
import Form from 'components/21-form-basics/Form'
import LifecycleA from 'components/23-comp-mount/LifecycleA'
import FragmentDemo from 'components/25-fragments/FragmentDemo'
import Table from 'components/25-fragments/Table'

import ClickCounter from './components/33-34-HOC/ClickCounter';
import HoverCounter from './components/33-34-HOC/HoverCounter';
// function App() {
//   return (
//     <div className="App">
//       <Hello></Hello>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  render(){
    return (
      <div className='App'>

      <ClickCounter name ='prakash'/>
      <HoverCounter />
        

        {/* <Message /> */}
        {/* <Greet name='Rokesh' nickname='Rake'>This is children</Greet>

        <Greet name= 'Shreejan' nickname='Sharu'/>
        <button>Action</button>
        <Greet name='Santosh' nickname='Sannie'/> */}

        {/* <Welcome name='Rokesh' nickname='Rake'>Hello</Welcome>
        <Welcome name= 'Shreejan' nickname='Sharu'/>
        <Welcome name='Santosh' nickname='Sannie'/> */}
        {/* <Hello/> */}

        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EvenvBind /> */}
        {/* <ParentComponent /> */}

        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Stylesheet /> */}
        {/* <Inline /> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <FragmentDemo /> */}
        <Table />

      </div>
    );
  }

}
export default App;