import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import "./app.css";

const Profile = ({ users }) => {
  const { userId } = useParams();

  const user = users.find((user) => user.id === Number(userId));

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.favouriteColor}</h3>
      <Link to="/">back home</Link>
    </div>
  );
};

const Home = (props) => (
  <div>
    <h1>List of users</h1>
    <div>
      {props.users.map((user) => (
        <Link key={user.id} to={`/${user.id}`}>
          <div>{user.name}</div>
        </Link>
      ))}
    </div>
  </div>
);
export default class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/api/users")
      .then((res) => res.json())
      .then(({ users }) => this.setState({ users }));
  }

  render() {
    const { users } = this.state;

    if (!this.state.users.length) {
      return <div>Loading...</div>;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:userId">
            <Profile users={users} />
          </Route>
          <Route path="/">
            <Home users={users} exact />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
