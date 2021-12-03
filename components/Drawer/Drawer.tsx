import styles from './Drawer.module.scss';

const { open, closed, container, content, drawer, back } = styles;

export interface DrawerProps {
	direction: 'top' | 'left' | 'right' | 'bottom';
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
	id?: string;
}

export const Drawer = ({
	direction,
	isOpen,
	onClose,
	children,
	title,
	id,
}: DrawerProps) => {
	return (
		<div id={id} className={[drawer].join(' ')}>
			<div onClick={onClose} className={[back, isOpen ? open : closed].join(' ')}>
			</div>
			<div className={isOpen ? open : closed}>
				<div className={[container, styles[direction]].join(' ')}>
					{title && <h3>{title}</h3>}
					<div className={content}>
						{children}
					</div>
					<button onClick={onClose}>action</button>
				</div>
			</div>
		</div>
	);
}
