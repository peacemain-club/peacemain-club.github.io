import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  position: relative;
`;

export const Checkbox = styled.input``;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -4px;

  transform: translateY(100%);

  color: ${({theme}) => theme.color.RED};
  font-size: ${({theme}) => theme.font_size.R75};
`;
