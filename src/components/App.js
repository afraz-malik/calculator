import React from 'react';
import min from './min.jpg'
import max from './max.jpg'
import close from './close.jpg'
import Result from './result/result.js';
import CalcBody from './calcbody/calcbody.js'
import './App.css'




class App extends React.Component{
  constructor(){
    super();
    this.state={
      result: ''
    }
  }
  componentDidMount(){ 
    this.ok()
    console.log(this.props.result)
  }
  ok=()=>{
    document.addEventListener("keydown"  , (event) => {
      console.log(event.keyCode )
      switch(event.keyCode){
       case 96:
       this.setState({result: this.state.result + 0});
       break;
       case 97:
       this.setState({result: this.state.result + 1});
       break;
       case 98:
       this.setState({result: this.state.result + 2});
       break;
       case 99:
       this.setState({result: this.state.result + 3});
       break;  
       case 100:
       this.setState({result: this.state.result + 4});
       break; 
       case 101:
       this.setState({result: this.state.result + 5});
       break;  
       case 102:
       this.setState({result: this.state.result + 6});
       break;  
       case 103:
       this.setState({result: this.state.result + 7});
       break;  
       case 104:
       this.setState({result: this.state.result + 8});
       break;  
       case 105:
       this.setState({result: this.state.result + 9});
       break;  
      case 109:
       this.setState({result: this.state.result + '-'});
       break;  
        case 107:
       this.setState({result: this.state.result + '+'});
       break;  
        case 106:
       this.setState({result: this.state.result + '*'});
       break;  
        case 111:
       this.setState({result: this.state.result + '/'});
       break;  
        case 190:
       this.setState({result: this.state.result + '.'});
       break;   
        case 188:
       this.setState({result: this.state.result + ','});
       break;    
       case 13:
       this.calculate()
       break;
       case 8:
       this.setState({result: this.state.result.slice(0, -1)});
       break;
       case 46:
       this.setState({result: ''});
       break;
       default:
  
     }
   })
  }
  

  calculate=() =>{
    try{
           this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "" ) + ""
          })
    }
    catch (e) {
            this.setState({
                result: "error"
      })
    }
   
  }
  getValue = (value) =>{
    switch(value){
      case 'C':
        this.setState({result: ''})
        break;
      case 'CE':
        this.setState({result: ''})
        break;
       case 'dummy':
        console.log('disabled')
        break; 
      case 'back':
         this.setState({result: this.state.result.slice(0, -1)})
         break;
      case '=':
        this.calculate()
        break;  
      default:
        this.setState({result: this.state.result + value})
    }
  }
  render(){
    return (
      <div className='calculator'>
        <div className="title"> 
          <p> Calculator </p>
          <div className="titleimg">
             <img src={min} alt='min'/>
             <img src={max} alt='min'/>
             <img src={close} alt='min'/>
          </div>
         </div>
         <div>
           <h4> Created By Afraz Malik</h4> 
           <a href='https://www.google.com'>Source Code</a>
         </div>
      <Result result = {this.state.result} />
      <CalcBody getValue = {this.getValue} />
    </div>
      )
  }
}

export default App;
