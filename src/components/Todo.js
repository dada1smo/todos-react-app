import { useState } from 'react';
import { ListItem, ListItemTitle } from '../styles/List';
import Checkbox from './Checkbox';

export default function Todo({ todo, onCheck, onDelete }) {
  return (
    <ListItem key={todo._id}>
      <Checkbox
        completed={todo.completed}
        onCheck={() =>
          onCheck(todo._id, { ...todo, completed: !todo.completed })
        }
      />
      <ListItemTitle>{todo.title}</ListItemTitle>
    </ListItem>
  );
}
