import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { commonReducer } from './slices/common'

const combinedReducer = combineReducers({
  common: commonReducer,
})

// @ts-expect-error: Unreachable code error
const rootReducer = (state, action) => {
  // Если запрос начать новую сессию, обнуляем весь стор
  if (action.type === 'app/updateSession') {
    state = undefined
  }

  return combinedReducer(state, action)
}
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })

export const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
