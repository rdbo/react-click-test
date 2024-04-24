import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import ClickTest from "./components/ClickTest";

function App() {
  return (
    <>
      <h1 className="font-bold text-2xl">Hello World</h1>
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              path="/clicktest/:secs"
              render={(props: any) => {
                let timeSecs = Number(props.match.params.secs);
                console.log(timeSecs);
                if (!timeSecs || timeSecs < 0) {
                  timeSecs = 5;
                }
                return (
                  <ClickTest
                    timeSecs={timeSecs}
                    onFinish={(cps) => alert(`Your CPS is: ${cps}`)}
                  />
                );
              }}
            />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
