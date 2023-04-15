import React from 'react'
import { Stack, Button } from 'react-bootstrap';
import { ArrowLeftShort } from 'react-bootstrap-icons';
import "./btnView.css";

const BtnView = () => {
	return (
		<div className='btn-view-Wrapper'>
			<div className='btn-view-container'>
				<Button bsPrefix='btn btn-main-active' className='rounded-pill fw-bold'>
					<Stack direction="horizontal" gap={2}>
						<p className='fw-bold content'>كل التفاصيل</p>
						<ArrowLeftShort color="#fff" size={20} />
					</Stack>
				</Button>
			</div>
		</div>
	)
}

export default BtnView