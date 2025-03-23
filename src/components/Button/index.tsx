import { FC, ButtonHTMLAttributes } from 'react';
import s from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({
	className,
	children = 'HomePage',
	...rest
}) => {
	return (
		<button className={clsx(s.wrap, className)} {...rest}>
			{children}
		</button>
	);
};
