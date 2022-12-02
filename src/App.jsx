import { useState } from 'react';
import './App.css';
import Table from './components/table/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='px-4'>
			<Table></Table>
		</div>
	);
}

export default App;
