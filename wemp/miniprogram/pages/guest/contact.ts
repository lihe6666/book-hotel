// pages/contact.ts
Page({

    /**
     * Page initial data
     */
    data: {
        name: '',
        date: '',
        cost: '',
        remark: ''
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
    onSaveAction: function () {
        console.log(this.data)

        wx.redirectTo({
            url: `/pages/user/index`
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
    }
})