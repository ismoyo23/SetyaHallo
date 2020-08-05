const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let FriendList = (state = initialState, action) => {
  switch (action.type) {
    case 'FRIEND_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FRIEND_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected',
      };
    case 'FRIEND_FULFILLED':
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

export default FriendList;
