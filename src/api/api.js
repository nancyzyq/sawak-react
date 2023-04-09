import axios from 'axios'

export class API {
    constructor(name) {
        this.name = name
    }
    async fetch (query) {
        let name = this.name
        let data = []
        if (query) {
            query = encodeQuery(query)
            data = await axios.get(`http://localhost:3001/api/${name}?${query}`)
            // data = await axios.get(`http://18.218.99.109/api/${name}?${query}`)
        } else {
            data = await axios.get(`http://localhost:3001/api/${name}`)
            // data = await axios.get(`http://18.218.99.109/api/${name}`)
        }
        // console.log(data)
        return data.data
    }
    async getById (query) {
        let name = this.name
        let data = []
        query = encodeQuery(query)
        data = await axios.get(`http://localhost:3001/api/${name}?${query}`)
        // data = await axios.get(`http://18.218.99.109/api/${name}?${query}`)
        return data.data
    }
    async update (data) {
        // console.log(data)
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        let config = {
            headers: {
              'Authorization': 'Bearer ' + user.token
            }
        }
        let name = this.name
        let re = await axios.put(`http://localhost:3001/api/${name}`, data, config)
        // let re = await axios.post(`http://18.218.99.109/api/${name}`, data, config)
        return re.data
    }
    async create (data) {
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        let config = {
            headers: {
              'Authorization': 'Bearer ' + user.token
            }
        }
        let name = this.name
        let re = await axios.post(`http://localhost:3001/api/${name}`, data, config)
        // let re = await axios.put(`http://18.218.99.109/api/${name}`, data, config)
        return re.data
    }
    async delete (query) {
        let name = this.name
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        let config = {
            headers: {
              'Authorization': 'Bearer ' + user.token
            }
        }
        query = encodeQuery(query)
        let re = await axios.delete(`http://localhost:3001/api/${name}?${query}`, config)
        // let re = await axios.delete(`http://18.218.99.109/api/${name}?${query}`, config)
        return re.data
    }
    async uploadFile (data) {
        let config = {
            header: {
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',    
                'Access-Control-Allow-Headers': 'Content-Type, Origin, Authorization'
            }
        }
        // let re = await axios.post(`http://localhost:3000/api/upload`, data)
        let re = await axios.post(`http://18.218.99.109/api/upload`, data, config)
        // let re = await axios.post(`http://18.218.99.109/api/upload`, {data: 'data'})
        return re.data
    }
    async deleteFile (name) {
        // let re = await axios.post(`http://localhost:3000/api/delete`, {name: name})
        let re = await axios.post(`http://18.218.99.109/api/delete`, {name: name})
        return re.data
    }
}

const encodeQuery = (query) => {
    let ret = []
    for (let q in query) {
      ret.push(encodeURIComponent(q) + '=' + encodeURIComponent(query[q]))
    }
    return ret.join('&')
  }
