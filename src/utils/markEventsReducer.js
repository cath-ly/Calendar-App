export default function markEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];

    case "update":
      return state.map((event) => (event.id === payload.id ? payload : event));

    case "delete":
      return state.filter((event) => event.id !== payload.id);

    default:
      throw new Error();
  }
}
