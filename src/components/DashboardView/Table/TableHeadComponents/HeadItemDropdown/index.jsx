import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';
import { SortDown, X } from 'react-bootstrap-icons';
import "./headDropdown.css";

const HeadItemDropdown = ({ options, title }) => {
	const [selected, setSelected] = useState("");

	const handleChange = (e) => {
		setSelected(e.target.value)
	}
	const handleRemove = () => {
		setSelected("")
	}
	console.log("selected", selected)
	return (
		<div className='head-input-wrapper'>
			<div className='head-input-container'>
				<div className='title-wrapper d-flex justify-content-between align-items-center mb-2'>
					<h5 className='fs-6'>{title}</h5>
					<SortDown size={20} />
				</div>
				<div className='input-wrapper'>
					<InputGroup>
						<Form.Select value={selected} onChange={handleChange}>
							{
								options.map((option, indx) => (
									<option value={option.value} key={indx}>{option.text}</option>
								))
							}
						</Form.Select>
						<Button className='border p-2 bg-transparent' id="button-addon2" onClick={handleRemove}>
							<X size={20} color='#bcbcbc' style={{ visibility: selected ? "initial" : "hidden" }} />
						</Button>
					</InputGroup>

				</div>
			</div>
		</div>
	)
}

export default HeadItemDropdown