import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 7OGXnn7U2rK3KeHmxXVf2yJpkoPWuMo51LdGRgNL3JQ'
  }
})