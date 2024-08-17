import React from 'react';
import * as S from '../styles/board.styled';
import plus from '../assets/plus.svg';

export default function Board({ data, title }) {
    return (
        <S.BoardContainer>
            <S.Header>
                <S.Title>{title}</S.Title>
                <img src={plus} width={11} height={11} />
            </S.Header>
            <S.ListContainer>
                {data.map((item, index) => (
                    <S.ListItem index={index} key={index}>
                        <div>{item.title}</div>
                        <S.DateContainer>{item.date}</S.DateContainer>
                    </S.ListItem>
                ))}
            </S.ListContainer>
        </S.BoardContainer>
    );
}
