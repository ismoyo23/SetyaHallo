const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let searchFriend = (state = initialState, action) => {
  switch (action.type) {
    case 'GETUSER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GETUSER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected',
      };
    case 'GETUSER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    default: {
      return state;
    }
  }
};

export default searchFriend;
