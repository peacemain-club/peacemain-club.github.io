import React, {useState} from 'react';
import styled from 'styled-components';

interface InputProps {
  label?: string,
  name: string,
  value: string | number,
  onChange: (e: any) => void,
  validity?: boolean,
  placeholder?: string,
}

const Container = styled.div<{
  validity?: boolean,
  focus: boolean,
}>`
  :focus-within {
    input {
      border: 2px solid #2b95ff;
    }
  }
  margin: 8px 0;
`;

const Label = styled.div`
  color: #777;
  margin-bottom: 4px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 50%;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 8px 12px;
  outline: none;
  font-size: 18px;
  transition: all 1s;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

function TextInput(props: InputProps): React.ReactElement {
  const [is_focused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container
      validity={props.validity}
      focus={is_focused}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      <Label>{props.label}</Label>
      <Input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </Container>
  );
}

export default TextInput;
