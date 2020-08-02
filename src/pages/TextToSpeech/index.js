import React, { useEffect, useState } from 'react';
import { Spin, Input, Slider } from 'antd';
import { SoundOutlined } from '@ant-design/icons';

import {
  PageContainer,
  CardForm,
  CardTitle,
  CardBody,
  InputGroup,
  Select,
  Button
} from './Styles';

const synth = speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

function TextToSpeech() {
  const [ready, setReady] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState({});
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
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

  const handleRateChange = (value) => {
    setRate(value);
  };

  const handlePitchChange = (value) => {
    setPitch(value);
  };

  const handleTextChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleSpeak = () => {
    if (!text) return;
    utterance.voice = selectedVoice;
    utterance.text = text;
    utterance.rate = rate;
    utterance.pitch = pitch;
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
          <InputGroup>
            <label htmlFor="lang">Language</label>
            <Select
              id="lang"
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
          </InputGroup>
          <InputGroup>
            <label htmlFor="rate">Rate</label>
            <Slider
              min={0.1}
              max={10}
              step={0.1}
              value={rate}
              onChange={handleRateChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="pitch">Pitch</label>
            <Slider
              min={0}
              max={2}
              step={0.1}
              value={pitch}
              onChange={handlePitchChange}
            />
          </InputGroup>
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
