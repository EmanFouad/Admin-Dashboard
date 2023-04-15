import React,{useState} from 'react'
import { Form } from 'react-bootstrap';
import { SortDown } from 'react-bootstrap-icons';
import "./headDate.css"

const HeadItemDate = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const handleChange = (e) => {
		setSearchTerm(e.target.value)
	}
	console.log("searchterm", searchTerm)
	return (
		<div className='head-date-wrapper'>
			<div className='head-date-container'>
				<div className='title-wrapper d-flex justify-content-between align-items-center mb-2'>
					<h5 className='fs-6'>تاريخ الشكوى</h5>
					<SortDown size={20} />
				</div>
				<div className='input-wrapper d-flex'>	
					<Form.Control className='me-3' size="md" type="datetime-local" placeholder={"placeholder"} value={searchTerm} onChange={handleChange} />
					<Form.Control size="md" type="datetime-local" placeholder={"placeholder"} value={searchTerm} onChange={handleChange} />
				</div>
			</div>
		</div>
	)
}

export default HeadItemDate