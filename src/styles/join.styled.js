import styled from 'styled-components';

export const JoinContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BgWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BgLayer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(101, 127, 135, 0.85);
    position: absolute;
    top: 0;
    left: 0;
`;

export const JoinForm = styled.div`
    background: white;
    box-shadow: 0px 6px 15px rgba(26, 43, 63, 0.1);
    border-radius: 27px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 2.3rem 6.5rem;
    font-size: 0.7rem;
    width: 19%;
`;

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    background: rgba(208, 215, 225, 0.43);
    border-radius: 12px;
    border: none;
    font-size: 1rem;
    align-self: center;

    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    margin-top: 0.8rem;
    width: 100%;
    padding: 0.75rem;
    background: #064469;
    border-radius: 50px;
    border: none;
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
`;
