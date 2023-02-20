import classNames from 'classnames';
import styles from './Introduction.module.scss';
import Button from '../Button';
import { Roboto } from '@next/font/google';

const font = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
});

function Introduction() {
	return (
		<div className={classNames([styles.introduction], [font.className])}>
			<div>
				<div className={styles.introduction_balloon}>
					<svg
						className={styles.introduction_balloon__cloud}
						width='166'
						height='82'
						viewBox='0 0 166 82'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M31.535 78.9504L31.7425 78.6959C35.0936 71.0659 46.3871 38.8569 9.91658 44.2494C9.41294 44.3296 20.2969 42.4676 67.8617 34.3789L31.7425 78.6959C30.9196 80.5693 30.5756 80.961 31.535 78.9504Z'
							fill='#EEEEEE'
						/>
						<rect width='166' height='57' rx='6' fill='#EEEEEE' />
					</svg>

					<p className={styles.introduction_balloon__p}>Hello, I am</p>
				</div>

				<div className={styles.introduction_info}>
					<p className={styles.introduction_info__name}>Gustavo Lunardi</p>

					<p className={styles.introduction_info__occupation}>
						React Developer
					</p>
				</div>
			</div>

			<div className={styles.introduction_buttons}>
				<Button variant='content' label={'My Projects'} />
				<Button variant='outlined' label={'Hire me'} />
			</div>
		</div>
	);
}

export default Introduction;
