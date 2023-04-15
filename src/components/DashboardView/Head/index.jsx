import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import "./head.css"

const DashboardHead = () => {
	const [selected, setSelected] = useState("");

	const handleChange = (e) => {
		setSelected(e.target.value)
	}
	return (
		<div className='dashboard-head-wrapper mb-4'>
			<div className='dashboard-head-container d-flex justify-content-between align-items-center'>
				<h2>إدارة الشكاوي</h2>
				<Form.Select value={selected} onChange={handleChange}>
					<option value="ar">العربية</option>
					<option value="en">EN</option>
				</Form.Select>
			</div>
		</div>
	)
}

export default DashboardHead