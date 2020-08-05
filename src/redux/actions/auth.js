import axios from 'axios';

export let login = (data) => ({
  type: 'LOGIN',
  payload: axios({
    method: 'POST',
    url: `${data.url}login`,
    data: {
      email: data.email,
      password: data.password,
    },
  }),
});

export let register = (formdata, url) => ({
  type: 'REGISTER',
  payload: axios({
    method: 'POST',
    url: `${url}register`,
    data: formdata,
  }),
});

export let getUser = (data) => ({
  type: 'GETUSER',
  payload: axios({
    method: 'GET',
    url: `${data.url}getUsers${data.params}`,
  }),
});

export let logout = () => {
  return {
    type: 'LOGOUT',
  };
};
