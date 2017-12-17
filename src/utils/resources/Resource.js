import HttpClient from '../http'
import StorageManager from '../storage'

export default class Resource{

  constructor(endpoint) {
    this.token = StorageManager.get('token')
    HttpClient.setToken(this.token)
    this.endpoint = endpoint
  }

  query (data={}){
    return HttpClient.get(this.endpoint, {params: data})
  }

  post (data){
    return HttpClient.post(this.endpoint, data)
  }

  get (id){
    return HttpClient.get(this.withId(id))
  }

  put (id, data){
    return HttpClient.put(this.withId(id), data)
  }

  patch (id, data){
    return HttpClient.patch(this.withId(id), data)
  }

  delete (id){
    return HttpClient.delete(this.withId(id))
  }

  withId (id){
    return `${this.endpoint}${id}/`
  }
}
