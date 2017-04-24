import axios from 'axios';

const API = axios.create({
  baseURL: 'http://gamabetaalpha.com/clients/react-demo/',
  //baseURL: 'http://localhost:3000/',
  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'test',
		'X-Test': 'testing'
	}
});

export default API;
