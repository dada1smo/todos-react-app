import { useEffect, useState } from 'react';
import Api from '../api/api.utils';
import Checkbox from '../components/Checkbox';
import Todo from '../components/Todo';
import { PrimaryButton } from '../styles/Button';
import { Card } from '../styles/Card';
import { Input } from '../styles/Input';
import { List, ListItem, ListItemTitle } from '../styles/List';
import { Spacer } from '../styles/Spacer';
import { Wrapper } from '../styles/Wrapper';

export default function Todos() {
  const [error, setError] = useState('');
  const [todosData, setTodosData] = useState([]);

  const token = localStorage.getItem('todos_token');

  const getAllTodos = async () => {
    try {
      const data = await Api.getAll(token);
      setTodosData(data);
    } catch (error) {
      setError(error.data.msg);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const onCheck = async (id, data) => {
    try {
      await Api.updateTodo(id, data, token);
    } catch (error) {
      setError(error.data.msg);
    } finally {
      getAllTodos();
    }
  };

  return (
    <Wrapper>
      <Card minWidth="40vw">
        <h1>Lista</h1>
        <Spacer vertical="16px" />
        {error && (
          <>
            <p>{error}</p>
            <Spacer vertical="16px" />
          </>
        )}
        <List>
          {todosData.map((todo) => {
            return (
              <Todo
                key={todo._id}
                todo={todo}
                onCheck={() =>
                  onCheck(todo._id, { ...todo, completed: !todo.completed })
                }
              />
            );
          })}
        </List>
      </Card>
    </Wrapper>
  );
}
