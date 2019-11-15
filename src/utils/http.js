let Fly=require("flyio/dist/npm/wx") 
let fly=new Fly

export default {
  get: (url, param = {}) => {
    return new Promise((resolve, reject) => {
      fly.get(url,param)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
