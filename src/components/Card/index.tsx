import s from './Card.module.scss';
import { FC } from 'react';
import { Button } from '../Button';

interface SolutionItem {
	icon: string;
	heading: string;
	descr: string;
	rating: number;
	field: string;
}

interface CardProps {
	type: 'solutions' | 'projects';
	index?: number;
	item?: SolutionItem;
}

const Card: FC<CardProps> = ({ type, index, item }) => {
	if (type === 'solutions' && item) {
		return (
			<div className={s['solutions-card']}>
				<span className={s['solutions-card__icon']}>{item.icon}</span>
				<h2 className={s['solutions-card__title']}>{item.heading}</h2>
				<p className={s['solutions-card__descr']}>{item.descr}</p>
				<div className={s['solutions-card__details']}>
					<span className={s['solutions-card__rating']}>★ {item.rating}</span>
					<span className={s['solutions-card__field']}>{item.field}</span>
				</div>
			</div>
		);
	}

	if (type === 'projects') {
		return (
			<div className={s['projects-card']}>
				Проект {index && index + 1}

				<div className={s['projects-card__mask']}>
					<h4 className={s['projects-card__title']}>E-commerce платформа</h4>
					<p className={s['projects-card__descr']}>Веб-платформа</p>

					<Button>Подробнее</Button>
				</div>
			</div>
		);
	}

	return null;
};

export default Card;
