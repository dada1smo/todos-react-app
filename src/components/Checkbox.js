import { useState } from 'react';
import { HiddenCheckbox, StyledCheckbox } from '../styles/Checkbox';
import checkIcon from '../images/check-icon.svg';

export default function Checkbox({ onCheck, completed }) {
  const [checked, setChecked] = useState(completed);

  const onChangeCheck = () => {
    setChecked(!checked);
    onCheck();
  };

  return (
    <>
      <HiddenCheckbox checked={checked} onChange={onChangeCheck} />
      <StyledCheckbox checked={checked} onClick={onChangeCheck}>
        <img src={checkIcon} alt="" />
      </StyledCheckbox>
    </>
  );
}
