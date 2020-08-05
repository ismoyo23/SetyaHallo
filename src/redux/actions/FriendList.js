import axios from 'axios';

export let FriendList = (data) => ({
  type: 'FRIEND',
  payload: axios({
    method: 'GET',
    url: `${data.url}Friends/${data.params}${data.field}`,
    data: {
      email: data.email,
      password: data.password,
    },
  }),
});

export let addFriend = (data) => ({
  type: 'ADDFRIEND',
  payload: axios({
    method: 'POST',
    url: `${data.url}Friends`,
    data: {
      id_receiver: data.id_receiver,
      id_sender: data.id_sender,
    },
  }),
});
