/* eslint-disable no-unused-vars */
import httpInstance from "@/utils/http"

export function getCategory() {
  return httpInstance({
    url: '/home/category/head'
  })
}