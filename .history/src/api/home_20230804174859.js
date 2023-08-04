import request from '@/utils/request';

//获取用户信息
export function getInfo(query) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: query,
  });
}
