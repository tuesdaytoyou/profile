export default {
  getCloudUrl: function(url) {
    // const baseUrl = 'https://raw.githubusercontent.com/tuesdaytoyou/docs/main/'
    // https://docs-1310971385.cos.ap-shanghai.myqcloud.com/liluyun_portfolio/ai_card_arrow.png
    const baseUrl = 'https://docs-1310971385.cos.ap-shanghai.myqcloud.com/liluyun_portfolio/'
    return baseUrl + url
  }
}