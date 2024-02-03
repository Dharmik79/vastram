export default function appReducer(state, action) {
  switch (action.type) {
    case 'STORE':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGIN':
      return {
        ...state,
        login: action.payload,
      };
    case 'STORE_COUNT':
      return {
        ...state,
        countData: action.payload,
      };

    case 'ROLE':
      return {
        ...state,
        role: action.payload,
      };

    case 'MASTER':
      return {
        ...state,
        master: action.payload,
      };

    case 'IMAGE':
      return {
        ...state,
        image: action.payload,
      };

    case 'RESET':
      return {
        ...state,
        login: {},
        user: {},
        master: {},
        role: undefined,
        image: '',
        countData: {},
      };

    default:
      return state;
  }
}
