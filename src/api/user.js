import request from '@/utils/request'
//注册接口
//查看后台接口文档
// https://apifox.com/apidoc/shared-26c67aee-0233-4d23-aab7-08448fdf95ff/api-93850058
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })
export const userLoginService = ({ username, password }) =>
  request.post('api/login', { username, password })

export const userGetInfoService = () => request.get('/my/userinfo')
export const userUpdateInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })
export const userUploadAvatarService = (avatar) =>
  request.patch('/my/update/avatar', { avatar })
export const userUpdatePassService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
