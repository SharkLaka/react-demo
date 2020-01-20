import axios from 'axios';
import apis from './apis'

const ajax = axios.create({
    baseURL: apis.baseUrl
})

// 拦截器
// doSomeThing...

export const getTodos = () => {
    return ajax.get(apis.todos)
}