import { createContext, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { RouterProvider } from "react-router-dom";
import { rotuer } from "./components/router/router";

export const userContext = createContext();

function App() {
  const [id, setId] = useState(sessionStorage.getItem("user") || false);
  const [dataU, setDatau] = useState({});
  return (
    <>
      {id ? (
        <userContext.Provider value={{ dataU, setDatau }}>
          <RouterProvider router={rotuer} />
        </userContext.Provider>
      ) : (
        <Login id={id} setId={setId} />
      )}
    </>
  );
}

export default App;
