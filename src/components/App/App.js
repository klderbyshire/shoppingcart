import './App.css';
import ProductTile from '../ProductTile/ProductTile';
import { useEffect, useState } from 'react';

function App() {
	const [ data, setData ] = useState();

	//Why is this firing twice? Can we makea conditional rendor so it doesn't?

	useEffect(() => {
		async function getData() {
			let response = await fetch('https://fakestoreapi.com/products');
			let dataResponse = await response.json();
			setData(dataResponse);
			// console.log('dataResponse', dataResponse);
		}
		getData();
	}, []);

	console.log('data', data);

	return (
		<div className="App">
			<h3>Funky-Fit</h3>
		</div>
	);
}

export default App;

// fetch the data from the API, use Effect to get the data on page load

// save the data in a useState

// map over the data and create the new tiles
