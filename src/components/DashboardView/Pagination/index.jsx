import React from 'react'
import { Pagination } from 'react-bootstrap';
import "./pagination.css"

const DashboardPagination = () => {
	return (
		<div className='pagination-wrapper'>
			<div className='pagination-container d-flex justify-content-between align-items-center'>
				<div className='pages-number-container'>
					<p>عدد النتائج فى الصفحة</p>
				</div>
				<div className='pagination-items-list'>
					<Pagination>
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item>{1}</Pagination.Item>
						<Pagination.Item>{2}</Pagination.Item>
						<Pagination.Item>{3}</Pagination.Item>
						<Pagination.Item active>{4}</Pagination.Item>
						<Pagination.Item>{5}</Pagination.Item>
						<Pagination.Item disabled>{6}</Pagination.Item>
						<Pagination.Item>{7}</Pagination.Item>
						<Pagination.Item>{8}</Pagination.Item>
						<Pagination.Item>{9}</Pagination.Item>
						<Pagination.Item>{10}</Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</div>
				<div className='results-number-container'>
					<p>
						النتائج
						<span>11-20</span>
						من أصل
						<span>100</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default DashboardPagination