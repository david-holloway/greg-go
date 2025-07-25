// Action Types
const ADD_GREG_USER = 'ADD_GREG_USER';
const SET_GREG_USERS = 'SET_GREG_USERS'; // replacing the entire users array (after fetching from the API).
const SET_CURRENT_USER = 'SET_CURRENT_USER';

// Action Creators
export const addGregUser = (user) => ({
  type: ADD_GREG_USER,
  payload: user,
});

export const setGregUsers = (users) => ({
  type: SET_GREG_USERS,
  payload: users,
});

// Initial State
const initialState = {
  users: [], // Array of { uniqueID, location, description, photoFilePath }
  currentUser: null, // The user currently being edited or viewed
};

// Reducer - handles actions to update the state
export default function gregUserReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GREG_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case SET_GREG_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}
