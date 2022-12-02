import React from 'react';

const TableData = ({ posts, loading, searchTerm }) => {
	return (
		<>
			{posts.length > 0 &&
				posts
					.filter((val) => {
						if (searchTerm === '') {
							return val;
						} else if (
							val.firstName
								.toString()
								.toLowerCase()
								.includes(searchTerm.toLowerCase()) ||
							val.lastName
								.toString()
								.toLowerCase()
								.includes(searchTerm.toLowerCase()) ||
							val.email
								.toString()
								.toLowerCase()
								.includes(searchTerm.toLowerCase()) ||
							val.phone
								.toString()
								.toLowerCase()
								.split('-')
								.join('')
								.includes(searchTerm.toLowerCase())
						) {
							return val;
						}
					})
					.map((item, index) => (
						<tr className='info' key={item.id}>
							<th className='py-2 fw-bolder' scope='row'>
								{item.id}
							</th>
							<td className='py-2'>{item.firstName}</td>
							<td className='py-2'>{item.lastName}</td>
							<td className='py-2'>{item.email}</td>
							<td className='py-2'>{item.gender}</td>
							<td className='py-2'>
								{new Date(item.birthday).toLocaleDateString('en-GB', {
									timeZone: 'UTC',
								})}
							</td>
							<td className='py-2'>{item.salary}</td>
							<td className='py-2'>(+84) {item.phone.split('-').join('')}</td>
						</tr>
					))}
		</>
	);
};

export default TableData;
