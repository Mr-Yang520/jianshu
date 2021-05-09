import { CommentOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddlistMore, GetListData, DeleteIndex } from '../../../store/actions'

function List(props) {
  const { listData, GetListData} = props
  const [LoadFlag, setLoad] = React.useState(true)
  // console.log(listData.length);
  React.useEffect(() => {
    if (!listData.length) {
      GetListData()
    }
  }, [GetListData,listData.length])
  function addMoreList() {
    setLoad(false)
    setTimeout(() => {
      AlllistData()
    }, 500)
  }

  // const Delete = (e, index) => {
  //   e.preventDefault();
  //   console.log(index);
  //   props.DeleteIndex(index)
  //   console.log(listData);
  //   // console.log(listdatas.toJS());
  // }

  async function AlllistData() {
    try {
      const res = await props.AddlistMore()
      if (res) {
        setLoad(true)
      }
    } catch (err) { }
  }
  return (
    <div className="List">
      {listData.map((item, index) => {
        return (
          <Link to={{ pathname: '/home/detail', state: { id: index } }} key={index}>
            <div className="listData" key={index}>
              <div className="TextList">
                <h2>{item.ctitle}</h2>
                <div className="Text">
                  <span>{item.Text}</span>
                </div>
                <div className="classify">
                  <div className="Reacer">
                    <StarOutlined />
                    <span>{item.number}</span>
                  </div>
                  <div className="writer">
                    <span>{item.name}</span>
                  </div>
                  <div className="comment">
                    <CommentOutlined />
                    <span>{item.number2}</span>
                  </div>
                  <div className="comment">
                    <HeartOutlined />
                    <span>{item.number3}</span>
                  </div>
                </div>
              </div>
              <div className="listImg">
                <img src={item.img} alt="" />
              </div>
              {/* <div onClick={(e) => Delete(e, index)}>删除</div> */}
            </div>
          </Link>
        )
      })}
      <Skeleton loading={!LoadFlag} paragraph={{ rows: 3 }} active />
      {LoadFlag ? (
        <div className="AddMore" onClick={addMoreList}>
          <span>阅读更多</span>
        </div>
      ) : (
        ''
      )}

      <div className="Footers">
        <a href="">关于简书</a>
        <em> · </em>
        <a href="">联系我们</a>
        <em> · </em>
        <a href="">加入我们</a>
        <em> · </em>
        <a href="">简书出版</a>
        <em> · </em>
        <a href="">品牌与徽标</a>
        <em> · </em>
        <a href="">帮助中心</a>
        <em> · </em>
        <a href="">合作伙伴</a>
        <em> · </em>
        <a href="">涂檬-原创插画社区</a>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    Addlist: state.getIn(['HomeReducer', 'Addlist']),
    listData: state.getIn(['HomeReducer', 'listData']),
    // newListData: state.getIn(['HomeReducer', 'newListData']),
  }),
  {
    AddlistMore,
    GetListData,
    DeleteIndex
  },
)(List)
