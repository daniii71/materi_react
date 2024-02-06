import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarCom from "./components/navbar";
// import Map from "./components/Map";
import Home from "./page/Home";
// import Profile from "./page/profile";
// import TesJson from "./page/json";
import TesData from "./page/Data";
import Catatan from "./page/Catatan";

function App() {
  return (
    <>
      <NavbarCom />
      <BrowserRouter>
        {/* <TesJson /> */}
        <TesData />
        <Catatan />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/profile/user" component={Profile} exact /> */}
            <Route path="/home" component={Home} exact />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
