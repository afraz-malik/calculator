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
