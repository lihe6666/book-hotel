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
            `/assets/images/qrcode.png`
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
