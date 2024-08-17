import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background-color: #c4e2ea;
    border-radius: 12px;
    width: 100%;
    box-sizing: border-box;
`;

export const DatePickerContainer = styled.div`
    width: 50%;

    .react-datepicker-wrapper {
        width: auto;
    }

    .react-datepicker {
        font-size: 0.5rem;
        border: none;
        background-color: white;
        border-radius: 14px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    }

    .react-datepicker__header {
        background-color: white;
        border-bottom: none;
    }

    .react-datepicker__current-month {
        font-weight: bold;
        font-size: 0.5rem;
    }

    .react-datepicker__navigation {
        top: 0px;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
        margin: 0.05rem;
        width: 1rem; /* Smaller day cells */
        height: 1rem;
        line-height: 1rem;
        color: #333;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
        background-color: #0277bd;
        color: white;
        border-radius: 50%;
    }
`;

export const ScheduleList = styled.div`
    padding: 10px;
    width: 40%;
`;

export const ScheduleItem = styled.div`
    background-color: transparent;
    border-radius: 13px;
    padding: 5px;
    margin-bottom: 2px;
    color: black;
    text-align: center;
    border: 2px solid white;
    font-size: 0.6rem;
`;

export const Title = styled.h3`
    color: black;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 0.7rem;
`;

export const DateText = styled.p`
    color: black;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 0.5rem;
`;
