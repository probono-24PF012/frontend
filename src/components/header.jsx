import styled from 'styled-components';
import ruddy from '../assets/ruddy.svg';

// 언어 선택 드롭다운 추가

const HeaderBox = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.color || 'white'};
`;

const Logo = styled.div`
    display: flex;
    margin: 18px 60px;
    gap: 12px;
    align-items: center;
`;

const HeaderName = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #064469;
`;

export default function Header({ color }) {
    return (
        <HeaderBox color={color}>
            <Logo>
                <img width={30} height={30} src={ruddy} />
                <HeaderName>Ruddy</HeaderName>
            </Logo>
        </HeaderBox>
    );
}
