import { Component } from "react";
import { UserFetchApi } from "../type/crud";
import Table from "../ui/Table";
import { User } from "../type/crud";
interface Props{
    result:UserFetchApi
}

class ClassComponent extends Component<Props>{
    render() {
         interface Column<T> {
         headerName: string;
         accessor: keyof T;
   }
        
       const columnData: Column<User>[] = [
      { headerName: "Name", accessor: "name" },
      { headerName: "Email", accessor: "email" },
      { headerName: "City", accessor: "city" },
    ];
    const {data,getDataofUser,status} = this.props.result;
    return <Table<User> columns={columnData} data={data.data}/>
    }
}
export default ClassComponent

