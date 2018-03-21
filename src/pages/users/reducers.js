const initState = {
  users: [],
};

function userReducers(state = initState, { type, payload }) {
  switch(type) {
    case 'LOAD_DATA_SUCCESS': {
      return Object.assign({}, state, { users: payload });
    }
    default:
      return state;
  }
}

const reducers = {};
reducers['users'] = userReducers;
export default reducers;
