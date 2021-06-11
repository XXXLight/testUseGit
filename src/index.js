import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:null,
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
  <Square />,
  document.getElementById('root')
);

