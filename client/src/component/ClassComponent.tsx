import { Component } from "react";
import { UserFetchApi } from "../type/crud";
interface Props{
    result:UserFetchApi
}

class ClassComponent extends Component<Props>{
    render() {
        return <h2>Hello World</h2>
    }
}
export default ClassComponent

