import React, { lazy } from 'react';
import {
  EditOutlined,
  ClockCircleOutlined,
  KeyOutlined,
  SyncOutlined,
  StarOutlined,
  TableOutlined,
  SoundOutlined,
  TagOutlined,
  BorderOutlined
} from '@ant-design/icons';

const MarkdownEditor = lazy(() => import('pages/MarkdownEditor'));
const Countdown = lazy(() => import('pages/Countdown'));
const GenPass = lazy(() => import('pages/GenPass'));
const TextConverter = lazy(() => import('pages/TextConverter'));
const PaperRockScissors = lazy(() => import('pages/PaperRockScissors'));
const InfiniteKittens = lazy(() => import('pages/InfiniteKittens'));
const TextToSpeech = lazy(() => import('pages/TextToSpeech'));
const MovieSeatBooking = lazy(() => import('pages/MovieSeatBooking'));
const MemoryCards = lazy(() => import('pages/MemoryCards'));

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
    Component: InfiniteKittens
  },
  {
    key: 'text-to-speech',
    title: 'Text To Speech',
    path: '/text-to-speech',
    icon: <SoundOutlined />,
    Component: TextToSpeech
  },
  {
    key: 'movie-seat-booking',
    title: 'Movie Seat Booking',
    path: '/movie-seat-booking',
    icon: <TagOutlined />,
    Component: MovieSeatBooking
  },
  {
    key: 'memory-cards',
    title: 'Memory Cards',
    path: '/memory-cards',
    icon: <BorderOutlined />,
    Component: MemoryCards
  }
];
