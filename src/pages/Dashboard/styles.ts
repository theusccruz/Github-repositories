import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #333;
  max-width: 300px;
  margin-top: 55px;
  line-height: 48px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 22px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;
    height: 50px;
    background-color: #04ba56;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    font-weight: bold;
    transition: background-color 0.4s;
    color: #fff;

    &:hover {
      background-color: ${shade(0.2, '#04ba56')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 50px;
  max-width: 700px;

  a {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 14px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: 0.3s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 18px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        margin-top: 4px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.p`
  color: #c53030;
  margin-top: 5px;
`;
