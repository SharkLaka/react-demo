// import React, { Component} from 'react'

// export default function TodoItem() {
//     return (
//         <div>
//             TodoItem
//         </div>
//     )
// }

/***********
 * 函数式组件没有生命周期
 ***********/

import React, { PureComponent } from 'react'

/** 空函数 */
const noop = () => {}

export default class TodoItem extends PureComponent {

    handleCheckboxChange = () => {
        // 
        // this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)

        // 解构赋值写法
        const { onCompeletedChange = noop, id } = this.props

        onCompeletedChange(id)
    }

    /** react生命周期函数 */
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.completed !== this.props.completed
    // }

    render() {
        console.log(`TodoItem ${this.props.title} render`);
        
        // 解构this.props
        const { completed, title } = this.props
        // console.log("dsd",this.props);
        
        return (
            <li>
                <input 
                    checked={completed}
                    onChange={this.handleCheckboxChange}
                    type="checkbox" 
                />
                <span>{title} {completed ? "已完成" : "未完成"}</span>
            </li>
        )
    }
}

