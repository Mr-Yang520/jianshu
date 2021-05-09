import { PlusOutlined, RightOutlined, SyncOutlined } from '@ant-design/icons'
import React from 'react'
import { connect } from 'react-redux'
import { AuthorList } from '../../../store/actions'
function Recommend(props) {
  const { AuthorData, AuthorList } = props
  const lined = React.useRef(null)
  const [Rotates, setRotate] = React.useState(180)
  React.useEffect(() => {
    if (!AuthorData.length) {
      AuthorList()
    }
  }, [AuthorList,AuthorData.length])
  function RotateLine() {
    setRotate(Rotates + 180)
    lined.current.style.transform = `rotate(${Rotates}deg)`
    AuthorList()
  }
  // async function getAnthorList() {
  //   try {
  //     const res = await AuthorList()
  //     if (res) {
  //       // console.log(res)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  return (
    <div className="Recommend">
      <div className="board">
        <a
          target="_blank"
          href="https://www.jianshu.com/mobile/campaign/day_by_day/join?from=home"
          rel="noopener noreferrer"
        >
          <img src="/images/img1.png" alt="" />
        </a>
        <a href="https://www.jianshu.com/mobile/club" target="_blank" rel="noopener noreferrer">
          <img src="/images/img2.png" alt="" />
        </a>
        <a href="https://www.jianshu.com/mobile/books?category_id=284" target="_blank" rel="noopener noreferrer">
          <img src="/images/img3.png" alt="" />
        </a>
        <a href="https://www.jianshu.com/publications" target="_blank" rel="noopener noreferrer">
          <img src="/images/img4.png" alt="" />
        </a>
      </div>
      <div className="Ercode">
        <img src="/images/erwei.png" alt="" />
        <div className="ErText">
          <span>
            下载简书手机App
            <RightOutlined style={{ fontSize: '13px' }} />
          </span>
          <span>随时随地发现和创作内容</span>
        </div>
        <div className="suspendProp">
          <img src="/images/erwei.png" alt="" />
        </div>
      </div>
      <div className="Author">
        <div className="recommend">
          <span>推荐作者</span>
          <span onClick={RotateLine}>
            <SyncOutlined
              ref={lined}
              style={{
                fontSize: '13px',
                marginRight: '5px',
                transition: 'all .2s linear',
              }}
            />
            换一批
          </span>
        </div>
        <div className="authorList">
          {AuthorData.map((item, index) => {
            return (
              <div className="authors" key={index}>
                <div className="Avatars">
                  <img className="avatar" src={item.img} alt="" />
                  <div className="authorName">
                    <span>{item.name}</span>
                    <span>
                      写了{item.number1.toFixed(1)}k字 ·{' '}
                      {item.number2.toFixed(1)}k喜欢
                    </span>
                  </div>
                </div>
                <div className="attention">
                  <span>
                    <PlusOutlined className="lined" />
                    关注
                  </span>
                </div>
              </div>
            )
          })}
          <div className="AllSet">
            <span>
              查看全部
              <RightOutlined />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    AuthorData: state.getIn(['HomeReducer', 'AuthorData']),
  }),
  {
    AuthorList,
  },
)(Recommend)
