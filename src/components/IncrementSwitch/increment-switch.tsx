import { useState } from 'react';
import Minus from '../../assets/svgs/minus';
import Plus from '../../assets/svgs/plus';
import { SwitchButton, SwitchContainer, SwitchText } from './increment-switch.styles';

const IncrementSwitch = () => {
  const [amount, setAmount] = useState(1);

  const handleIncrement = (): void => {
    setAmount(amount + 1);
  };

  const handleDecrement = (): void => {
    if (amount <= 1) {
      setAmount(1);
    } else {
      setAmount(amount - 1);
    }
  };

  return (
    <SwitchContainer>
      <SwitchButton onClick={handleDecrement} disabled={amount === 1}>
        <Minus />
      </SwitchButton>
      <SwitchText>{amount}</SwitchText>
      <SwitchButton onClick={handleIncrement}>
        <Plus />
      </SwitchButton>
    </SwitchContainer>
  );
};

export default IncrementSwitch;
