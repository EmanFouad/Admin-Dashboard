import React from 'react'
import { Form, Pagination } from 'react-bootstrap';
import "./pagination.css"

const DashboardPagination = ({ numOfRecord, setNumOfRecord, currentPage, setCurrentPage, data, resultsStart, resultsEnd }) => {
	const numOfPagesAndRecordOptions = Math.ceil(data.length / numOfRecord)

	const handleChange = (e) => {
		setNumOfRecord(e.target.value)
	}
	const paginationItems = () =>
		Array.from(
			{ length: numOfPagesAndRecordOptions }, (value, index) => 1 + index
		);
	const recordOptions = () =>
		Array.from(
			{ length: numOfPagesAndRecordOptions }, (value, index) => (index + 1) * 10
		);

	const handleClick = (e) => {
		setCurrentPage(Number(e.target.attributes.value.nodeValue))
	}

	return (
		<div className='pagination-wrapper'>
			<div className='pagination-container d-flex justify-content-between align-items-center'>
				<div className='pages-number-container d-flex align-items-center'>
					<p className='me-3'>عدد النتائج فى الصفحة</p>
					<Form.Select value={numOfRecord} onChange={handleChange}>
						{
							recordOptions().map((option, indx) => (
								<option value={option} key={indx}>{option}</option>
							))
						}
					</Form.Select>
				</div>
				<div className='pagination-items-list'>
					<Pagination>
						{
							currentPage !== 1 ?
								<>
									<Pagination.First onClick={() => setCurrentPage(1)} />
									<Pagination.Prev onClick={() => setCurrentPage((prevPage) => prevPage - 1)} />
								</> : null
						}
						{

							paginationItems().map((item, indx) => (
								<Pagination.Item value={item} key={indx} onClick={handleClick} active={currentPage === item ? true : false}>{item}</Pagination.Item>
							))
						}
						{
							currentPage !== numOfPagesAndRecordOptions ?
								<>
									<Pagination.Next onClick={() => setCurrentPage((prevPage) => prevPage + 1)} />
									<Pagination.Last onClick={() => setCurrentPage(numOfPagesAndRecordOptions)} />
								</> : null
						}
					</Pagination>
				</div>
				<div className='results-number-container'>
					<p>
						النتائج {" "}
						<span>{resultsStart + 1}-{resultsEnd}</span>{" "}
						من أصل {" "}
						<span>{data.length}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default DashboardPagination