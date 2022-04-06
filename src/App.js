import "./App.css";
import { Header } from "./Components/Header/Header";
import { PageRoutes } from "./Routes/PageRoutes";

const App = () =>{
  return (
    <div className="App">
      <Header/>
      <PageRoutes/>
    </div>
  );
}

export default App;
