import React,{Component} from 'react';

// 子组件
class XJJItem extends Component{
    constructor(props){
        super(props)
        // 用箭头函数可以不用绑定
        //this.handleClick=this.handleClick.bind(this)
    }
    render(){
        return (qhjebvchjeq
            // 好像啥都能绑定到onClick，this.props.后面都是传进来的
            <li onClick={this.handleClick}>{this.props.content}</li>
        );
    }
    handleClick=()=>{
        // deleteItem在这个组件找不到，因为是外面传进来的
        this.props.deleteItem(this.props.index)
    }
}

export default XJJItem;