import { useState, ChangeEvent } from 'react';
import InputMask from 'react-input-mask';
import styles from '../layouts/formfinalOrcamento.module.css';

interface PhoneInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = (props) => {
  return (
    <InputMask 
      className={styles.inputform}
      mask='(99) 99999-9999'
      placeholder='Digite o seu telefone' 
      value={props.value} 
      onChange={props.onChange}
    />
  );
}

const PhoneMaskBr: React.FC = () => {
  const [phone, setPhone] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <PhoneInput 
        value={phone}
        onChange={handleInput}
      />
    </div>
  );
}

export default PhoneMaskBr;
