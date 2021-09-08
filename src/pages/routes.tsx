import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { HooksExemplos } from "./hooks_exemplos/HooksExemplos";
import { UseEffectExemplo } from "./hooks_exemplos/UseEffectExemplo";
import { UseReducerExemplo } from "./hooks_exemplos/UseReducerExemplo";
import { UseStateExemplo } from "./hooks_exemplos/UseStateExemplo";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/hooks_exemplos' component={HooksExemplos} />
        <Route exact path='/hooks_exemplos/use_state_exemplo' component={UseStateExemplo} />
        <Route exact path='/hooks_exemplos/use_reducer_exemplo' component={UseReducerExemplo} />
        <Route exact path='/hooks_exemplos/use_effect_exemplo' component={UseEffectExemplo} />
      </Switch>
    </BrowserRouter>
  );
}