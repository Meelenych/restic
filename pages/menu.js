import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
	const initialDishes = [];

	const [dishes, setDishes] = useState(initialDishes);

	useEffect(() => {
		axios
			.get('http://localhost:3001/dishes')
			.then(res => {
				setDishes(res.data);
			})
			.catch(error => {
				console.error('Error fetching dishes:', error);
			});
	}, []);
	console.log(dishes);

	return (
		<Layout>
			<h1>Menu Page</h1>
			<ul>
				{dishes.map(dish => (
					<li key={dish.id}>
						<p> Item {dish.id}: {dish.title}</p>
            <p>Description: {dish.description}</p>
            <p>Price: ${dish.price}</p>
            <p>Category: {dish.category}</p>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default Menu;
