import { AllRoutes } from "./AllRoutes/AllRoutes";
import "./App.css";
import MyContextProvider from "./ContextApi/MyContext";
import { InputForm } from "./components/InputForm";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <MyContextProvider>
        <Nav />
        <AllRoutes />
      </MyContextProvider>
    </>
  );
}

export default App;
