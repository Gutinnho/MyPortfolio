import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
	label: string;
	variant: 'content' | 'outlined';
}

function Button({ label, variant }: ButtonProps) {
	return (
		<button
			className={classNames({
				[styles.button]: true,
				[styles.button_content]: variant === 'content',
				[styles.button_outlined]: variant === 'outlined',
			})}>
			{label}
		</button>
	);
}

export default Button;
