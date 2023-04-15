import React from 'react'
import ComplaintStatus from '../complaintStatus'
import BtnView from '../BtnView'

const ComponentWrapper = ({ componentType, label }) => {
	return (
		<>
			{
				componentType === "status" ?
					<ComplaintStatus label={label} /> : componentType === "btn" ? <BtnView /> : null
			}
		</>
	)
}

export default ComponentWrapper