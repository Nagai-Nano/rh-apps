import React from 'react';
import {
  EditOutlined,
  ClockCircleOutlined,
  KeyOutlined,
  SyncOutlined,
  StarOutlined,
  TableOutlined
} from '@ant-design/icons';

import MarkdownEditor from 'pages/MarkdownEditor';
import Countdown from 'pages/Countdown';
import GenPass from 'pages/GenPass';
import TextConverter from 'pages/TextConverter';
import PaperRockScissors from 'pages/PaperRockScissors';

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
    icon: <KeyOutlined />,
    Component: GenPass
  },
  {
    key: 'text-converter',
    title: 'Text Converter',
    path: '/text-converter',
    icon: <SyncOutlined />,
    Component: TextConverter
  },
  {
    key: 'paper-rock-scissors',
    title: 'Paper, Rock, Scissors',
    path: '/paper-rock-scissors',
    icon: <StarOutlined />,
    Component: PaperRockScissors
  },
  {
    key: 'infinite-kittens',
    title: 'Infinite Kittens',
    path: '/infinite-kittens',
    icon: <TableOutlined />,
    Component: PaperRockScissors
  }
];
