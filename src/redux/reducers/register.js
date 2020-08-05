const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: {},
};

let register = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected',
      };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data[0],
      };
    default: {
      return state;
    }
  }
};

export default register;
