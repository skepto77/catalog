import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props} >
			<div>Catalog of courses, 2020 - {format(new Date(), 'yyyy')}</div>
			<div>
				<a href="#">Пользовательское соглашение</a>
			</div>
			<div>
				<a href="#">Политика конфиденциальности</a>
			</div>
		</footer>
	);
};