import { UpOutlined } from '@ant-design/icons'
import React from 'react'
import { connect } from 'react-redux'
import { Condition } from '../../store/actions'
import List from './components/list'
import Recommend from './components/Recommend'
import './index.scss'

function Home(props) {
  const {Condition} = props
  var Scroll
  const [isTop, setTop] = React.useState(false)
  const [timer, setTimer] = React.useState(null)
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  React.useEffect(()=>{
    Condition(true)
  },[Condition])

  function handleScroll() {
    Scroll = document.documentElement.scrollTop
    if (Scroll >= 200) {
      setTop(true)
    } else {
      setTop(false)
    }
    if (Scroll <= 0) {
      cancelAnimationFrame(timer)
      setTimer(null)
    }
  }

  function BackTop() {
    const Tops = Math.ceil(Scroll / 19)
    if (timer) return
    ;(function animateTop() {
      document.documentElement.scrollTop -= Tops
      setTimer(requestAnimationFrame(animateTop))
    })()
  }

  return (
    <div className="Home">
      <div className="homeleft">
        <List></List>
      </div>
      <div className="homeright">
        <Recommend></Recommend>
      </div>
      <div
        className="Top"
        onClick={BackTop}
        style={{
          opacity: isTop ? '1' : '0',
          transform: isTop ? 'translateY(0px)' : 'translateY(30px)',
        }}
      >
        <UpOutlined />
      </div>
    </div>
  )
}

export default connect(null, {
  Condition,
})(Home)
