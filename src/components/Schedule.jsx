import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from '../styles/schedule.styled';

export default function ScheduleComponent({ schedules }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        if (!date) return '';
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const renderSchedule = () => {
        const dateKey = formatDate(selectedDate);
        const items = schedules[dateKey] || [];
        return items.map((item, index) => (
            <S.ScheduleItem key={index}>{item}</S.ScheduleItem>
        ));
    };

    return (
        <S.Container>
            <S.DatePickerContainer>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    inline
                />
            </S.DatePickerContainer>
            <S.ScheduleList>
                <S.Title>Schedule</S.Title>
                <S.DateText>
                    {selectedDate ? formatDate(selectedDate) : 'Select a date'}
                </S.DateText>
                {selectedDate ? renderSchedule() : <p>No schedule available</p>}
            </S.ScheduleList>
        </S.Container>
    );
}
