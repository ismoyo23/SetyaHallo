import axios from 'axios';

export let MessangerList = (data) => ({
  type: 'MESSANGER',
  payload: axios({
    method: 'GET',
    url: `${data.url}Message${data.params}`,
  }),
});
