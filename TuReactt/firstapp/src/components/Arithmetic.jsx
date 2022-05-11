import React, { Component } from 'react'

 class Arithmetic extends Component {
     constructor(){
         super();
         this.state={sayi1:0,sayi2:0,sonuc:0}
     }

     sayi1=(event)=>{
        this.setState({sayi1:parseInt(event.target.value)});
         this.setState({sonuc:this.state.sayi1+this.state.sayi2});
     }
     sayi2=(event)=>{
        this.setState({sayi1:parseInt(event.target.value)});
        this.setState({sonuc:this.state.sayi1+this.state.sayi2});
     }
     sonuc=()=>{
        this.setState({sonuc:this.state.sayi1+this.state.sayi2});
     }

    // <span>{this.state.sonuc}</span>
  render() {
    
    
    return (
      <div>
          <br></br><br></br>
          <input onChange={this.sayi1} type='text' />+
          <input onChange={this.sayi2} type='text' />===
          <button onClick={this.sonuc}>Topla</button>===
          <input onChange={this.sonuc} type='text' />
        
        
      </div>
    )
  }
}
export default Arithmetic;
