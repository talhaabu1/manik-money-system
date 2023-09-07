import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { RouterProvider } from "react-router-dom";
import { rotuer } from "./components/router/router";

function App() {
  const [id, setId] = useState(sessionStorage.getItem("user") || false);

  return (
    <>
      {id ? (
        <RouterProvider router={rotuer} />
      ) : (
        <Login id={id} setId={setId} />
      )}
    </>
  );
}

export default App;
