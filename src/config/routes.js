import React from 'react';
import {
  EditOutlined,
  ClockCircleOutlined,
  LockOutlined
} from '@ant-design/icons';

import MarkdownEditor from 'pages/MarkdownEditor';
import Countdown from 'pages/Countdown';
import GenPass from 'pages/GenPass';

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
  },
  {
    key: 'gen-pass',
    title: 'Gen Pass',
    path: '/gen-pass',
    icon: <LockOutlined />,
    Component: GenPass
  }
];
