
const initialState = {
    NewsFeed: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case 'GET_NEWS':
          return {...state, NewsFeed: action.json };
       default:
          return state;
     }
  };
  export default reducer;
  