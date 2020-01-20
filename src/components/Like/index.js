import React, { Component } from 'react'

export default class Like extends Component {
    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }

    handleLikeClick = () => {
        // 修改数据的方法(setState/react方法)
        // this.setState({
        //     isLiked: !this.state.isLiked
        // })

        /**
         * @param prevState 上一次的
         * @param props 上一次的
         */
        this.setState((prevState, props) => {
            console.log('setState内部', this.state.isLiked);
            // console.log(prevState, props);
            return {
                isLiked: !this.state.isLiked
            }
        }, () => {
            // 由于setState是异步的，可以在setState的回调中获到最新的state
            console.log(this.state.isLiked);
            
        })
        console.log('setState外部', this.state.isLiked);
        
    }

    render() {
        return (
            <div>
                <span onClick={this.handleLikeClick}>
                {
                    this.state.isLiked ? '喜欢❤️' : '取消😡'
                }    
                </span>
            </div>
        )
    }
}
