import * as S from '../styles/join.styled';
import school from '../assets/school.svg';
import LangDrop from '../components/langDrop';

export default function Login() {
    return (
        <S.JoinContainer>
            <S.BgWrapper>
                <S.BgImage src={school} alt="Background" />
                <S.BgLayer />
            </S.BgWrapper>
            <S.JoinForm>
                <S.InputBox>
                    <span style={{ color: '#064469', fontWeight: '500' }}>
                        ID
                    </span>
                    <S.Input type="text" />
                </S.InputBox>
                <S.InputBox>
                    <span style={{ color: '#064469', fontWeight: '500' }}>
                        Password
                    </span>
                    <S.Input type="password" />
                </S.InputBox>
                <S.InputBox>
                    <span style={{ color: '#064469', fontWeight: '500' }}>
                        School code
                    </span>
                    <S.Input type="text" />
                </S.InputBox>
                <LangDrop />
                <S.Button>Sign up</S.Button>
            </S.JoinForm>
        </S.JoinContainer>
    );
}
