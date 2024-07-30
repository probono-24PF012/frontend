import * as S from '../styles/join.styled';
import school from '../assets/school.svg';

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
                <S.Button>Login</S.Button>
                <div>
                    <span style={{ color: '#B5BECA', fontWeight: '600' }}>
                        New User?
                    </span>
                    <a
                        href="/signup"
                        style={{
                            color: '#5790AB',
                            fontWeight: '600',
                            marginLeft: '0.5rem',
                        }}
                    >
                        Signup
                    </a>
                </div>
            </S.JoinForm>
        </S.JoinContainer>
    );
}
