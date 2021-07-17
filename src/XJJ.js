import React, { Component, Fragment } from 'react'
import './style.css'
import XJJItem from './XJJItem'

class XJJ extends React.Component {
    constructor(props){
        super(props)
        // 自己的数据
        this.state={
            sf vsdv dsgm vsf,.bs/f d
            df vmdf 
            // 中间冒号，结尾逗号
            inputV:'serv1',
            list:['ser3','serv4']
        }
        // 绑定函数，可用箭头函数代替
        //this.inputChange=this.inputChange.bind(this)
    }
    // render(){}    return()
    render() {
        return (
            // <Fragment>包裹方法，替代div
            <Fragment>
                {/*写注释的方法，这是注释*/}
                <div>
                    {/* <label htmlFor="">增加服务：</label> */}
                    <input ref={(input)=>{this.input=input}} className='input' value={this.state.inputV} onChange={this.inputChange}/> 
                    <button onClick={this.addList}>增加服务</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                            // <li 
                            //     key={index+item}
                            //     onClick={this.deleteItem.bind(this,index)}
                            //     dangerouslySetInnerHTML={{__html:item}}
                            // >
                                
                            // </li>
                            // 
                                <XJJItem 
                                key={index+item} 
                                content={item} 
                                index={index}
                                deleteItem={this.deleteItem}
                                />
                                
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            //inputV : e.target.value
            inputV:this.input.value
        })
    }
    addList=()=>{
        this.setState({
            list:[...this.state.list,this.state.inputV],
            inputV:''
        },()=>{ console.log(this.ul.querySelectorAll('li').length)})
        //console.log(this.ul.querySelectorAll('li').length)
    }
    deleteItem=(index)=>{
        console.log(index)
        let list=this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        }
        )
    }
}

export default XJJ
