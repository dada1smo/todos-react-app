import styled from 'styled-components';
import { Theme } from './Theme';

export const Spacer = styled.div`
  width: ${(props) => (props.horizontal ? props.horizontal : '100%')};
  height: ${(props) => (props.vertical ? props.vertical : 0)};
`;
