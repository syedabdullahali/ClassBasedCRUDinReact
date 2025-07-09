import ClassComponent from "./component/ClassComponent";
import FunctionComponent from "./component/FunctionComponent";

const App = ()=> {
  return (
    <div>
      <h2>ClassComponent</h2>
      <ClassComponent />
      <h2>FunctionComponent</h2>
      <FunctionComponent />
    </div>
  );
};

export default App;
