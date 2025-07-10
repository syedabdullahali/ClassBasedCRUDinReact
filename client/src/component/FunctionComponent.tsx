import { ChangeEvent, useEffect, useState } from "react";
import {
  useHookGetData,
  useHookDeleteData,
  useHookPostData,
  useHookUpdateData,
} from "../services/crud";
import { User, UserFetchApi } from "../type/crud";

function FunctionComponent() {
  // 🧠 useState is the Function Component equivalent of this.state in class components
  const userObj = { name: "", email: "", city: "" };
  const [form, setForm] = useState({ ...userObj });
  const [isEditId, setEditId] = useState("");

  // 🧠 Custom hooks managing API data (similar to componentDidMount + data logic)
  const result: UserFetchApi = useHookGetData();
  const { status, data, getDataofUser } = result;

  const { deleteDataofUser } = useHookDeleteData();
  const { createDataofUser } = useHookPostData();
  const { updateDataofUser } = useHookUpdateData();

  // 🔄 useEffect = lifecycle in functional components
  // ✅ Runs once when component is mounted (like componentDidMount)
  useEffect(() => {
    console.log("✅ useEffect → acts like componentDidMount");
    getDataofUser();

    return () => {
      // 🧹 Cleanup function = componentWillUnmount
      console.log("🧹 Cleanup → acts like componentWillUnmount");
    };
  }, []); // [] = only once (mount + unmount)

  const handleDeleteUserData = async (id: string) => {
    try {
      await deleteDataofUser(id);
      getDataofUser();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateUserData = async () => {
    try {
      console.log("Editing ID →", isEditId);
      await updateDataofUser(isEditId, form);
      setForm({ ...userObj });
      setEditId("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveUserData = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isEditId) {
        await handleUpdateUserData();
      } else {
        await createDataofUser(form);
      }
      getDataofUser();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (obj: User) => {
    setEditId(obj._id);
    setForm({ name: obj.name, email: obj.email, city: obj.city });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container">
      <form className="input-box" onSubmit={handleSaveUserData}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
        />

        {isEditId ? (
          <>
            <button type="submit">Update User</button>
            <button
              type="button"
              onClick={() => {
                setForm({ ...userObj });
                setEditId("");
              }}
            >
              Reset Update
            </button>
          </>
        ) : (
          <button type="submit">Create User</button>
        )}
      </form>

      <div className="center-dev">
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {status &&
              data.data.map((el: User) => (
                <tr key={el._id}>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.city}</td>
                  <td>{new Date(el.createdAt).toLocaleString()}</td>
                  <td>
                    <button onClick={() => handleUpdate(el)}>Edit</button>
                    <button onClick={() => handleDeleteUserData(el._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FunctionComponent;
