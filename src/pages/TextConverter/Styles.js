import styled from 'styled-components';
import { Dropdown, Input } from 'antd';

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
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

export const PageContent = styled.div`
  width: 90%;
`;

export const StyledDropdown = styled(Dropdown)`
  cursor: pointer;
  color: #13c2c2;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0.2px;
`;

export const ConverterWrapper = styled.div`
  margin-top: 5px;
  display: flex;
`;

export const TextArea = styled(Input.TextArea)`
  width: 50%;
  margin-right: 1rem;
  padding: 1rem;
`;

export const Result = styled.div`
  width: 50%;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
`;
