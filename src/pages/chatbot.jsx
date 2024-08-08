import * as S from '../styles/chatbot.styled';
import { useState, useRef, useEffect } from 'react';
import ruddy from '../assets/ruddy.svg';
import chatting from '../assets/chat.svg';

const Chatbot = () => {
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const messagesEndRef = useRef(null);
    const [isComposing, setIsComposing] = useState(false);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleNewChat = () => {
        setMessages([]);
        setChats([...chats, `Chat ${chats.length + 1}`]);
    };

    const handleSend = () => {
        if (currentMessage.trim() === '') return;

        const newMessage = {
            message: currentMessage,
            isUser: false,
        };

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setCurrentMessage('');
    };

    const handleInputChange = (e) => {
        setCurrentMessage(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (!isComposing && e.key === 'Enter') {
            handleSend();
            e.preventDefault();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isComposing) {
            handleSend();
            e.preventDefault();
        }
    };

    const handleCompositionStart = () => {
        setIsComposing(true);
    };

    const handleCompositionEnd = () => {
        setIsComposing(false);
    };

    return (
        <>
            <S.Chat>
                <S.ChatFlex>
                    <S.ChatContainer>
                        <S.ChatName>Chat Ruddy</S.ChatName>
                        <S.NewChat onClick={handleNewChat}>
                            + New Chat
                        </S.NewChat>
                        <S.ChatLiner />
                        <S.Converstion>Your Conversations</S.Converstion>
                        <S.ChatLiner />
                        <S.ChatList>
                            {chats
                                .slice()
                                .reverse()
                                .map((chat, index) => (
                                    <S.ChatItem key={index}>
                                        <img
                                            src={chatting}
                                            style={{
                                                width: '17px',
                                                height: '17px',
                                            }}
                                        />
                                        {chat}
                                    </S.ChatItem>
                                ))}
                        </S.ChatList>
                    </S.ChatContainer>
                    <S.MessageContainer>
                        <S.ChatBox>
                            {messages.map((message, index) =>
                                message.isUser ? (
                                    <S.UserMsg key={index}>
                                        {message.message}
                                    </S.UserMsg>
                                ) : (
                                    <div
                                        key={index}
                                        style={{ display: 'flex', gap: '10px' }}
                                    >
                                        <img
                                            src={ruddy}
                                            style={{
                                                width: '35px',
                                                height: '35px',
                                            }}
                                        />
                                        <S.RuddyMsg>
                                            {message.message}
                                        </S.RuddyMsg>
                                    </div>
                                )
                            )}
                            <div ref={messagesEndRef} />
                        </S.ChatBox>
                        <S.InputBox>
                            <S.ImageButton />
                            <S.MessageInput
                                value={currentMessage}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                onKeyPress={handleKeyPress}
                                onCompositionStart={handleCompositionStart}
                                onCompositionEnd={handleCompositionEnd}
                            />
                            <S.InputButton onClick={handleSend} />
                        </S.InputBox>
                    </S.MessageContainer>
                </S.ChatFlex>
            </S.Chat>
        </>
    );
};

export default Chatbot;
