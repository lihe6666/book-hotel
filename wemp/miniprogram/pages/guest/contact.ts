// pages/contact.ts
Page({
  /**
   * Page initial data
   */
  data: {
    name: '',
    cost: '',
    remark: '',
    autosize: {
      maxHeight: 120,
      minHeight: 20,
    },
    isDateVisible: false,
    date: (new Date()).getTime(), // 支持时间戳传入
    dateText: '',
    // 指定选择区间起始值
    start: (new Date()).getTime(),
    end: '2099-01-01',
    arrCostList: [
      { label: '799.00元', value: '799.00' },
      { label: '899.00元', value: '899.00' },
      { label: '999.00元', value: '999.00' }
    ],
    isCostVisible: false
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
  isVerifyForm: function (): boolean {
    return true
  },
  onSaveAction: function () {
    let bool = this.isVerifyForm()

    wx.cloud.callFunction({
      name: 'doCreateOrder',
      data: {
        name: this.data.name,
        date: this.data.dateText,
        cost: this.data.cost,
        remark: this.data.remark
      }
    }).then((response) => {
      let result: any = response.result
      if (result.code == 0) {
        wx.redirectTo({
          url: `/pages/user/index`
        })
      }
    })
  },
  onInputAction: function (e: any) {
    let keys = ['name', 'date', 'cost', 'remark']

    let dataset = e.target.dataset
    let value = e.detail.value

    for (let i in keys) {
      if (dataset.key == keys[i]) {
        this.setData({
          [keys[i]]: value
        })
      }
    }
  },

  onShowDatePicker() {
    this.setData({
      isDateVisible: true,
    });
  },
  onHideDatePicker() {
    this.setData({
      isDateVisible: false,
    });
  },
  onConfirm(e: any) {
    const { value } = e.detail;
    const mode = 'date'

    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });

    this.onHideDatePicker();
  },

  onColumnChange(e: any) {
    console.log('pick', e.detail.value);
  },

  onShowCostPicker() {
    this.setData({
      isCostVisible: true
    })
  },
  onCostPickerChange(e: any) {
    const { value } = e.detail;

    this.setData({
      cost: value.join('')
    });
  }
})