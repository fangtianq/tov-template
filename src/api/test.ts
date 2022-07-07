import { useRequest } from 'vue-request'
import axios from 'axios';

const post = () => {
  return axios.post('api/post', {
    params: {
    },
  });
};
export const api_testRequest = () => {
	return useRequest(post)
}
