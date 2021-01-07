const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newPeople = [...state.people, action.payload];
      return {
        //we need to return the spread object, then the variables to change.
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "Item Added",
      };

    case "NO_VALUE":
      return {
        ...state,

        isModalOpen: true,
        modalContent: "please enter value",
      };

    case "REMOVE_ITEM":
      const updatedPeople = state.people.filter(
        (person) => person.id !== action.payload
      );

      return {
        ...state,
        people: updatedPeople,
        isModalOpen: true,
        modalContent: "item removed",
      };

    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };

    default:
      throw new Error("no matching action type");
  }

  //from reducer, we always want to return some kind of state. if we dont return, none of the functionality below will make sense.
};

export default reducer;
