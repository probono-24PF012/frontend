import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #9dcedc;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
`;

const InnerContainer = styled.div`
    margin: auto;
    height: 68%;
    width: 86%;
    background: white;
    border-radius: 10px;
    padding: 8px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 5px;
`;

const Title = styled.div`
    color: #062c43;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.2px;
    padding: 8px 15px 0 15px;
`;

const GridItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    color: black;
    font-size: 7px;
    font-weight: 700;
`;

const Subject = styled(GridItem)`
    background: transparent;
    font-weight: 500;
`;

const DayLabel = styled(GridItem)`
    background: #9dcedc;
`;

const Period = styled(GridItem)`
    background: #d9d9d9;
    border: 1px solid #9dcedc;
`;

export default function TimeTable({ data }) {
    return (
        <Container>
            <Title>Time Table</Title>
            <InnerContainer>
                <Period />
                <DayLabel>Mon</DayLabel>
                <DayLabel>Tue</DayLabel>
                <DayLabel>Wed</DayLabel>
                <DayLabel>Thu</DayLabel>
                <DayLabel>Fri</DayLabel>
                {data.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        <DayLabel>{rowIndex + 1}</DayLabel>
                        {row.map((item, colIndex) => (
                            <Subject key={`${rowIndex}-${colIndex}`}>
                                {item}
                            </Subject>
                        ))}
                    </React.Fragment>
                ))}
            </InnerContainer>
        </Container>
    );
}
