import {request} from "./request";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeBeauty(){
  return request({
    url:'/home/beauty'
  })
}

export function getHomePop1(){
  return request({
    url:'/home/pop1'
  })
}

export function getHomeNew1(){
  return request({
    url:'/home/new1'
  })
}

export function getHomeSell1(){
  return request({
    url:'/home/Sell1'
  })
}
