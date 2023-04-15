import React, { useState } from 'react'
import { Stack, Button } from 'react-bootstrap';
import { Funnel } from 'react-bootstrap-icons';
import "./tabs.css"

const DashboardTabs = () => {
	const [activeTab, setActiveTab] = useState(1)
	const handleActiveTab = (tabId) => {
		setActiveTab(tabId)
	}
	const tabItems = [
		{ id: 1, title: "الكل" },
		{ id: 2, title: "الإفتراضي" },
		{ id: 3, title: "الحصر" },
		{ id: 4, title: "المكافحة" },
	]
	return (
		<div className='dashboard-tabs-wrapper mb-2'>
			<div className='dashboard-tabs-container d-flex justify-content-between align-items-center'>
				<ul className='tabs-list d-flex'>
					{
						tabItems.map((tab, indx) => (
							<li key={indx} className='me-3' onClick={() => handleActiveTab(tab.id)}>
								<Button bsPrefix={`btn btn-main-default ${tab.id === activeTab ? "btn-main-active" : ""}`}>{tab.title}</Button>
							</li>
						))
					}
				</ul>
				<Button bsPrefix='btn btn-lightmain'>
					<Stack direction="horizontal" gap={3}>
						<Funnel color="#589ad2" size={20} />
						<p className='fs-6 fw-bold'>إلغاء جميع التصفيات</p>
					</Stack>
				</Button>
			</div>
		</div>
	)
}

export default DashboardTabs