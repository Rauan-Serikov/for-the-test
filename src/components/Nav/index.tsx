import s from './Nav.module.scss'
import { FC } from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import clsx from 'clsx';

type NavProps = {
	type: 'header' | 'projects'
}

const Nav: FC<NavProps> = ({ type }) => {
	return (
		<nav className={clsx(s.nav, s[`nav_${type}`])}>
			<Link to={ROUTES.home.path} className={clsx(s.link, s[`link_${type}`])}>Главная</Link>
			<Link to={ROUTES.home.path} className={clsx(s.link, s[`link_${type}`])}>О нас</Link>
			<Link to={ROUTES.home.path} className={clsx(s.link, s[`link_${type}`])}>Услуги</Link>
			<Link to={ROUTES.home.path} className={clsx(s.link, s[`link_${type}`])}>Портфолио</Link>
			<Link to={ROUTES.home.path} className={clsx(s.link, s[`link_${type}`])}>Контакты</Link>
		</nav>
	)
}

export default Nav;