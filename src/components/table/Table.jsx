import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TableData from './TableData';
import MyPagination from '../pagination/MyPagination';
import Select from '../select/Select';
import TableB from 'react-bootstrap/Table';

const Table = () => {
	const [posts, SetPosts] = useState([]);
	const [loading, SetLoading] = useState(false);
	const [currentPage, SetCurrentPage] = useState(1);
	const [postPerPage, SetPostPerPage] = useState(10);
	useEffect(() => {
		const fetchData = async () => {
			SetLoading(true);
			const res = await axios.get('https://api.npoint.io/fd8712d15683d5a439b3');
			SetPosts(res.data);
			SetLoading(false);
		};
		fetchData();
	}, [currentPage]);
	//
	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumber) => {
		if (pageNumber <= 0 || pageNumber > currentPosts.length) return;
		SetCurrentPage(pageNumber);
	};
	// sort
	const [order, setOrder] = useState('ABC');
	const sorting = (name) => {
		if (order === 'ABC' && name !== '') {
			const sorted = [...posts].sort((a, b) => (a[name] > b[name] ? 1 : -1));
			SetPosts(sorted);
			setOrder('DEF');
			name = '';
		}
		if (order === 'DEF' && name !== '') {
			const sorted = [...posts].sort((a, b) => (a[name] < b[name] ? 1 : -1));
			SetPosts(sorted);
			setOrder('ABC');
		}
	};
	// filter
	const [searchTerm, setSearchItem] = useState('');
	const searchTable = () => {};
	return (
		<Fragment>
			<Select
				sorting={sorting}
				searchTable={searchTable}
				searchTerm={searchTerm}
				setSearchItem={setSearchItem}
			></Select>
			<TableB striped className='table border'>
				<thead>
					<tr className='fw-bolder border-top header-table'>
						<th className='py-3' scope='col'>
							Id
						</th>
						<th className='py-3' scope='col'>
							First Name
						</th>
						<th className='py-3' scope='col'>
							Last Name
						</th>
						<th className='py-3' scope='col'>
							Email
						</th>
						<th className='py-3' scope='col'>
							Gender
						</th>
						<th className='py-3' scope='col'>
							Birthday
						</th>
						<th className='py-3' scope='col'>
							Salary
						</th>
						<th className='py-3' scope='col'>
							Phone
						</th>
					</tr>
				</thead>
				<tbody>
					<TableData
						posts={currentPosts}
						loading={loading}
						searchTerm={searchTerm}
					></TableData>
				</tbody>
			</TableB>
			<MyPagination
				postPerPage={postPerPage}
				totalPosts={posts.length}
				paginate={paginate}
				currentPage={currentPage}
			></MyPagination>
		</Fragment>
	);
};

export default Table;
