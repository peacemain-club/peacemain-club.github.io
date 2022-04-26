import styled, {css} from 'styled-components';

export const Button = styled.a<{is_active: boolean; variant: 'large' | 'small'}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: white;
  background: ${({theme, is_active}) => (is_active ? theme.color.GRADIENT_1 : theme.color.GREY)};

  ${({variant, theme}) => {
    switch (variant) {
      case 'large':
        return css`
          height: 60px;
          width: 320px;

          font-size: ${theme.font_size.R175};
        `;
      case 'small':
        return css`
          height: 36px;
          width: 110px;

          font-size: ${theme.font_size.R100};
        `;
    }
  }};
`;
