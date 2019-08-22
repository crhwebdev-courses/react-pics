//create a customized version of axios with a set URL and header
import axios from 'axios';
import config from './.config.js';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${config.unsplash_api_key}`
  }
});
