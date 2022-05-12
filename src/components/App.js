import { useState } from "react";
import "../styles/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./Todolist";
import Loginpage from "./Loginpage";

function App() {
  const adminuser = {
    email: "admin@admin.com",
    password: "admin123",
    id: 3244,
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = (detail) => {
    console.log(detail);

    if (
      detail.email === adminuser.email &&
      detail.password === adminuser.password
    ) {
      setUser({
        name: detail.name,
        email: detail.email,
        id: 3244,
      });
    } else {
      setError("Details do not match !!!");
    }
  };

  const logout = () => {
    console.log("logout");
    setUser({ name: "", email: "" });
  };
  return (
    <>
      {user.email !== "" ? (
        <>
          <Todolist user={user} logout={logout} />
        </>
      ) : (
        <Loginpage login={login} error={error} />
      )}
    </>
  );
}
export default App;
