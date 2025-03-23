import { FC, PropsWithChildren } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const MainLayout: FC<PropsWithChildren> = ({
	children,
}) => {
	return (
		<>

			<Header />

			<main>
				<ErrorBoundary>{children}</ErrorBoundary>
			</main>

			<Footer />

		</>
	);
};
