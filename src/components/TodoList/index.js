import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    /** 验证todos (父组件的传值)*/
    static propTypes = {
        // 检测todos
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })).isRequired,
        // 检测事件
        onCompeletedChange: PropTypes.func
    }

    render() {
        // console.log(this.props);
        
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return (
                            // <TodoItem 
                            //     key={todo.id}
                            //     id={todo.id}
                            //     title={todo.title}
                            //     completed={todo.completed}
                            // />
                            <TodoItem 
                                onCompeletedChange={this.props.onCompeletedChange}
                                key={todo.id}
                                {...todo} /** 解构传值 */
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
