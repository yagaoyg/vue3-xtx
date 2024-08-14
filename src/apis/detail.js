import httpInstance from "@/utils/http"

export const getDetailAPI = (id) => {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}

export const getHotAPI = ({ id, type, limit = 3 }) => {
  return httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}