import axios from 'axios';

class Api {
  constructor(uri) {
    this.api = axios.create({
      baseURL: uri,
    });
  }

  getAll = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await this.api.get('/todos', config);
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  updateTodo = async (id, update, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await this.api.put(`/todos/${id}`, update, config);
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  signUp = async (user) => {
    try {
      const { data } = await this.api.post('/auth/signup', user);
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  login = async (user) => {
    try {
      const { data } = await this.api.post('/auth/login', user);
      return data;
    } catch (error) {
      throw error.response;
    }
  };
}

export default new Api('https://lab-todos-api.herokuapp.com/');
