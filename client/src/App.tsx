import ClassComponent from "./component/ClassComponent";
import FunctionComponent from "./component/FunctionComponent";
import HookWrapper from "./wrapper/HookWrapper";

const App = ()=> {
  return (
    <div>
      <h2>ClassComponent</h2>
      <HookWrapper Component={ClassComponent}/>
      <h2>FunctionComponent</h2>
      <HookWrapper Component={FunctionComponent}/>
    </div>
  );
};

export default App;
