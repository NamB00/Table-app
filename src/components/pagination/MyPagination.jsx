import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const MyPagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
	let active = currentPage;
	let items = [];
	for (
		let number = 1;
		number <= Math.ceil(totalPosts / postPerPage);
		number++
	) {
		items.push(
			<Pagination.Item
				onClick={() => paginate(number)}
				key={number}
				active={number === active}
			>
				{number}
			</Pagination.Item>
		);
	}
	return (
		<Pagination className='d-flex justify-content-center '>
			<Pagination.Prev onClick={() => paginate(currentPage - 1)} />
			<Pagination>{items}</Pagination>
			<Pagination.Next onClick={() => paginate(currentPage + 1)} />
		</Pagination>
	);
};

export default MyPagination;
