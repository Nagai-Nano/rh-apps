import React, { useState } from 'react';

import { PageContainer, TextArea, Preview } from './Styles';

function MarkdownEditor() {
  const [input, setInput] = useState('**Preview**');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <PageContainer>
      <TextArea value={input} onChange={handleChange} />
      <Preview source={input} />
    </PageContainer>
  );
}

export default MarkdownEditor;
