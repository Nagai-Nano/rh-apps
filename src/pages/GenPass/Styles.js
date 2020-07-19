import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: 2.4rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.5rem;
`;

export const PageContent = styled.div`
  width: 70%;
  display: inline-flex;
  justify-content: space-between;

  .box {
    width: 49%;
    border: 1px solid #595959;
    padding: 2rem;
    border-radius: 4px;
  }
`;

export const InputGroup = styled.div`
  label {
    color: #ccc;
    display: inline-block;
    margin-bottom: 4px;
  }
`;

export const CheckboxGroup = styled.div`
  margin-top: 12px;

  .ant-checkbox-wrapper > span:nth-child(2) {
    text-transform: capitalize;
    font-size: 1rem;
    color: #ccc;
  }
`;
