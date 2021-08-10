import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const submitHandler = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	return (
		<form className={cn(className, styles.search)} {...props} onSubmit={submitHandler}>
			<Input
				className={styles.input}
				placeholder="Поиск..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				type="submit"
			>
				<GlassIcon />
			</Button>
		</form>
	);
};