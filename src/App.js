import "./App.css";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { data } from "./utils/data";

function App() {
  function getProduct(id) {
    return data.find((product) => {
      return data.id === id;
    });
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route
            path="/orderdetails"
            render={(routerProps) => (
              <OrderDetailsPage
                productId={routerProps.match.params.id}
                productDetails={getProduct(routerProps.match.params.id)}
              />
            )}
          />
          {/* <SignUp /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
