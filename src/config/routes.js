import React from 'react';
import { EditOutlined, ClockCircleOutlined } from '@ant-design/icons';

import MarkdownEditor from 'pages/MarkdownEditor';
import Countdown from 'pages/Countdown';

export default [
  {
    key: 'markdown-editor',
    title: 'Markdown Editor',
    path: '/markdown-editor',
    icon: <EditOutlined />,
    Component: MarkdownEditor
  },
  {
    key: 'countdown',
    title: 'Countdown',
    path: '/countdown',
    icon: <ClockCircleOutlined />,
    Component: Countdown
  }
];
