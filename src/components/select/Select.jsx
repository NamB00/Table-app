import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useState } from 'react';

const Select = ({ sorting, searchTable, setSearchItem, searchTerm }) => {
	const [value, setValue] = useState('');

	return (
		<div className='mb-2'>
			<div className='my-4 d-flex justify-content-center title'>
				A simple web app
			</div>
			<div className='d-flex'>
				<div className='w-50 d-flex'>
					<Form.Select
						id='options'
						aria-label='Default select example'
						className='w-50 me-3 select-form selectpicker'
						onClick={(e) => {
							sorting(e.target.value);
							setValue(e.target.value);
						}}
					>
						<option value=''>Select field to sort</option>
						<option value='id'>Id</option>
						<option value='firstName'>First Name</option>
						<option value='lastName'>Last Name</option>
						<option value='email'>Email</option>
						<option value='birthday'>Birthday</option>
						<option value='salary'>Salary</option>
					</Form.Select>
					<div className='d-flex align-items-center'>
						<Button
							className='px-2 py-1 button-sort'
							onClick={() => sorting(value)}
						>
							<FaAngleUp />
							<FaAngleDown />
						</Button>
					</div>
				</div>
				<div className='w-25 search'>
					<Form className='d-flex'>
						<Form.Control
							type='search'
							placeholder='Search'
							className='me-2'
							aria-label='Search'
							onChange={(e) => searchTable(setSearchItem(e.target.value))}
						/>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Select;
