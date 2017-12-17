import axios from 'axios'

class HttpClient {

  constructor() {
    this.client = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/v1/'
    })
  }

  get (url, data) {
    return this.client.get(url, data)
  }

  post (url, data) {
    return this.client.post(url, data)
  }

  put (url, data) {
    return this.client.put(url, data)
  }

  patch (url, data) {
    return this.client.patch(url, data)
  }

  delete (url, data) {
    return this.client.delete(url, data)
  }

  setToken (token) {
    this.client.defaults.headers.common['Authorization'] = token
  }
}

export default new HttpClient();
