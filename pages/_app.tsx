import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'normalize.css';
import { Roboto } from '@next/font/google';
import Header from '@/components/Header';
import SocialLinks from '@/components/SocialLinks';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Header />

			<main className={roboto.className}>
				<Component {...pageProps} />

				<SocialLinks />
			</main>
		</div>
	);
}

