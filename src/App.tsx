import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
