import {
  CompassOutlined,
  SearchOutlined,
  SyncOutlined
} from '@ant-design/icons'
import { message } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { ChnageStretch, Condition, getlist, GetListData } from '../../store/actions'
import './index.scss'

function Header(props) {
  const { isStretch, list, TransFlag, condFlag, isLogin } = props
  const [monseIn, setMonse] = React.useState(false)
  const [pageIndex, setPage] = React.useState(1)
  const [Rotates, setRote] = React.useState(180)
  const [Allpage, setAll] = React.useState(5)
  const Mypain = React.useRef(null)
  // console.log(isStretch);
  /* eslint-disable */
  // React.useEffect(() => {
  // }, [])

  React.useEffect(() => {
    console.log(isLogin)
    if (!monseIn) {
      setRote(180)
    }
  }, [monseIn, isLogin])

  const getlistdata = async () => {
    await props.getlist()
  }

  const enterHandel = () => {
    props.ChnageStretch(true)
    setMonse(true)
  }
  const leaveHandel = () => {
    setMonse(false)
    props.ChnageStretch(false)
  }
  const focusHandel = () => {
    !list.length && getlistdata()
    props.ChnageStretch(true)
  }
  const remind = () => {
    message.info('默认注册,请登录')
  }
  const changeBatch = () => {
    setRote(Rotates + 180)
    Mypain.current.style.transform = `rotate(${Rotates}deg)`
    setAll(Math.ceil(list.length / 5))
    setPage(pageIndex + 1)
    if (pageIndex < Allpage) {
      setPage(pageIndex + 1)
    } else {
      setPage(1)
    }
  }
  // 登录
  const Register = () => {
    props.history.push('/home/login')
  }

  const ChangeList = () => {
     props.GetListData()
  }

  const ShowList = () => {
    if ((isStretch || monseIn) && list.length) {
      const newLists = []
      for (let i = (pageIndex - 1) * 5, len = pageIndex * 5; i < len; i++) {
        newLists.push(list[i])
      }
      // console.log(newLists);
      return (
        <div
          className="HotSearch"
          onMouseEnter={enterHandel}
          onMouseLeave={leaveHandel}
        >
          <div className="Searchs">
            <span>热门搜索</span>
            <span className="circle" onClick={changeBatch}>
              <SyncOutlined className="syncOut" ref={Mypain} />
              换一批
            </span>
          </div>
          <div className="listSearch">
            {newLists.map((item, index) => {
              return item != undefined ? <span key={index} onClick={ChangeList}>{item}</span> : ''
            })}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
  // const isStretch = true
  return (
    <div
      className="Header"
      style={{ overflow: condFlag ? 'inherit' : 'hidden' }}
    >
      {/* 滚动转换 */}
      <CSSTransition
        in={TransFlag}
        timeout={400}
        classNames="Whell"
        style={{ transform: condFlag ? 'translateY(0px)' : null }}
      >
        <div className="Trans">
          <div className="headers">
            <Link to="/">
              <div className="logo"></div>
            </Link>
            <div className="Centers">
              <div className="Search">
                <span>
                  <CompassOutlined style={{ fontSize: '18px' }} />
                  首页
                </span>
                <span>下载App</span>
                {condFlag ? (
                  <CSSTransition
                    in={isStretch}
                    timeout={400}
                    classNames="stretch"
                  >
                    <div className="Input">
                      <input
                        type="text"
                        onClick={focusHandel}
                        placeholder="搜索"
                        onBlur={() => props.ChnageStretch(false)}
                      />
                      <SearchOutlined
                        style={{ background: isStretch ? ' #666' : '' }}
                      />
                      {ShowList()}
                    </div>
                  </CSSTransition>
                ) : null}
              </div>
              <div className="Fontsize">
                <span>Aa</span>
                {!isLogin ? (
                  <span onClick={Register}>登录</span>
                ) : (
                  <span>已登录</span>
                )}
              </div>
            </div>
            <div className="Btn">
              <div className="register">
                <span onClick={remind}>注册</span>
              </div>
              <div className="article ">
                <span>写文章</span>
              </div>
            </div>
          </div>
          {!condFlag ? (
            <div className="headers Whell">
              <div className="Titles">
                <h1>随笔：做真正的自己</h1>
              </div>
              <div className="Anthors">
                <img
                  src="https://upload.jianshu.io/users/upload_avatars/8260339/d779b59f-f9ff-4105-a267-f4d280f9520c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                  alt=""
                />
                <span>风儿微雨</span>
                <span>关注</span>
                <span>赞赏支持</span>
              </div>
            </div>
          ) : null}
        </div>
      </CSSTransition>
    </div>
  )
}
export default connect(
  (state) => ({
    isStretch: state.getIn(['HaderReducer', 'isStretch']),
    list: state.getIn(['HaderReducer', 'list']),
    TransFlag: state.getIn(['Detailcer', 'TransFlag']),
    condFlag: state.getIn(['Detailcer', 'condFlag']),
    isLogin: state.getIn(['Detailcer', 'isLogin']),
  }),
  {
    ChnageStretch,
    getlist,
    Condition,
    GetListData
  },
)(withRouter(Header))
