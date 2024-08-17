import Header from '../components/header';
import * as S from '../styles/main.styled';
import students from '../assets/students.svg';
import Board from '../components/board';
import Timetable from '../components/timeTable';
import chatRuddy from '../assets/chatRuddy.svg';
import Schedule from '../components/Schedule';

const announcements = [
    { title: 'Open class day notification', date: '2024-06-28' },
    { title: 'Open class day notification', date: '2024-06-28' },
    { title: 'Information on the cost of school meals', date: '2024-06-20' },
    { title: 'Information on the cost of school meals', date: '2024-06-20' },
    { title: 'About earthquake evacuation education...', date: '2024-06-18' },
    { title: 'Open class day notification', date: '2024-06-28' },
    { title: 'Information on the cost of school meals', date: '2024-06-20' },
    { title: 'About earthquake evacuation education...', date: '2024-06-18' },
];

const timetable = [
    ['English', 'Math', 'P.E', 'Math', 'Math'],
    ['English', 'Math', 'P.E', 'Math', 'Math'],
    ['English', 'Math', 'P.E', 'Math', 'Math'],
    ['English', 'Math', 'P.E', 'Math', 'Math'],
    ['English', 'Math', 'P.E', 'Math', 'Math'],
    ['English', 'Math', 'P.E', 'Math', 'Math'],
];

const schedules = {
    '8/1/2024': ["John's Birthday", 'Meeting', 'Romeo and Juliet play'],
};

export default function Main() {
    return (
        <>
            <Header />
            <S.Banner>
                <S.BannerQuiz>
                    Let's learn how to express today's situation! {' >'}
                </S.BannerQuiz>
                <img src={students} height={115} />
            </S.Banner>
            <S.Content>
                <Board title="Announcement" data={announcements} />
                <S.TimeChat>
                    <S.Chatbox>
                        <img src={chatRuddy} height={100} />
                        <S.Chatbutton>chatbot</S.Chatbutton>
                    </S.Chatbox>
                    <S.TimetableWrapper>
                        <Timetable data={timetable} />
                    </S.TimetableWrapper>
                </S.TimeChat>
                <Schedule schedules={schedules} />
                <Board title="QnA" data={announcements} />
            </S.Content>
        </>
    );
}
