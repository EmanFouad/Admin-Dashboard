import React from 'react'
import { Table } from 'react-bootstrap';
import HeadItemInput from './TableHeadComponents/HeadItemInput';
import HeadItemDropdown from './TableHeadComponents/HeadItemDropdown';
import HeadItemDate from './TableHeadComponents/HeadItemDate';
import ComplaintStatus from './component/complaintStatus';
import BtnView from './component/BtnView';

const DashboardTable = () => {
	const optionsComplaintDepartment = [
		{ value: '', text: 'أختر القسم المختص بالشكوى' },
		{ value: 'inventory', text: 'الحصر' },
		{ value: 'default', text: 'الإفتراضى' },
		{ value: 'AntiEvasion ', text: 'المكافحة' },
	];
	const optionsComplaintStatus = [
		{ value: '', text: 'أختر حالة الشكوى' },
		{ value: 'closed', text: 'مغلقة' },
		{ value: 'pending', text: 'معلقة' },
		{ value: 'moved', text: 'محولة' },
		{ value: 'closedReceipt ', text: 'مغلقة مع قسيمة' },
	];
	const optionsTime = [
		{ value: '', text: 'أختر حالة الشكوى' },
		{ value: 'closed', text: 'مغلقة' },
		{ value: 'pending', text: 'معلقة' },
		{ value: 'moved', text: 'محولة' },
		{ value: 'closedReceipt ', text: 'مغلقة مع قسيمة' },
	];
	const optionsCities = [
		{ value: '', text: 'أختر حالة الشكوى' },
		{ value: 'closed', text: 'مغلقة' },
		{ value: 'pending', text: 'معلقة' },
		{ value: 'moved', text: 'محولة' },
		{ value: 'closedReceipt ', text: 'مغلقة مع قسيمة' },
	];
	const optionsAreas = [
		{ value: '', text: 'أختر حالة الشكوى' },
		{ value: 'closed', text: 'مغلقة' },
		{ value: 'pending', text: 'معلقة' },
		{ value: 'moved', text: 'محولة' },
		{ value: 'closedReceipt ', text: 'مغلقة مع قسيمة' },
	];
	return (
		<div className='table-wrapper mb-5'>
			<div className='table-container'>
				<Table responsive>
					<thead>
						<tr>
							<th>
								<HeadItemInput inputType="number" title="رقم الشكوى" placeholder="أدخل رقم الشكوى" />
							</th>
							<th>
								<HeadItemDropdown options={optionsComplaintDepartment} title="القسم المختص بالشكوى" />
							</th>
							<th>
								<HeadItemDropdown options={optionsComplaintStatus} title="حالة الشكوى" />
							</th>
							<th colSpan={2}>
								<HeadItemDate />
							</th>
							<th>
								<HeadItemDropdown options={optionsTime} title="وقت الشكوى" />
							</th>
							<th>
								<HeadItemInput inputType="text" title="اسم التاجر" placeholder="أدخل اسم التاجر " />
							</th>
							<th>
								<HeadItemDropdown options={optionsCities} title="المدينة" />
							</th>
							<th>
								<HeadItemDropdown options={optionsAreas} title=" المنطقة" />
							</th>
							<th>
								<HeadItemInput inputType="text" title="اسم فرع التاجر" placeholder="أدخل اسم فرع التاجر " />
							</th>
							<th>
								<HeadItemInput inputType="text" title="RIN" placeholder="أدخل RIN" />
							</th>
							<th>
								<HeadItemDropdown options={optionsCities} title="حوافز مسجلة" />
							</th>
							<th>
								<HeadItemDropdown options={optionsCities} title="نوع الضريبة" />
							</th>
							<th>
								<HeadItemInput inputType="text" title="نوع الشكوى" placeholder="أدخل نوع الشكوى " />
							</th>
							<th>
								<HeadItemInput inputType="text" title="اسم العميل" placeholder="أدخل اسم العميل " />
							</th>
							<th>
								<HeadItemInput inputType="text" title="رقم هاتف العميل" placاسمeholder="أدخل رقم الهاتف المحمول" />
							</th>
							<th>
								<HeadItemInput inputType="text" title="الرقم القومى" placeholder="أدخل الرقم القومى " />
							</th>
							<th className='align-top'>
								<p>المزيد</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>325147895</td>
							<td>الحصر</td>
							<td>
								<ComplaintStatus label="pending" />
							</td>
							<td>20/1/2023</td>
							<td>15/4/2023</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>لوريم ايبسوم</td>
							<td>
								<BtnView />
							</td>
						</tr>
					
					</tbody>
				</Table>
			</div>
		</div>
	)
}

export default DashboardTable