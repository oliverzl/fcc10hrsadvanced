//reducer function
export const reducer = (state, action) => {
  //a function that manipulates the state after we call dispatch
  //REDUCER MUST ALWAYS RETURN A STATE

  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload]; //on ADD_ITEM, when handleSubmit(e) created a new user, we make a const newItem = an object.
    //we then add a property payload to ADD_ITEM dispatch, and set newItem to payLoad

    //over here, we create an array of the SPREAD of the people array, and add in action.payload to the array state.people, and then we return state to change people to newPeople.
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }

  if (action.type === "REMOVE_ALL") {
    return { ...state, people: [] };
  }

  throw new Error("no matching action type");
};
