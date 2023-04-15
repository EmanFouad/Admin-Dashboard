import React from 'react'
import DashboardHead from './Head'
import DashboardTabs from './Tabs'
import DashboardTable from './Table'
import DashboardPagination from './Pagination'


const DashboardView = () => {
  return (
	<div className='p-5 bg-light'>
		<DashboardHead />
		<DashboardTabs />
		<DashboardTable />
		<DashboardPagination />
	</div>
  )
}

export default DashboardView