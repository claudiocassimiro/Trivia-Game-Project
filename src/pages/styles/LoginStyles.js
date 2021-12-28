import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #272727;
`;

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 50%;
  background-color: #202020;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
  @media (min-width: 220px) and (max-width: 380px) {
    width: 90%;
    height: 55%;
  }
  @media (min-width: 381px) and (max-width: 500px) {
    width: 85%;
    height: 55%;
  }
  @media (min-width: 501px) and (max-width: 700px) {
    width: 80%;
    height: 60%;
  }
  @media (min-width: 701px) and (max-width: 760px) {
    width: 75%;
    height: 60%;
  }
  @media (min-width: 761px) and (max-width: 900px) {
    width: 70%;
    height: 60%;
  }
  @media (min-width: 901px){
    width: 700px;
    height: 500px;
  }
`;

export const FormElements = styled.form`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
`;

export const Titulo = styled.h1`
  font-size: x-large;
  color: white;
`;

export const Input = styled.input`
    width: 70%;
    height: 40px;
    padding: 5px;
    font-size: small;
    border: 2px solid #094d05;
    margin: 10px 0;
    background: #434343;
    border-radius: 3px;
    color: white;
    outline: 0;

    &:focus {
    border: 2px solid green;
    }
`;

export const PlayButton = styled.button`
    width: 60%;
    height: 50px;
    background: #343434;
    border: 1px solid grey;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;
`;

export const FormElementsContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 90%;
    height: 100%;
`;
