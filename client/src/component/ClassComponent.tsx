import React, { Component } from "react";
import Table from "../ui/Table";
import { User, UserFetchApi } from "../type/crud";

interface Props {
  result: UserFetchApi;
}

interface Column<T> {
  headerName: string;
  accessor: keyof T;
}

type State = {
  users: User[];
  status: "idle" | "loading" | "success" | "error";
  count: number;
};

class ClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    // 🔧 Mounting Phase: constructor
    // Called once when the component is created.
    // Best place to initialize `state` and bind methods.
    super(props);
    console.log("🔧 constructor: called once before component mounts");

    this.state = {
      users: [],
      status: "idle",
      count: 0,
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // 📥 Called on every render (both mount and update)
    // Use to derive state from props.
    // Rarely needed. Avoid setting state here unless necessary.
    console.log("📥 getDerivedStateFromProps");
    return null;
  }

  componentDidMount(): void {
    // ✅ Mounting Phase: componentDidMount
    // Called once, right after the component is added to the DOM.
    // Ideal for API calls, subscriptions, etc.
    console.log("✅ componentDidMount: component is now in the DOM");
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    // 🔍 Updating Phase: shouldComponentUpdate
    // Use this to prevent unnecessary renders.
    // Return false to skip re-render.
    console.log("🔍 shouldComponentUpdate");
    return true; // default is true
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    // 📸 Called right before DOM updates
    // Used to capture scroll positions, etc., before DOM changes
    console.log("📸 getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: any) {
    // 🔁 Updating Phase: componentDidUpdate
    // Called after every re-render caused by state or props change
    console.log("🔁 componentDidUpdate");
  }

  componentWillUnmount(): void {
    // 🧹 Unmounting Phase: componentWillUnmount
    // Called once, just before the component is removed from the DOM
    // Ideal for cleanup: timers, subscriptions, event listeners
    console.log(
      "🧹 componentWillUnmount: cleanup before component is removed from DOM"
    );

    // ⚠️ NOTE:
    // In dev, React Fast Refresh (HMR) may unmount/remount your component automatically,
    // causing this to run on every save/hot update. This is expected during development.
  }

  render() {
    // 🎨 Called during Mounting and Updating
    // Should return JSX — it must be a pure function (no side effects).
    console.log(
      `[DEBUG] 🎨 render() at ${new Date().toLocaleTimeString()}`
    );

    const columnData: Column<User>[] = [
      { headerName: "Name", accessor: "name" },
      { headerName: "Email", accessor: "email" },
      { headerName: "City", accessor: "city" },
    ];

    const { data } = this.props.result;

    return (
      <div>
        <h2>React Lifecycle Demo (Class Component)</h2>
        <Table<User> columns={columnData} data={data.data} />
      </div>
    );
  }
}

export default ClassComponent;
