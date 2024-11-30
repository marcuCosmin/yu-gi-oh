import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store/store"

import "./index.css"

import { App } from "./App.tsx"

const rootElement = document.getElementById("root")!

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>
)
