import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import React, { FunctionComponent } from 'react';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
		<Header />
			<Sidebar />
				<div>
					{children}
				</div>
			<Footer />
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};