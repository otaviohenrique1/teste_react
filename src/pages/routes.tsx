import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { HooksExemplos } from "./hooks_exemplos/HooksExemplos";
import { UseCallbackExemplo } from "./hooks_exemplos/UseCallbackExemplo";
import { UseContextExemplo } from "./hooks_exemplos/UseContextExemplo";
import { UseDebugValueExemplo } from "./hooks_exemplos/UseDebugValueExemplo";
import { UseEffectExemplo } from "./hooks_exemplos/UseEffectExemplo";
import { UseImperativeHandleExemplo } from "./hooks_exemplos/UseImperativeHandleExemplo";
import { UseLayoutEffectExemplo } from "./hooks_exemplos/UseLayoutEffectExemplo";
import { UseMemoExemplo } from "./hooks_exemplos/UseMemoExemplo";
import { UseReducerExemplo } from "./hooks_exemplos/UseReducerExemplo";
import { UseRefExemplo } from "./hooks_exemplos/UseRefExemplo";
import { UseStateExemplo } from "./hooks_exemplos/UseStateExemplo";
import { TesteApi } from "./TesteApiPage";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/teste_api' component={TesteApi} />
        <Route exact path='/hooks_exemplos' component={HooksExemplos} />
        <Route exact path='/hooks_exemplos/use_state_exemplo' component={UseStateExemplo} />
        <Route exact path='/hooks_exemplos/use_reducer_exemplo' component={UseReducerExemplo} />
        <Route exact path='/hooks_exemplos/use_effect_exemplo' component={UseEffectExemplo} />
        <Route exact path='/hooks_exemplos/use_context_exemplo' component={UseContextExemplo} />
        <Route exact path='/hooks_exemplos/use_ref_exemplo' component={UseRefExemplo} />
        <Route exact path='/hooks_exemplos/use_memo_exemplo' component={UseMemoExemplo} />
        <Route exact path='/hooks_exemplos/use_debug_value_exemplo' component={UseDebugValueExemplo} />
        <Route exact path='/hooks_exemplos/use_callback_exemplo' component={UseCallbackExemplo} />
        <Route exact path='/hooks_exemplos/use_imperative_handle_exemplo' component={UseImperativeHandleExemplo} />
        <Route exact path='/hooks_exemplos/use_layout_effect_exemplo' component={UseLayoutEffectExemplo} />
      </Switch>
    </BrowserRouter>
  );
}
