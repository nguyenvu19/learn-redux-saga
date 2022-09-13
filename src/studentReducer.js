import * as actions from "./actions";

const initialState = {
  student: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.action: {
      console.log("action 1");
      return state;
    }

    case actions.action2: {
      console.log("action2");
      return state;
    }

    default:
      return state;
  }
};

export default studentReducer;
