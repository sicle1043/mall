import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000
  })

  // instance.interceptors.request.use(aaa => {
  //   console.log(aaa)
  //   return aaa
  // }, err => {
  //   console.log(err);
  //   return err
  // })

  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      return err
    }
  )

  return instance(config)
}
