import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import {
  PageContainer,
  PageTitle,
  PageContent,
  StyledDropdown,
  ConverterWrapper,
  TextArea,
  Result
} from './Styles';

import {
  textToBase64,
  base64ToText,
  textToBinary,
  binaryToText,
  textToHex,
  hexToText,
  reverse
} from './utils';

const OPTIONS = [
  'Text to Base64',
  'Base64 to Text',
  'Text to Binary',
  'Binary to Text',
  'Text to Hex',
  'Hex to Text',
  'Reverse'
];

function TextConverter() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [text, setText] = useState('');
  const [converted, setConverted] = useState('');

  useEffect(() => {
    handleConvert();
    // eslint-disable-next-line
  }, [text, selectedOptionIndex]);

  const handleOptionChange = ({ key }) => {
    setSelectedOptionIndex(OPTIONS.findIndex((option) => option === key));
  };

  const renderMenuOption = () => (
    <Menu onClick={handleOptionChange}>
      {OPTIONS.map((option) => (
        <Menu.Item key={option}>{option}</Menu.Item>
      ))}
    </Menu>
  );

  const handleTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleConvert = () => {
    try {
      switch (selectedOptionIndex) {
        case 0:
          return setConverted(textToBase64(text));
        case 1:
          return setConverted(base64ToText(text));
        case 2:
          return setConverted(textToBinary(text));
        case 3:
          return setConverted(binaryToText(text));
        case 4:
          return setConverted(textToHex(text));
        case 5:
          return setConverted(hexToText(text));
        case 6:
          return setConverted(reverse(text));
        default:
          return;
      }
    } catch {
      console.error('Fail to convert');
    }
  };

  return (
    <PageContainer>
      <PageTitle>Text Converter</PageTitle>
      <PageContent>
        <StyledDropdown overlay={renderMenuOption()} trigger={['click']}>
          <span>
            {OPTIONS[selectedOptionIndex]} <DownOutlined />
          </span>
        </StyledDropdown>
        <ConverterWrapper>
          <TextArea rows={15} value={text} onChange={handleTextChange} />
          <Result>{converted}</Result>
        </ConverterWrapper>
      </PageContent>
    </PageContainer>
  );
}

export default TextConverter;
