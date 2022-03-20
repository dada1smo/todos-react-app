import styled from 'styled-components';
import { Theme } from './Theme';

export const Card = styled.div`
  background: ${Theme.neutral[700]};
  padding: 16px;
  border-radius: 4px;
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'auto')};
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
