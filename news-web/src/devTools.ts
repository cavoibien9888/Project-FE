// devTools.ts
export const composeWithDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
