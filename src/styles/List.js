import styled from 'styled-components';
import { Theme } from './Theme';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 12px;
  margin: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const ListItemTitle = styled.p`
  text-align: left;
  flex: 1;
`;
