import styled from 'styled-components';

export const Banner = styled.div`
    width: 100vw;
    height: 30%;
    background-color: #9dcedc;
    display: flex;
    align-items: end;
`;

export const BannerQuiz = styled.div`
    color: #064469;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2.1px;
    margin: 50px 45px 50px 65px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 40px 100px;
`;

export const TimeChat = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
`;

export const TimetableWrapper = styled.div`
    width: 55%;
`;

export const Chatbox = styled.div`
    width: 45%;
    background-color: #ffefb5;
    border-radius: 18px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Chatbutton = styled.button`
    background-color: #064469;
    border-radius: 24px;
    border: none;
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 600;
    color: white;
    cursor: pointer;
`;
