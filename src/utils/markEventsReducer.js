export default function markEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];

    case "update":
      const updatedState = [];
      for (const event in state) {
        if (event.id === payload.id) {
          updatedState.push(payload);
        } else {
          updatedState.push(event);
        }
      }
      return updatedState;

    case "delete":
      const deletedState = [];
      //seems stupid, does a for loop to find the event itself, can we make this into a o(1) runtime
      for (const event in state) {
        if (event.id !== payload.id) {
          deletedState.push(event);
        }
      }
      return deletedState;

    default:
      throw new Error();
  }
}
