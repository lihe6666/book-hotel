// pages/order/index.ts
Page({

  /**
   * Page initial data
   */
  data: {
    text: '',
    hasSearchReply: false,
    pSearchReply: <any>[],
    current: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  },
  onInputChange: function (v: any) {
    let { value } = v.detail

    if (value == "") {
      this.setData({
        hasSearchReply: false
      })

      return ;
    }

    wx.cloud.callFunction({
      name: 'doSearchOrder',
      data: {
        value: value
      },
    }).then((response: any) => {
      let { data } = response.result

      if (data.length) {
        this.setData({
          hasSearchReply: true,
          pSearchReply: data
        })
      }
    })
  },
  onInputClean: function () {
    this.setData({
      hasSearchReply: false
    })
  },
  onSelectedSearch: function (e: any) {
    let { key } = e.target.dataset

    this.setData({
      hasSearchReply: false,
      current: this.data.pSearchReply[key],
      text: this.data.pSearchReply[key].mobile
    })

    console.log(this.data.current)
  }
})