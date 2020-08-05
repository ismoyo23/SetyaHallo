const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let Messanger = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSANGER_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'MESSANGER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected',
      };
    case 'MESSANGERFULFILLED':
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

export default Messanger;
