import React, { Component, Fragment } from 'react'
// Fragment  空标签
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

import { getTodos } from './services'

export default class App extends Component {
    // state = {
    //     title: '代办事项列表1'
    // }
    constructor() {
        super()
        // 定义state
        this.state = {
            // article: '<div>的空间巨大<i>就看得见啊</i></div>',
            title: '代办事项列表',
            desc: '今日事，今日毕',
            // todos: [{
            //     id: 1,
            //     title: '敲代码',
            //     assighee: 'Easier',
            //     completed: true
            // }, {
            //     id: 2,
            //     title: '下班',
            //     assighee: 'Tony',
            //     completed: false
            // }]
            todos: [],
            isLoading: false
        }
    }
    // 获取数据
    getData = () => {
        this.setState({
            isLoading: true
        })
        getTodos()
            .then(response => {
                console.log(response.data);
                if(response.status === 200) {
                    // setTimeout(() => {
                        this.setState({
                            todos: response.data
                        })
                    // }, 5000)
                } else {
                    // 处错误
                }
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }

    // react生命周期函数
    componentDidMount () {
        this.getData()
    }

    // 操作state中的数据(添加事件)
    addTodo = (todoTitle) => {
        // console.log("App.js:",todoTitle);
        this.setState({
            todos: this.state.todos.concat({
                id: this.state.todos.length + 1,
                title: todoTitle,
                completed: false
            })
        })
    }

    // 修改inputChange事件
    onCompeletedChange = (id) => {
        // console.log('onCompeletedChange',id);
        this.setState((prevState) => {
            // console.log('ererere',prevState);
            return {
                todos: prevState.todos.map(todo => {
                    if(todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        })
        
    }

    render() {
        return (
            <Fragment>  
                {
                    // <div dangerouslySetInnerHTML={{__html: this.state.article}} />  // v-html
                }
                {/* header组件 */}
                <TodoHeader 
                    desc={this.state.desc}
                >
                    <i>{this.state.title}</i>  
                </TodoHeader>

                {/* input组件 */}
                <TodoInput addTodo={this.addTodo}/>

                {/* list组件 */}
                {
                    this.state.isLoading ? <div>loading...</div>: 
                    <TodoList 
                        todos={this.state.todos}
                        onCompeletedChange={this.onCompeletedChange}
                    />
                }
                
                {/* like组件 */}
                <Like />
            </Fragment>
        )
    }
}
