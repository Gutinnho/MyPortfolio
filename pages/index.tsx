import Introduction from '@/components/Introduction';
import Header from '@/components/Header';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
	return (
		<div>
			<style jsx>{`
				div {
					display: flex;
					align-items: center;
				}
			`}</style>
			<Header />
			<main>
				<SocialLinks />
				<Introduction />
			</main>
		</div>
	);
}

