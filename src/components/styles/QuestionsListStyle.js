import styled from 'styled-components';

export const ConstainerQuestion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 20%;
    margin: 0 auto;
    padding: 0;
    
`;

export const QuestionCategory = styled.h2`
    font-size: 30px;
    margin: 20px 0;
    @media (max-width: 768px) {
      font-size: 20px;
    }
`;

export const QuestionTitle = styled.h1`
    font-size: 25px;
    color: #ccc;
    @media (max-width: 768px) {
      font-size: 15px;
    }
`;

export const QuestionTime = styled.h3`
    width: 30%
    height: 30%;
    font-size: 20px;
    margin-top: 20px;
`;

export const AnswerButton = styled.button`
    width: 150px;
    height: 50px;
    padding: 5px;
    margin: 10px;
    background: #202020;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: white;
    flex-basis: 35%;
    cursor: pointer;
`;

export const NextQuestion = styled.button`
    width: 250px;
    height: 40px;
    border: 3px solid grey;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: white;
    padding: 5px;
    background: #202020;
    cursor: pointer;
`;

export const QuestionContainer = styled.section`
    width: 80%;
    height: 80vh;
    margin: auto;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 25%;
`;
