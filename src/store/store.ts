import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from "react-redux"

import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {}
})

type State = ReturnType<typeof store.getState>
type Dispatch = typeof store.dispatch

export const useStoreDispatch: () => Dispatch = useDispatch
export const useStoreSelector: TypedUseSelectorHook<State> = useSelector
