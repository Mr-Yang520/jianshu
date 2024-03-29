import { Avatar, Comment, Image, message } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { Condition, WhellFlag } from '../../store/actions';
import './index.scss';

const ExampleComment = ({ children, content, author }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>{author}</a>}
    avatar={<Avatar src="/images/avatar.jpg" alt="Han Solo" />}
    content={<span style={{ lineHeight: '1.5' }}>{content}</span>}
  >
    {children}
  </Comment>
)
function ImageDemo() {
  return (
    <Image
      width={655}
      src="/images/Allimg.webp"
    />
  );
}

function Detail(props) {
  console.log(props.location.state);
  function handelWheel(e) {
    if (e.deltaY > 0) {
      props.WhellFlag(true)
    } else {
      props.WhellFlag(false)
    }
  }
  const { Condition } = props
  React.useEffect(() => {
    Condition(false)
    message.info('Route-id:'+props.location.state.id);
    return(()=>{
      // 页面卸载时
    })
    // Condition(true)
  })

  return (
    <div className="Detail" onWheel={handelWheel}>
      <div className="Main">
        <div className="Titles">
          <h1>随笔：做真正的自己</h1>
          <div className="Avatar">
            <img
              src="https://upload.jianshu.io/users/upload_avatars/8260339/d779b59f-f9ff-4105-a267-f4d280f9520c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              alt=""
            />
            <div className="anthorName">
              <div className="named_Arg">
                <span>风儿微雨</span>
                <span>关注</span>
              </div>
              <div className="Timer">
                <span>2021.02.02 10:57:49 字数 1,922 阅读 29,869</span>
              </div>
            </div>
          </div>
          <div className="particulars">
            <p>
              最近迷上了淘宝购物。我喜欢买一点自己心仪的小东西，给生活带来一些乐趣。在这过程我发现一个现象，就是只要你搜索了什么商品，淘宝上就有无数有关这些商品的推送。相信你也有类似经历，你在手机上点开一个你比较感兴趣的话题，之后你手机上就会出现更多的类似的推送。我在一篇文章里了解到到这种现象叫“信息茧房”。
            </p>
            <ImageDemo />
            <p>
              系统的推送，都集中在我们关注的领域，长此以往，我们接触的信息越来越局限，思维越来越狭窄。久而久之，它给我们带来的仅仅是一点方便而已，反而会降低我们主动思考的能力。
            </p>
            <p>
              推送式学习，不仅仅存在网络里，生活中也有这样的现象，看到别人跑步，于是你也要跑步，别人练瑜伽，你也练瑜伽，别人干什么你就要干什么，别人要减肥，你不顾自己体质虚弱也要减肥，盲目跟风，却没有考虑这个是否真正适合你自己。
            </p>
            <p>
              在这个焦虑的时代，很多人都会缺乏主动思考：我想成为怎样的人，要过上怎样的生活？我们是被外界的泥沙裹挟着言不由衷地混日子，还是定下心来做一件自己真正想做的事？
            </p>
            <p>
              老实说，生活在这样的大环境下，被裹挟有时候难免，但还是要有一点清醒的独立态度。比如说明明知道应试教育害人，那么作为一个教师就不能完全一味地追求分数，可以在自己的教育教学工作中提倡一些创造性思维，可以有意识地培养学生的各方面的能力。
            </p>
            <p>
              我很喜欢网上流传的一位叫塔莎朵朵的老奶奶。从小她的生活条件优渥，却不爱华丽世界，不爱上流社会的交际，倒是对于农场等自然环境怀有浓厚的兴趣。她继承了父亲丰富的想象力的气质和母亲绘画的天赋，从小就开始画图画书。
            </p>
            <p>
              9岁时，因为父母离婚，塔莎被寄养到位于乡下的
              “葛温阿姨”的家，从而正式开启了自己美好的乡村生活：她经常和附近的女孩组成“女团”，爬树摘果子，给牲畜挤奶，到农场帮忙干活，阅读各种书籍……像一只挣脱束缚的鸟儿，在乡间自在的翱翔。
            </p>
            <p>
              找到自己理想的生活方式后，塔莎开始非常勇敢地去追求心中的梦想。她努力画画，终于在57岁这一年用版税买下一片农庄，实现了自己的田园梦想。一直到九十多岁，塔莎奶奶在她的庄园里种花，种菜，种果树，养小动物，在这里幸福地度过了每一天。
            </p>
            <p>
              塔莎奶奶在年轻的时候就明白自己是谁，要过怎样的生活，并且一直为这样的生活努力勤勉。我第一次读到她的故事时禁不住热泪盈眶。人生最重要的是做真正的自己，过想要的生活。
            </p>
          </div>
          <ExampleComment
            content="信息推送狭窄不仅某宝，某音某手都是，确实要吐槽一下！但是个人认为这与做真正的自己这个观点有些牵强！抱歉！"
            author="debbc186f363"
          />
          <ExampleComment
            content="顺应时代做自己 淘宝购物和卖物是一个道理"
            author="小婉"
          />
          <ExampleComment
            content="做真正的自己才会活得自在"
            author="lyy被讨厌的勇气"
          />
          <ExampleComment
            content="做真正的自己才会活得自在"
            author="lyy被讨厌的勇气"
          />
          <ExampleComment
            content="做真正的自己才会活得自在"
            author="lyy被讨厌的勇气"
          />
          <ExampleComment
            content="做真正的自己才会活得自在"
            author="lyy被讨厌的勇气"
          />
          <ExampleComment
            content="做真正的自己才会活得自在"
            author="lyy被讨厌的勇气"
          />
          <ExampleComment content="人要有梦想，更要务实。" author="刘乙己" />
          <div className="dissertation">
            <h1>被以下专题收入，发现更多相似内容</h1>
            <div className="disserClassify">
              <div>
                <img
                  src="https://upload.jianshu.io/collections/images/1656238/crop1581964692714.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp"
                  alt=""
                />
                简友广场
              </div>
              <div>
                <img
                  src="https://upload.jianshu.io/collections/images/1656238/crop1581964692714.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp"
                  alt=""
                />
                简友广场
              </div>
              <div>
                <img
                  src="https://upload.jianshu.io/collections/images/1656238/crop1581964692714.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp"
                  alt=""
                />
                简友广场
              </div>
              <div>
                <img
                  src="https://upload.jianshu.io/collections/images/1656238/crop1581964692714.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp"
                  alt=""
                />
                简友广场
              </div>
              <div>
                <img
                  src="https://upload.jianshu.io/collections/images/1656238/crop1581964692714.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp"
                  alt=""
                />
                简友广场
              </div>
              <div>
                <img
                  src="https://upload.jianshu.io/collections/images/1656238/crop1581964692714.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp"
                  alt=""
                />
                简友广场
              </div>
              <div>
                <img
                  src="https://upload.jianshu.io/collections/images/1656238/crop1581964692714.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48/format/webp"
                  alt=""
                />
                简友广场
              </div>
            </div>
          </div>
        </div>
        <div className="plate">
          <div className="RightTop">
            <div className="Avatar">
              <img
                src="https://upload.jianshu.io/users/upload_avatars/8260339/d779b59f-f9ff-4105-a267-f4d280f9520c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                alt=""
              />
              <div className="anthorName">
                <div className="named_Arg">
                  <span>风儿微雨</span>
                </div>
                <div className="Timer">
                  <span>总资产840 (约49.79元)</span>
                </div>
              </div>
              <div className="attention">
                <span>关注</span>
              </div>
            </div>
            <div className="other">
              <div className="Texts">
                <p>永恒的春天</p>
                <span>阅读435</span>
              </div>
              <div className="Texts">
                <p>窗里窗外</p>
                <span>阅读135</span>
              </div>
              <div className="Texts">
                <p>我把春天爱过了</p>
                <span>阅读208</span>
              </div>
            </div>
          </div>
          <div className="Recommend">
            <p className="reader">推荐阅读</p>
            <div className="Texts">
              <p>摩西奶奶</p>
              <span>阅读35</span>
            </div>
            <div className="Texts">
              <p>《摩西奶奶传》</p>
              <span>阅读122</span>
            </div>
            <div className="Texts">
              <p>生活多几许诗意</p>
              <span>阅读13</span>
            </div>
            <div className="Texts">
              <p>心中的“桃花源”</p>
              <span>阅读95</span>
            </div>
            <div className="Texts">
              <p>你当像鸟飞往你的山</p>
              <span>阅读199</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, {
  WhellFlag,
  Condition,
})(Detail)
