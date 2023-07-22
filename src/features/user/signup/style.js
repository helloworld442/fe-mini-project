import styled, {createGlobalStyle} from "styled-components";

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
  `

export const StyledSection = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: #eae7de;
  height: 100%;
  overflow-x: hidden;
  color: #051619;
  font-size: 14px;
  font-family: "Noto Sans KR","Apple SD Gothic Neo",sans-serif;
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
export const StyledButton = styled.button`
  min-width: 104px;
  padding: 10px 1.5rem 11px;
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
  `;

export const StyledDevider = styled.div`
  height: 2px;
  margin: 2rem auto;
  background: #051619;
  text-align: center;
  position: relative;
  z-index: 1;
  `

export const StyledTextField = styled.div`
  margin: 1rem 0;
  position: relative;
  `;

export const StyledInput = styled.input`
  display: block;
  width: 400px;
  padding: 10px 40px 11px 1.5rem;
  border: 1px solid #051619;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: none;
  font: inherit;
  color: #051619;
  transition: all .2s;
  outline: none;
  box-shadow: none;
  `;

export const PrimaryButton = styled.button`
  appearance: auto;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  margin: 0em;
  font: inherit;
  text-align: center;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  background: #051619;
  border: 1px solid #051619;
  color: #fff;
  padding: 10px 1.5rem 11px;
  display: inline-block;
  min-width: 104px;
  width: 100%
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 1rem;
`;

export const StyledA = styled.a`
    display: inline !important;
    margin: 0 !important;
    text-decoration: underline;
    color: #051619;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  position: absolute;
`;

export const StyledFieldset = styled.fieldset`
    margin: 0;
    padding: 0;
    border: 0;
`;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  padding: 0.25rem 0; // 세로 간격 조절
  position: relative;
  justify-content: space-between; /* 추가 */
  align-items: center;
`;

export const StyledLabel = styled.label`
  cursor: default;
  margin-right: auto;
  margin-left: 15px;
  font-weight: bold; // 글자 굵기 조절
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
  display: block;
  height: 16px;
  line-height: 16px;
  position: relative;
`;