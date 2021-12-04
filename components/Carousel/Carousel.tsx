import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const { container, dots, slider, arrow, right, left, dot, dotIsActive } = styles;

interface CarouselProps {
	children: React.ReactNode;
}
export const Carousel = ({
	children,
}: CarouselProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [touchValues, setTouchValues] = useState({
		start: 0,
		end: 0,
	});
	const childrenCount = React.Children.count(children);
	const width = childrenCount * 100;

	const handleClick = (dir: 'right' | 'left') => {
		const newIndex = dir === 'right' ? activeIndex + 1 : activeIndex - 1;
		if (newIndex >= 0 && newIndex < childrenCount) {
			setActiveIndex(newIndex);
		} else {
			setActiveIndex(0);
		}
	}

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchValues({
			...touchValues,
			start: e.touches[0].clientX,
		});
	}
	const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchValues({
			...touchValues,
			end: e.changedTouches[0].clientX,
		});
	}

	const handleDotClick = (index: number) => {
		setActiveIndex(index);
	}

	useEffect(() => {
		if (touchValues.start && touchValues.end) {
			if (touchValues.end - touchValues.start > 0) {
				handleClick('left');
			} else {
				handleClick('right');
			}
		}
	}, [touchValues.end])


	return (
		<div
			className={container}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			<div
				className={slider}
				style={{
					width: `${width}vw`,
					transform: `translateX(-${activeIndex * 100}vw)`,
				}}
			>
				{children}
			</div>
			<div className={dots}>
				{
					//@ts-ignore x value is not used becouse we are mapping over the children number and not the children itself
					Array.isArray(children) && children.map((x, i) => <div onClick={() => handleDotClick(i)} key={`dot-${i}`} className={[dot, i === activeIndex ? dotIsActive : ''].join(' ')}></div>)
				}
			</div>
			{
				childrenCount > 1 &&
				<>
					<button disabled={activeIndex < 1} onClick={() => handleClick('left')} className={[arrow, left].join(' ')}>
						<AiOutlineArrowLeft />
					</button>

					<button onClick={() => handleClick('right')} className={[arrow, right].join(' ')}>
						<AiOutlineArrowRight />
					</button>
				</>
			}

		</div>
	);
}
