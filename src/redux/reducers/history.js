const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let History = (state = initialState, action) => {
  switch (action.type) {
    case 'HISTORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'HISTORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected',
      };
    case 'HISTORY_FULFILLED':
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

export default History;
