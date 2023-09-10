// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  let  time = (new Date()).getTime()

  let r = await cloud.database().collection('order')
    .add({
      data: Object.assign(event, {
        realCost:  0,
        paymentStatus: 0,
        _createTime: time,
        _updateTime: time
      })
    })

  return {
    code: r._id ?0 : -1,
    msg: 'insert:ok',
    data: r
  }
}