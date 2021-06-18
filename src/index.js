import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import XJJ from './XJJ'
import XJJItem from './XJJItem'

b asdbb dhjb slhj
第一次
class Square extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:null,asbd kvch,ad
    };
    console.log("constro");
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  render(){
    console.log("render");
    return (
      <button className="square" onClick={()=>this.setState({value:'X'})}>
        {this.state.value}
      </button>
    );
  }
}



// ========================================

ReactDOM.render(
  <XJJ />,
  document.getElementById('root')
);

