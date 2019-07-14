import axios from "axios";

export const userService = {
  getUserData
};

const API_URL =
  "https://40vk5u4d93.execute-api.ap-southeast-1.amazonaws.com/stage";

function getUserData() {
  return axios
    .get(API_URL)
    .then(res => {
      //console.log(res);
      return JSON.parse(res.data.body);
    })
    .catch(err => {
      console.log(err);
    });
} /* 
class UserService extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const url = `${API_URL}`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ users: JSON.parse(data.body) });
        console.log(JSON.parse(data.body));
      });
  }
  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>React Axios Example</h1>
          <p>{this.state.users.body}</p>
        </div>
      </div>
    );
  }
} */

//export default UserService;
