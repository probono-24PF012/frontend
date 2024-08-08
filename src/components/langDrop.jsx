import { useEffect } from 'react';
import styled from 'styled-components';

// styled-component로 스타일을 정의합니다.
const TranslateContainer = styled.div`
    /* Google에서 제공하는 번역 텍스트와 로고를 숨기는 스타일 */
    .goog-logo-link {
        display: none !important;
    }

    /* 숨겨진 로고와 텍스트에 의한 여백 제거 */
    .goog-te-gadget {
        font-size: 0;
    }

    .goog-te-combo {
        font-size: 1rem; /* 드롭다운 메뉴의 폰트 크기 유지 */
    }
`;

export default function LangDrop() {
    useEffect(() => {
        if (!window.googleTranslateElementInit) {
            const googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        includedLanguages: 'en,es,fr,de,it,ja,ko,pt,ru,zh-CN',
                        layout: window.google.translate.TranslateElement
                            .InlineLayout.HORIZONTAL,
                        autoDisplay: false,
                    },
                    'google_translate_element'
                );
            };
            window.googleTranslateElementInit = googleTranslateElementInit;

            const script = document.createElement('script');
            script.src =
                '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, []);

    return <TranslateContainer id="google_translate_element" />;
}
