import s from './HomePage.module.scss';
import { FC } from 'react';
import Card from '@/components/Card';
import Nav from '@/components/Nav';

export const data = [
	{
		id: 1,
		icon: '✨',
		heading: 'Креативный дизайн',
		descr: 'Мы создаем уникальные дизайны, которые отражают индивидуальность вашего бренда и привлекают внимание целевой аудитории.',
		rating: 4.9,
		field: 'Дизайн',
	},

	{
		id: 2,
		icon: '🚀',
		heading: 'Быстрая разработка',
		descr: 'Оптимизированный процесс разработки позволяет нам создавать высококачественные продукты в сжатые сроки.',
		rating: 4.8,
		field: 'Разработка',
	},

	{
		id: 3,
		icon: '📱',
		heading: 'Мобильная оптимизация',
		descr: 'Все наши проекты адаптированы для любых устройств, обеспечивая идеальный пользовательский опыт на любом экране.',
		rating: 4.7,
		field: 'Оптимизация',
	},
];

const HomePage: FC = () => {
	return (
		<>

			<section className={s.solutions}>
				<div className={s.container}>
					<h1 className={s.solutions__heading}>Инновационные решения для вашего бизнеса</h1>

					<ul className={s.solutions__list}>
						{data.map((item) => (
							<li key={item.id} className={s.solutions__item}>
								<Card type='solutions' item={item} />
							</li>
						))}
					</ul>
				</div>
			</section>


			<section className={s.projects}>
				<div className={s.container}>
					<h3 className={s.projects__heading}>Наши работы</h3>

					<p className={s.projects__descr}>Ознакомьтесь с нашими лучшими проектами в различных категориях</p>

					<Nav type='projects' />

					<ul className={s.projects__list}>
						{Array.from({ length: 6 }).map((_, index) => (
							<li key={index} className={s.projects__item}>
								<Card type="projects" index={index} />
							</li>
						))}
					</ul>
				</div>
			</section>

		</>
	);
};

export default HomePage;
