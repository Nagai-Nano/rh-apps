import styled from 'styled-components';
import { Select as AntdSelect, Button as AntdButton } from 'antd';

export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardForm = styled.div`
  width: 40rem;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 8px #f0f1f2;
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  background: #13c2c2;
  padding: 1rem;
  color: #fff;
  margin: 0;
`;

export const CardBody = styled.div`
  padding: 2rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: inline-block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #727272;
  }
`;

export const Select = styled(AntdSelect)`
  width: 100%;
`;

export const Button = styled(AntdButton)`
  margin-top: 1rem;
  width: 100% !important;
`;
