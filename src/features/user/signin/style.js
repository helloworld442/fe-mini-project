import styled, { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
`;

export const GlobalStyle = createGlobalStyle`
  body{
    color: #051619;
    font-size: 14px;
    font-family: "Noto Sans KR","Apple SD Gothic Neo",sans-serif;
    line-height: 1.8;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    letter-spacing: -.0125rem;
    margin: 0;
  }
  `;

export const StyledSection = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: #eae7de;
  height: 100%;
  overflow-x: hidden;
  color: #051619;
  font-size: 14px;
  font-family: "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
  line-height: 1.8;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;
export const StyledForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 7.5% 5% 4rem;
  position: relative;
`;
export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledA = styled.a`
  display: block;
  width: 60%;
`;
export const StyledButton = styled.button`
  min-width: 104px;
  padding: 11px 1.3rem;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  border: 1px solid #051619;
  box-sizing: border-box;
  background: #fff;
  color: #051619;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  text-align: left;
  font-size: 0.915rem;
  font-weight: 600;
`;

export const StyledDevider = styled.div`
  height: 2px;
  margin: 1.725rem auto;
  background: #051619;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const StyledTextField = styled.div`
  margin: 0.8rem 0;
  position: relative;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 0.8rem;
`;
