import axios from 'axios';

export let History = (data) => ({
  type: 'HISTORY',
  payload: axios({
    method: 'GET',
    url: `${data.url}History/${data.params}`,
  }),
});
