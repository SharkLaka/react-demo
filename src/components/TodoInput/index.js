// 类组件(有状态组件/非受控组件)

import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string
    }

    static defaultProps = {
        btnText: '添加'
    }
    
    constructor () {
        super() 
        this.state = {
            inputValue: ''
        }
        // 创建ref
        this.inputDom = createRef()

        /**
         * 使用bind绑定事件方式
         * */
        // this.handleAddClick = this.handleAddClick.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    /**
     * 不适用bind绑定事件,直接使用箭头函数即可
     * 
     * 添加事件
     */
    handleAddClick = () => {
        // console.log(e.ke);
        // console.log(this.inputDom);
        // console.log(this.state);

        // 验证inputValue不为空
        if(this.state.inputValue === '') {
            return
        }
        
        /**
         * 通过父组件的传递的props中的addTodo事件修改state
         */
        this.props.addTodo(this.state.inputValue)

        /** 添加后清空inputValue */
        this.setState({
            inputValue: ''
        }, () => {
            this.inputDom.current.focus()
        })
    }

    /**
     * 回车事件
     */
    handleKeyUp = (e) => {
        // console.log(e.keyCode);
        if(e.keyCode === 13) {
            this.handleAddClick()
        }
        
    }
    /**
     *  使用bind绑定事件方式
     */
    // handleAddClick () {
    //     console.log(this.state);
        
    // }
    
    render() {
        return (
            <div>
                <input  
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    ref={this.inputDom}
                />
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </div>
        )
    }
}
