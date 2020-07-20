import React, { useState } from 'react';
import { InputNumber, Checkbox, Button } from 'antd';

import {
  PageContainer,
  PageTitle,
  PageContent,
  InputGroup,
  CheckboxGroup
} from './Styles';

const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = LOWERCASE.toUpperCase();
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;.,/';

function GenPass() {
  const [password, setPassword] = useState('q^_V6/');
  const [length, setLength] = useState(6);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  });

  const handleLengthChange = (value) => {
    if (!isNaN(value) && +value > 5 && +value < 35) {
      setLength(value);
    }
  };

  const handleOptionChange = (key) => ({ target }) => {
    setOptions((prev) => ({
      ...prev,
      [key]: target.checked
    }));
  };

  const handleGenerate = () => {
    let charset = LOWERCASE;
    let output = '';

    if (options.uppercase) charset += UPPERCASE;
    if (options.numbers) charset += NUMBERS;
    if (options.symbols) charset += SYMBOLS;

    for (let i = 0, charLength = charset.length; i < length; i++) {
      output += charset.charAt(~~(Math.random() * charLength));
    }
    setPassword(output);
  };

  return (
    <PageContainer>
      <PageTitle>Password Generator</PageTitle>
      <PageContent>
        <div className="box">
          <InputGroup>
            <label htmlFor="input-length">Length</label>
            <InputNumber
              id="input-length"
              style={{ width: '100%', padding: '5px' }}
              value={length}
              onChange={handleLengthChange}
            />
          </InputGroup>
          <CheckboxGroup>
            {Object.keys(options).map((key) => (
              <Checkbox
                key={key}
                checked={options[key]}
                onChange={handleOptionChange(key)}
              >
                {key}
              </Checkbox>
            ))}
          </CheckboxGroup>
          <Button
            type="primary"
            size="large"
            block
            style={{ marginTop: 20 }}
            onClick={handleGenerate}
          >
            Generate
          </Button>
        </div>
        <div className="box">
          <h3>Result:</h3>
          <div style={{ fontSize: '1.2rem' }}>{password}</div>
        </div>
      </PageContent>
    </PageContainer>
  );
}

export default GenPass;
