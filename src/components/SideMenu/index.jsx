import React, { useState } from 'react'
import { Stack } from 'react-bootstrap';
import { Icon } from './Icon';
import "./sidemenu.css"
import User from './User';

const SideMenu = () => {
	const [activeItem, setActiveItem] = useState(1)
	const handleActiveItem = (itemId) => {
		setActiveItem(itemId)
	}
	const sideMenuItems = [
		{ id: 1, iconName: "InfoCircle", title: "إدارة الشكوى" },
		{ id: 2, iconName: "HouseDoor", title: "إدارة التجار الممولين" },
		{ id: 3, iconName: "Clock", title: "سجلات النظام" },
		{ id: 4, iconName: "People", title: "إدارة المستخدمين" },
		{ id: 5, iconName: "Gear", title: "إعدادات النظام" },
	]
	return (
		<div className='sidemenu-wrapper'>
			<div className='sidemenu-container'>
				<div className='sidemenu-head d-flex justify-content-between align-items-center px-1 py-3 border-bottom'>
					<div className='logo-wrap w-75'>
						<img className='w-100' src="/assets/images/logo.png" alt="logo" />
					</div>
					<Icon
						iconName="List"
						size={30} color='#72abda' className='icon-hover'
					/>
				</div>
				<nav className='sidemenu-body'>
					<ul className='p-3'>
						{
							sideMenuItems.map((item, indx) => (
								<li className={`${item.id === activeItem ? "active-sidemenuItem-bg" : ""}`} key={indx} onClick={() => handleActiveItem(item.id)}>
									<div className='px-4 py-3'>
										<Stack direction="horizontal" gap={3}>
											<Icon
												iconName={item.iconName}
												size={20} color='#72abda'
											/>
											<p className='fs-6 fw-bold' style={{ color: item.id === activeItem ? "#4791cf" : "#3e3e3e" }}>{item.title}</p>
										</Stack>
									</div>
								</li>
							))
						}
					</ul>
					<User />
				</nav>
			</div>
		</div>
	)
}

export default SideMenu