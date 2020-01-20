
import React from 'react';
// import ReactDom from 'react-dom';
import  { render } from 'react-dom'
// import classNames from 'clas'
// import './index.css'

// import styled from 'styled-components'

// 函数式组件
// const App = (props) => {
//     return  (
//         <div>
//             <h1 title={props.title}>test {props.title}</h1>
//             <p>dksjdksdad</p>
//         </div>
//     )
// } 

// const App = craeteApp({
//     title: 'React 16.12'
// })

// ReactDom.render(
//     <App title="React 16.12" />,
//     document.querySelector('#root')
// )

// const Header = () => <h1>test react 16.12</h1>

// 样式组件
// const Title = styled.h1`
//     font-size: 32px;
//     color: blue;
//     margin: 50px；
// `
// 类组件
// class App extends Component {
//     render () {
//         // const style = {color: 'red'}
//         return (
//             <div>
//                 <Title> JSX原理</Title>
//                 <p className="test-css">React Dom </p>
//             </div>
//         )
//     }
// }

// 合法的js代码
// class App extends Component {
//     render () {
//         return (
//             // 创建元素
//             React.createElement(
//                 'div',
//                 {
//                     className: 'app',
//                     id: 'root'
//                 },
//                 React.createElement(
//                     'h1',
//                     {
//                         className: 'title'
//                     },
//                     'JSX'
//                 ),
//                 React.createElement(
//                     'p',
//                     {
                        
//                     },
//                     'tesy React'
//                 )
//             )
//         )
//     }
// }

// {
//     tag: 'div',
//     attrs: {
//         className: 'app',
//         id: 'root'
//     }
// }

// render(
//     <App />,
//     document.querySelector('#root')
// )

// render (
//     <App title="React 16.12"/>,
//     document.querySelector('#root')
// )


import App from './App'

// 全局扩展React.Component的prototypede的方式
// import * as services from './services'
// React.Component.prototype.http = services

render(<App/>, document.querySelector('#root'))






