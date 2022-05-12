import { useField } from '@unform/core';
import {
   useEffect,
   useRef,
   useState
} from 'react';
import { Container } from './styles';

interface InputProps {
   name: string;
   placeholder: string;
}

export function Input({ name, placeholder }: InputProps) {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur () {
    setIsFocused(false);

    setIsFilled(!inputRef);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        placeholder={placeholder}
      />
    </Container>
  );
};
