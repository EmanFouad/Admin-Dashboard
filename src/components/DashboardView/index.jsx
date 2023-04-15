import React, { useState, useEffect } from 'react'
import DashboardHead from './Head'
import DashboardTabs from './Tabs'
import DashboardTable from './Table'
import DashboardPagination from './Pagination'


const DashboardView = () => {
	const minNumOfRecords = 10;
	const [dataSliceStart, setDataSliceStart] = useState(0);
	const [dataSliceEnd, setDataSliceEnd] = useState(10)
	const [numOfRecord, setNumOfRecord] = useState(minNumOfRecords);
	const [currentPage, setCurrentPage] = useState(1);
	const dataRows = [
		[
			{
				id: 1, value: "1"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "2"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "3"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "325147895"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "7"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "8"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "9"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "10"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "11"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "12"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "13"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "14"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "15"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "16"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		],
		[
			{
				id: 1, value: "17"
			},
			{
				id: 2, value: "الحصر"
			},
			{
				id: 3, value: "status"
			},
			{
				id: 4, value: "20/1/2023"
			},
			{
				id: 5, value: "15/4/2023"
			},
			{
				id: 6, value: "لوريم ايبسوم"
			},
			{
				id: 7, value: "لوريم ايبسوم"
			},
			{
				id: 8, value: "لوريم ايبسوم"
			},
			{
				id: 9, value: "لوريم ايبسوم"
			},
			{
				id: 10, value: "لوريم ايبسوم"
			},
			{
				id: 11, value: "لوريم ايبسوم"
			},
			{
				id: 12, value: "لوريم ايبسوم"
			},
			{
				id: 13, value: "لوريم ايبسوم"
			},
			{
				id: 14, value: "لوريم ايبسوم"
			},
			{
				id: 15, value: "لوريم ايبسوم"
			},
			{
				id: 16, value: "لوريم ايبسوم"
			},
			{
				id: 17, value: "btn"
			},
		]
	]
	useEffect(() => {
		setDataSliceStart(currentPage === 1 ? 0 : ((currentPage - 1) * numOfRecord))
		setDataSliceEnd(currentPage === 1 ? numOfRecord : ((currentPage -1) * numOfRecord) + numOfRecord )
	}, [currentPage, numOfRecord])

	return (
		<div className='p-5 bg-light'>
			<DashboardHead />
			<DashboardTabs />
			<DashboardTable data={dataRows} start={dataSliceStart} end={dataSliceEnd} />
			{
				dataRows.length > minNumOfRecords ?
					<DashboardPagination numOfRecord={numOfRecord} setNumOfRecord={setNumOfRecord} currentPage={currentPage} setCurrentPage={setCurrentPage} data={dataRows} /> : null
			}
		</div>
	)
}

export default DashboardView