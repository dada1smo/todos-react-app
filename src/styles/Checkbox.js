import styled from 'styled-components';
import { Theme } from './Theme';

export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 400px;
  background: ${(props) =>
    props.checked ? Theme.highlight[500] : Theme.neutral[900]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px ${Theme.highlight[500]};

  img {
    display: ${(props) => (props.checked ? 'block' : 'none')};
    height: 16px;
    width: 16px;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
