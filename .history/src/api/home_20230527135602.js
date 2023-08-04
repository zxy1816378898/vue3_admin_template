import request from '@/utils/request';

//获取XXX大数据的城市及下属县区的 wtsddm及jgid （默认获取2级）
export function getWtsdList(query) {
  return request({
    url: '/getHaJg',
    method: 'get',
    params: query,
  });
}
