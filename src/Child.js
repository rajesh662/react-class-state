import React, { Component } from 'react'


export class Child extends Component {
      constructor(props){
        super(props);
        let hr=this.props.s;
        this.state={hr};
        this.mobile = this.state.hr
      } 
  render() {
    let mobile=this.state.hr;
     let asc=()=>{
        let ananth=mobile.sort((a,b)=> a.price - b.price);
        this.setState({hr:ananth})
    }
    let dec=()=>{
       let ananth=mobile.sort((a,b)=> a.price - b.price);
       this.setState({hr:ananth.reverse()})
   }
   let isPurchased=()=>{    
    let purchased=mobile.filter((a)=> a.isPurchased===true);
    this.setState({hr:purchased})
  }
  let filterArrage=()=>{    
    this.setState({hr:this.mobile})
   
    }
    return (
      <div>
          <button onClick={()=>asc()}> ascending order</button>
          <button onClick={()=>dec()}> decending order</button>
          <button onClick={()=>isPurchased()}> purchased</button>
          <button onClick={()=>filterArrage()}> all-items</button>
          {mobile.map((g)=><h1>{g.name}  {g.price}</h1>)}
      </div>
    )
  }
}

export default Child