import axios from 'axios'
import {
  ADDLIST,
  AUTHOR,
  CACHE,
  CONDITION,
  GETLIST,
  GETLISTDATA,
  LOGIN,
  STRETCH,
  WHELL,
  DELETE
} from './contants'
import './mockJson/Morelist'
// import {fromJS} from 'immutable'
export const ChnageStretch = (data) => ({ type: STRETCH, data })
export const Changelist = (data) => ({ type: GETLIST, data })
export const Addlist = (data) => ({ type: ADDLIST, data })
export const Getlist = (data) => ({ type: GETLISTDATA, data })
export const AuthorData = (data) => ({ type: AUTHOR, data })
export const WhellFlag = (data) => ({ type: WHELL, data })
export const Condition = (data) => ({ type: CONDITION, data })
export const Cache = (data) => ({ type: CACHE, data })
export const LoginData = (data) => ({ type: LOGIN, data })
export const DeleteIndex = (data) => ({type:DELETE,data})

// axios
export const getlist = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('api/list.json')
      dispatch(Changelist(res.data.data))
      return res
    } catch (err) {
      console.log(err)
      return err
    }

    //  .then(res => {
    //     dispatch(Changelist(res.data.data))
    //   }).catch(err => {
    //     console.log(err);
    //   })
  }
}

export const GetListData = () => {
  return (dispatch) => {
    axios
      .get('/mocklist')
      .then((res) => {
        // console.log(res.data.userinfo);
        dispatch(Getlist(res.data.userinfo))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const AddlistMore = () => {
  return async (dispatch) => {
    const res = await axios.get('/mocks')
    try {
      dispatch(Addlist(res.data.userinfo))
      return res.data.userinfo
    } catch (err) {
      console.log(err)
    }
  }
}

export const AuthorList = () => {
  return async (dispatch) => {
    const res = await axios.get('/author')
    try {
      dispatch(AuthorData(res.data.userinfo))
      return res.data.userinfo
    } catch (err) {
      console.log(err)
    }
  }
}
