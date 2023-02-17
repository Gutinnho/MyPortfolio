import styles from './SocialLink.module.scss';

import {
	TiSocialLinkedinCircular,
	TiSocialGithubCircular,
} from 'react-icons/ti';
import { ImMail4 } from 'react-icons/im';
import ArrowSVG from './ArrowSVG';

import Link from 'next/link';

function SocialLinks() {
	return (
		<div className={styles.socialLinks}>
			<div className={styles.socialLinks_links}>
				<Link target='_blank' href={'https://github.com/Gutinnho'}>
					<TiSocialGithubCircular
						size={40}
						className={styles.socialLinks_links__icon}
					/>
				</Link>
				<Link target='_blank' href={'https://www.linkedin.com/in/glunardi/'}>
					<TiSocialLinkedinCircular
						size={40}
						className={styles.socialLinks_links__icon}
					/>
				</Link>
				<Link
					target='_blank'
					href={
						'mailto:glunardi99@gmail.com?subject=Contato&body=Ol%C3%A1%2C%20vi%20seu%20portfolio%20e%20me%20interessei%20no%20seu%20trabalho!%20Vamos%20conversar...'
					}>
					<ImMail4 size={30} className={styles.socialLinks_links__icon} />
				</Link>
			</div>

			<ArrowSVG />
		</div>
	);
}

export default SocialLinks;
