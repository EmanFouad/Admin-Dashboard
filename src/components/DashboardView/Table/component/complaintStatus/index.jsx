import React from 'react'
import { Button } from 'react-bootstrap';

const ComplaintStatus = ({ label }) => {
	let statusStyle, statusText;
	switch (label) {
		case "closed":
			statusStyle = { backgroundColor: "#d9e9f5", color: "#5fa0d5" }
			statusText = "مغلقة"
			break;
		case "pending":
			statusStyle = { backgroundColor: "#fdf4d4", color: "#f5c62a" }
			statusText = "معلقة"
			break;
		case "moved":
			statusStyle = { backgroundColor: "#e6e6e6", color: "#878787" }
			statusText = "محولة"
			break;
		case "closedReceipt":
			statusStyle = { backgroundColor: "#d5f4e7", color: "#52d29c" }
			statusText = "مغلقة مع قسيمة"
			break;

		default:
			break;
	}
	return (
		<div className='complaint-status-wrapper'>
			<div className='complaint-status-container'>
				<Button className='rounded-pill fw-bold' style={statusStyle}>{statusText}</Button>
			</div>
		</div>
	)
}

export default ComplaintStatus