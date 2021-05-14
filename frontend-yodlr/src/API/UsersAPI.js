import axios from "axios";

const BASE_URL =  "http://localhost:3000/users";

class UsersAPI {

  // Endpoints for "/users"
  static async getAllUsers() {
    const res = await axios.get(BASE_URL);
    return res.data;
  }

  static async registerUser(data) {
    const res = await axios.post(BASE_URL, data)
    return res.data;
  }

  // Endpoints for "/users/:id"
  static async getUser(id) {
    const res = await axios.get(`${BASE_URL}/${id}`)
    return res.data;
  }

  static async updateUser(id) {
    const res = await axios.patch(`${BASE_URL}/${id}`)
    return res.data
  }

  static async deleteUser(id) {
    await axios.delete(`${BASE_URL}/${id}`)
  }
}

export default UsersAPI