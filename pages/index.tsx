import React from 'react';
import { GetStaticProps } from 'next';
import { Htag, Button, P, Tag, Rating } from '../components/';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { Menu } from '../layout/Menu/Menu';

function Home({menu, firstCategory} :HomeProps): JSX.Element {
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
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>

    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;

}