import httpInstance from "@/utils/http"

// 获取banner图片

// 自定义banner内容
const bannerList =
  [
    {
      id: "1",
      imgUrl: "/images/banner/服装专场.png",
      hrefUrl: "/category/1010000",
      type: "1"
    },
    {
      id: "2",
      imgUrl: "/images/banner/个护专场.png",
      hrefUrl: "/category/1013001",
      type: "1"
    },
    {
      id: "3",
      imgUrl: "/images/banner/居家专场.png",
      hrefUrl: "/category/1005000",
      type: "1"
    },
    {
      id: "4",
      imgUrl: "/images/banner/美食专场.png",
      hrefUrl: "/category/1005002",
      type: "1"
    },
    {
      id: "5",
      imgUrl: "/images/banner/母婴专场.png",
      hrefUrl: "/category/1011000",
      type: "1"
    },
  ]

export function getBannerAPI() {
  // 默认为1 分类下为2
  // const { distributionSite = '1' } = params
  return bannerList
}

export function getNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

export function getHotAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}

export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}