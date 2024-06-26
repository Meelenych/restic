import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';
import planetXprs from '../assets/png/Planet_Exp.png';
import styles from '../styles/Footer.module.css';
import CircleText from '../helpers/CircleText';

const bendText = text => {
	const length = text.length;
	return text.split('').map((char, index) => {
		const angle = (index / length) * 360;
		return (
			<span
				key={index}
				style={{
					transform: `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`,
				}}>
				{char}
			</span>
		);
	});
};

const Footer = () => {
	return (
		<footer className='bg-emerald-500 p-4'>
			<div className='grid grid-cols-2 gap-3 items-center'>
				<div className='pl-4 flex items-center justify-around p-4'>
					<Image
						src={planetXprs}
						alt='Planet Express Logo'
						width={156}
						height={156}
						layout='fixed'
						className='hover:animate-flip-x mr-5'
					/>
					<div className='flex w-full'>
						<Link href='/delivery'>
							<div className='flex items-center justify-center w-36 h-36 relative border-4 border-black bg-amber-50 rounded-full hover:-translate-y-1 hover:drop-shadow-2xl active:drop-shadow-lg active:translate-y-0 transition ease-out duration-300 mr-5'>
								<CircleText text='order delivery' />
								<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black bg-red-600 w-20 h-20 rounded-full'></div>
							</div>
						</Link>

						<Link href='/book'>
							<div className='flex items-center justify-center w-36 h-36 relative border-4 border-black bg-amber-50 rounded-full hover:-translate-y-1 hover:drop-shadow-2xl active:drop-shadow-lg active:translate-y-0 transition ease-out duration-300'>
								<CircleText text='book a table' />
								<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black bg-red-600 w-20 h-20 rounded-full'></div>
							</div>
						</Link>
					</div>
				</div>
				<Navigation layout='column' />
			</div>
			<p className='text-center mt-4'>&copy; 2024 My Next.js Site</p>
		</footer>
	);
};

export default Footer;
