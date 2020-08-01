import React, { useEffect, useState } from 'react';
import { Spin, Input } from 'antd';
import { SoundOutlined } from '@ant-design/icons';

import {
  PageContainer,
  CardForm,
  CardTitle,
  CardBody,
  Select,
  Button
} from './Styles';

const synth = speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

function TextToSpeech() {
  const [ready, setReady] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState({});
  const [text, setText] = useState('I Love You 3000! UwU');

  useEffect(() => {
    if (synth.getVoices().length) {
      handleVoiceChange();
    } else {
      synth.onvoiceschanged = handleVoiceChange;
    }
  }, []);

  const handleVoiceChange = () => {
    const voices = synth.getVoices();
    setVoices(voices);
    setSelectedVoice(voices[0]);
    setReady(true);
  };

  const handleSelectVoiceChange = (value) => {
    setSelectedVoice(voices.find((voice) => voice.voiceURI === value));
  };

  const handleTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleSpeak = () => {
    if (!text) return;
    utterance.voice = selectedVoice;
    utterance.text = text;
    synth.speak(utterance);
  };

  if (!ready) {
    return <Spin />;
  }

  return (
    <PageContainer>
      <CardForm>
        <CardTitle>Text To Speech</CardTitle>
        <CardBody>
          <Select
            size="large"
            style={{ width: '100%' }}
            value={selectedVoice.voiceURI}
            onChange={handleSelectVoiceChange}
          >
            {voices.map(({ name, lang, voiceURI }) => (
              <Select.Option key={voiceURI} value={voiceURI}>
                {name} [{lang}]
              </Select.Option>
            ))}
          </Select>
          <Input.TextArea rows={12} value={text} onChange={handleTextChange} />
          <Button
            icon={<SoundOutlined />}
            type="primary"
            size="large"
            onClick={handleSpeak}
          />
        </CardBody>
      </CardForm>
    </PageContainer>
  );
}

export default TextToSpeech;
