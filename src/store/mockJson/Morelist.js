// mock.js
// 使用 Mock
var Mock = require('mockjs')
export const data = Mock.mock('/mocklist', {
  //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
  'userinfo|8': [
    {
      //生成四个如下格式的数据
      'id|+1': 1, //数字从1开始，后续依次加1
      ctitle: '@ctitle()',
      'number|20-100': 100,
      'number2|10-100': 100,
      'number3|100-1000': 1000,
      name: '@cname', //名字为随机中文名
      // 'age|18-28': 25, //年龄是18-28之间的随机数
      img: '@image',
      Text: '@cparagraph()',
      // 'sex|1': ['男', '女'], //性别是数组里的随机一项
      'job|1': ['web', 'teacher', 'python', 'php'], //job是数组里的随机一项
    },
  ],
})

export const datas = Mock.mock('/mocks', {
  //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
  'userinfo|8': [
    {
      //生成四个如下格式的数据
      'id|+1': 1, //数字从1开始，后续依次加1
      ctitle: '@ctitle()',
      'number|20-100': 100,
      'number2|10-100': 100,
      'number3|100-1000': 1000,
      name: '@cname', //名字为随机中文名
      // 'age|18-28': 25, //年龄是18-28之间的随机数
      img: '@image',
      Text: '@cparagraph()',
      // 'sex|1': ['男', '女'], //性别是数组里的随机一项
      'job|1': ['web', 'teacher', 'python', 'php'], //job是数组里的随机一项
    },
  ],
})

export const dataAuthor = Mock.mock('/author', {
  //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
  'userinfo|5': [
    {
      //生成四个如下格式的数据
      'id|+1': 1, //数字从1开始，后续依次加1
      'number1|1-100.1-10': 1,
      'number2|1-100.1-10': 100,
      name: '@cname', //名字为随机中文名
      // 'age|18-28': 25, //年龄是18-28之间的随机数
      img: '@image',
    },
  ],
})

