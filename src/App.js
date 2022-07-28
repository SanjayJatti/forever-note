import "./App.css";
import { Header } from "./Components/Header/Header";
import { PageRoutes } from "./Routes/PageRoutes";
import { Toaster } from "react-hot-toast";
const App = () =>{
  return (
    <div className="App">
      <Header/>
      <PageRoutes/>
      <Toaster   toastOptions={{
    style: {
      backgroundColor: "#343a40",
      color: "white"
    },
  }}/>
    </div>
  );
}

export default App;
