import styled, { css } from 'styled-components';

export const BoardContainer = styled.div`
    width: 100%;
    height: 26vh;
    border-radius: 12px;
    border: 1px solid #dadee1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.div`
    color: black;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
`;

export const ListContainer = styled.div`
    margin: auto;
    width: 87%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: 5px;
    margin-bottom: 8px;

    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: #dadee1;
        border-radius: 15px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 8px;
    align-items: center;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.72px;
    background: ${({ index }) => (index % 2 === 0 ? '#F8F8F8' : 'transparent')};
`;

export const DateContainer = styled.div`
    color: #c1c1c1;
    font-size: 8px;
    font-weight: 500;
`;
