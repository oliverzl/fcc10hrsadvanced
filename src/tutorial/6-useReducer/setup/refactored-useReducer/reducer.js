//refactoring the reducer function further to take in switch values instead

//the reducer function takes in the state, and action as arguments
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      //the ...state.list takes the list array from the list property declared in the defaultState object.
      const newList = [...state.list, action.payload];
      return {
        //we need to return the spread object, then the variables to change.
        ...state,
        list: newList,
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
      const updatedList = state.list.filter(
        (person) => person.id !== action.payload
      );

      return {
        ...state,
        list: updatedList,
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
