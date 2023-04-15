import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';
import { SortDown, X } from 'react-bootstrap-icons';
import "./headDropdown.css";

const HeadItemDropdown = ({ options, title, optionSelected, setOptionSelected }) => {
	const handleChange = (e) => {
		setOptionSelected(e.target.value)
	}
	const handleRemove = () => {
		setOptionSelected("")
	}

	return (
		<div className='head-input-wrapper'>
			<div className='head-input-container'>
				<div className='title-wrapper d-flex justify-content-between align-items-center mb-2'>
					<h5 className='fs-6'>{title}</h5>
					<SortDown size={20} />
				</div>
				<div className='input-wrapper'>
					<InputGroup>
						<Form.Select value={optionSelected} onChange={handleChange}>
							{
								options.map((option, indx) => (
									<option value={option.value} key={indx}>{option.text}</option>
								))
							}
						</Form.Select>
						<Button className='border p-2 bg-transparent' id="button-addon2" onClick={handleRemove}>
							<X size={20} color='#bcbcbc' style={{ visibility: optionSelected ? "initial" : "hidden" }} />
						</Button>
					</InputGroup>

				</div>
			</div>
		</div>
	)
}

export default HeadItemDropdown