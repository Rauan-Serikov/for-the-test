import s from './Header.module.scss'
import { FC } from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import Nav from '../Nav';

const Header: FC = () => {
	return (
		<header className={s.header}>
			<div className={s.header__container}>
				<Link to={ROUTES.home.path} className={s.header__logo}>
					CompanyName
				</Link>

				<Nav type='header'/>
			</div>
		</header>
	)
};

export default Header;