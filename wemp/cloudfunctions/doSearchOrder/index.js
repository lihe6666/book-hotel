// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
let db = cloud.database()
// 云函数入口函数
exports.main = async (event, _) => {

  let r = await cloud.database().collection('order')
    .where(db.command.or([
      {
        mobile: db.RegExp({
          regexp: event.value,
          options: 'i'
        })
      },
      {
        name: db.RegExp({
          regexp: event.value,
          options: 'i'
        })
      }
    ])).get()

  r.data.map((v, i, arr) => {
    v.paymentText = (v.paymentStatus == 1 ? '已付款': '未付款')
    v.created_at = (new  Date(v._createTime).toLocaleString())
    v.updated_at = (new Date(v._updateTime).toLocaleString())
  })

  return r
}