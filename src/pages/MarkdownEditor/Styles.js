import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Input } from 'antd';

export const PageContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
`;

export const TextArea = styled(Input.TextArea)`
  padding: 1rem;
`;

export const Preview = styled(ReactMarkdown)`
  margin-left: 1rem;
  padding: 1rem;
  background: #434343;
`;
