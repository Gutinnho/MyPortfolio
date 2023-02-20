import styles from './Header.module.scss';

import Link from '@/components/Link';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { List, X } from 'phosphor-react';
import { Barlow_Condensed } from '@next/font/google';

const font = Barlow_Condensed({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

function Header() {
	const [menuExpanded, setMenuExpanded] = useState<boolean>(false);

	useEffect(() => {
		const currentWidth = window.innerWidth;
		currentWidth >= 768 ? setMenuExpanded(true) : setMenuExpanded(false);
	}, [setMenuExpanded]);

	const showMenu = () => {
		setMenuExpanded(!menuExpanded);
	};

	return (
		<header
			className={classNames({
				[styles.header]: true,
				[font.className]: true,
			})}>
			{menuExpanded ? (
				<X
					color='white'
					size={40}
					weight='regular'
					onClick={showMenu}
					className={styles.header_button}
				/>
			) : (
				<List
					color='black'
					size={40}
					weight='regular'
					onClick={showMenu}
					className={styles.header_button__colored}
				/>
			)}
			<div className={styles.header_line}></div>

			<div
				className={classNames({
					[styles.header_bgList]: true,
					[styles.hidden]: menuExpanded === false,
				})}></div>
			<ul
				className={classNames({
					[styles.header_list]: true,
					[styles.hidden]: menuExpanded === false,
				})}>
				<li className={styles.header_list__item}>
					<Link href='/'>
						<p>
							00<span>Home</span>
						</p>
					</Link>
				</li>
				<li className={styles.header_list__item}>
					<Link href='/projects'>
						<p>
							01<span>Projetos</span>
						</p>
					</Link>
				</li>
				<li className={styles.header_list__item}>
					<Link href='/skills'>
						<p>
							02<span>Skills</span>
						</p>
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
