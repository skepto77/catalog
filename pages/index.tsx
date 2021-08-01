import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Htag, Button, P, Tag, Rating } from '../components/';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Header 1</Htag>
      <Htag tag="h2">Header 2</Htag>
      <Button>btn1</Button>
      <Button appearance='primary' arrow='right'>btn2</Button>
      <P size='s'>Lorem ipsum</P>
      <P size='m'>Lorem ipsum</P>
      <P size='l'>Lorem ipsum</P>
      <Tag size='s'>Lorem ipsum</Tag>
      <Tag size='m' color='green' href='ya.ru'>Lorem ipsum</Tag>
      <Rating rating={2} isEditable></Rating>
    </div>
  );
};
