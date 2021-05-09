import { Input, message, Space } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { LoginData } from '../../store/actions'
import './index.scss'
function Login(props) {
  const Number = React.useRef(0)
  const Password = React.useRef(0)
  const regex = /^((\+)?86|((\+)?86)?)0?1[3458]\d{9}$/
  const handelLogin = () => {
    if (!regex.test(Number.current.state.value)) {
      message.info('手机号有误')
    } else {
      if (
        Password.current.state.value === undefined ||
        Password.current.state.value.trim() === ''
      ) {
        message.info('请输入密码')
      } else {
        props.LoginData(true)
        props.history.push('/')
        message.info('登录成功')
      }
    }
    // console.log(Password.current.state.value)
  }

  return (
    <div className="login">
      <div className="Logo">
        <img src="/images/jianshuLog.png" alt="" />
      </div>
      <div className="InputLogin">
        <div className="register">
          <div></div>
          <div className="FeedIn">
            <p>
              <span>登录</span>
            </p>
            <Space direction="vertical" className="AntInput">
              <Input placeholder="手机号或邮箱" ref={Number} />
              <Input.Password placeholder="密码" ref={Password} />
            </Space>
            <div className="Problem">登录遇到问题?</div>
            <div className="loginBtn" onClick={handelLogin}>
              <span>登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {
  LoginData,
})(withRouter(Login))
