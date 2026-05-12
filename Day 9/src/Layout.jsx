import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router';

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
