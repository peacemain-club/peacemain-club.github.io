import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  position: relative;
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked ~ label {
    background: ${({theme}) => theme.color.GRADIENT_1};
    background-clip: content-box;

    padding: 2px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;

export const Checkbox = styled.label`
  display: inline-block;

  width: 20px;
  height: 20px;

  border: 2px solid white;
  border-image: ${({theme}) => theme.color.GRADIENT_1};
  border-image-slice: 1;

  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -4px;

  transform: translateY(100%);

  color: ${({theme}) => theme.color.RED};
  font-size: ${({theme}) => theme.font_size.R75};
`;
