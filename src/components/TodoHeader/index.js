// 函数式组件(无状态组件/受控组件)

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'  // 类型检查

export default function TodoHeader(props) {
    // console.log(props);
    
    return (
        <Fragment>        
            <h1>
                {props.children}
            </h1>
            <h3>{props.desc}</h3>
            <p>{props.x + props.y}</p>
        </Fragment>    
    )
}

// 数据类型检查
TodoHeader.propTypes = {
    desc: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
    // children: PropTypes.isRequired
}

// defaultProps设置默认值
TodoHeader.defaultProps = {
    x: 2,
    y: 4
}
