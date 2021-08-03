import React from 'react';
import { Htag, Button, P, Tag, Rating } from '../components/';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Header 1</Htag>
      <Htag tag="h2">Header 2</Htag>
      <Button appearance='ghost'>btn1</Button>
      <Button appearance='primary' arrow='right'>btn2</Button>
      <P size='s'>Lorem ipsum</P>
      <P size='m'>Lorem ipsum</P>
      <P size='l'>Lorem ipsum</P>
      <Tag size='s'>Lorem ipsum</Tag>
      <Tag size='m' color='green' href='ya.ru'>Lorem ipsum</Tag>
      <Rating rating={2} isEditable></Rating>
    </>
  );
}

export default withLayout(Home);