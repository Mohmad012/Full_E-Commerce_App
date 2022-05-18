import { Switch, Route } from "react-router-dom";

import Success from "./Success"
import Pay from "./Pay"


const App = () => {

  return (
    
      <Switch>
        <Route path="/success" component={Success} />
        <Route path="/pay" component={Pay} />
      </Switch>
  );
}

export default App;