const axios = require('axios');
import {
  base_uri,
  api_version
} from '../../config';
import { serialise } from './utils';

export default {
  list: async (resource, data) => {
    const query = serialise(data);
    return await axios.get(`${base_uri}${api_version}${resource}?${query}`)
      .then(({ data }) => data)
      .catch(() => {
        alert(`failed to retrieve ${resource}, and please try again later.`);
        // handle error code 400, 401, 403, 404, 500 properly
        return { data: [] };
      });
  }
};