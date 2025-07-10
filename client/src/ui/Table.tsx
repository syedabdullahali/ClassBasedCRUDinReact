import { Component, ReactNode } from "react";

export interface Column<T> {
  headerName: string;
  accessor: keyof T;
  render?: (row: T) => ReactNode;
}


 interface TabelProps<T>{
    data:T[],
    // columns:Column[], //not T[]
    columns: Column<T>[];   // Strongly typed!
    mutation?:boolean 
 } 

class Table<T> extends Component<TabelProps<T>> {
  render() {
    const { data, columns, mutation } = this.props;
    return (
      <table>
        <thead>
          {columns.map((el) => (
            <th>{el.headerName}</th>
          ))}
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((col) => (
                <td>
                    {col.render ? col.render(row) : String(row[col.accessor])}
                </td>
              ))}
              {mutation && (
                <td>
                  <button
                  //  onClick={()=>handaleUpdate(el)}
                  >
                    Edit
                  </button>
                  <button
                  // onClick={()=>handaledeleteuserData(el._id)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
