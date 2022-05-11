import React, { Component } from 'react'

 class MyComp extends Component {
     constructor(){
         console.log("constructor çalıştı");
         super();
         this.state={degisken:"Tanışalım mı?",name:"Emine"}
     }

     componentDidMount(){
        console.log("componentDidMount çalıştı");
     }
     

  render() {
    const changedegisken=()=>{
        console.log("change degisken çalıştı");
        this.setState({degisken:"degisti"});
       // ddd="asd";
     }
     const changename=(event)=>{
        this.setState({name:event.target.value});
     }

     //let ddd="COMPONENTIM";
      const degisken="Selam";
    console.log("render çalıştı");
    return (
      <div>
          <button onClick={changedegisken}>Change</button>
          <input type='text' onChange={changename}></input><br/>
          <h1 className='mycomp'>{degisken}</h1>
          <h1 className='mycomp'>{this.state.degisken}</h1>
          <h1 className='mycomp'>Hello {this.state.name}</h1>
      </div>
    )
  }
}
export default MyComp;
