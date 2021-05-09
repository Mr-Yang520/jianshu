import { fromJS } from 'immutable'
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import {
  ADDLIST,
  AUTHOR,
  CONDITION,
  GETLIST,
  GETLISTDATA,
  DELETE,
  LOGIN,
  STRETCH,
  WHELL
} from './contants'

const defaultState = fromJS({
  isStretch: false,
  list: [],
  listData: [],
  Addlist: [],
  AuthorData: [],
  TransFlag: false,
  condFlag: false,
  isLogin: false,
  listdatas: ['1','2','3']
})

function HaderReducer(state = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case STRETCH:
      return state.set('isStretch', data)
    case GETLIST:
      return state.set('list', data)
    default:
      return state
  }
}

function HomeReducer(state = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case GETLISTDATA:
      return state.merge({ listData: data })
    case ADDLIST:
      return state.update('listData', (item) => item.concat(data))
    case AUTHOR:
      return state.set('AuthorData', data)
    case DELETE:
      return state.deleteIn(['listData', data])
    default:
      return state
  }
}

function Detailcer(state = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case WHELL:
      return state.set('TransFlag', data)
    case CONDITION:
      return state.set('condFlag', data)
    case LOGIN:
      return state.set('isLogin', data)
    default:
      return state
  }
}

export default combineReducers({
  HaderReducer,
  HomeReducer,
  Detailcer,
})
