import styled, {css} from 'styled-components';

export const Button = styled.a<{is_active: boolean; type: 'large' | 'small'}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({is_active, theme}) =>
    is_active
      ? css`
          background: ${theme.color.GRADIENT_1};
          color: white;
        `
      : css`
          background: ${theme.color.GREY};
        `}
  ${({type, theme}) => {
    switch (type) {
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
  }}
`;
