import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.3s;

    &:hover {
      color: #666666;
    }

    svg {
      margin-right: 2px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 40px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    div {
      margin-left: 20px;

      strong {
        font-size: 28px;
        color: #3d3d4d;
      }

      p {
        font-size: 16px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 35px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 28px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 40px;

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
