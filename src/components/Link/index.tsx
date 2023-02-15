import NextLink from 'next/link';

interface LinkProps {
	children: JSX.Element;
	href: string;
}

function Link({ href, children }: LinkProps) {
	return (
		<NextLink href={href} passHref>
			{children}
		</NextLink>
	);
}

export default Link;
