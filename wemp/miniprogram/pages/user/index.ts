// pages/user/index.ts
Component({
    /**
     * Component properties
     */
    properties: {

    },

    /**
     * Component initial data
     */
    data: {

    },

    /**
     * Component methods
     */
    methods: {
      preview: function () {
        wx.previewImage({
          urls: [
            `https://6465-development-6gumjk8e3468aae4-1320155885.tcb.qcloud.la/WechatIMG31.jpg?sign=860460a0b1095b71365c95fe6c07460c&t=1694245802`
          ]
        })
      },

      home: function() {
        wx.reLaunch({
          url: `/pages/index/index`
        })
      }
    }
})
