import styled from 'styled-components';
import send from '../assets/send.svg';
import file from '../assets/file.svg';

export const Chat = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-color: #f3f7fb;
`;

export const ChatFlex = styled.div`
    flex: 1;
    display: flex;
`;

export const ChatContainer = styled.div`
    width: 18%;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 27px;
    margin: 17px;
    position: relative;
    padding-top: 35px;
    gap: 15px;
`;

export const ChatName = styled.div`
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: black;
    items-align: start;
    width: 80%;
`;

export const NewChat = styled.button`
    width: 80%;
    height: 48px;
    background: #e2f5fa;
    border-radius: 27px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 505;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 13px;
    margin: 10px;
`;

export const ChatList = styled.div`
    width: 80%;
    height: 80%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ChatItem = styled.div`
    width: 80%;
    height: 38px;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 13px;
    align-items: center;
    padding-left: 13px;
`;

export const ChatLiner = styled.div`
    width: 100%;
    height: 2px;
    background-color: #f4f4f9;
`;

export const Converstion = styled.div`
    width: 80%;
    text-color: #666666;
    font-size: 11px;
    display: flex;
    justify-content: start;
`;

export const MessageContainer = styled.div`
    width: 82%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ChatBox = styled.div`
    width: 70%;
    height: 75%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    padding-top: 45px;
    padding-bottom: 25px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const UserMsg = styled.div`
    font-size: 14px;
    font-weight: 500;
    text-color: black;
    font-family: 'Inter', sans-serif;
    align-self: flex-end;
    border-radius: 24px;
    background-color: #ffffff;
    padding: 10px 20px;
    max-width: 60%;
    word-wrap: break-word;
`;

export const RuddyMsg = styled.div`
    align-self: flex-start;
    font-size: 14px;
    font-weight: 500;
    color: black;
    font-family: 'Inter', sans-serif;
    border-radius: 24px;
    background-color: #dadee1;
    padding: 10px 20px;
    max-width: 100%;
    word-wrap: break-word;
`;

export const InputBox = styled.div`
    width: 62%;
    height: 7%;
    border-radius: 30px;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ImageButton = styled.button`
    margin: 0 25px;
    width: 23px;
    height: 23px;
    background: url(${file});
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
`;

export const InputButton = styled.button`
    margin: 0 20px;
    width: 23px;
    height: 23px;
    background: url(${send});
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
`;

export const MessageInput = styled.input`
    flex: 1;
    padding: 8px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    border: none;
    outline: none;
`;
