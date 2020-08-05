const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let AddFriend = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDFRIEND_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'ADDFRIEND_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected',
      };
    case 'ADDFRIEND_FULFILLED':
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

export default AddFriend;
