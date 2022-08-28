import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

function CalendarCard() {
	const [date, setDate] = useState(null);
	let today = new Date();
	let month = today.getMonth();
	let year = today.getFullYear();
	let prevMonth = month === 0 ? 11 : month - 1;
	let prevYear = prevMonth === 11 ? year - 1 : year;
	let nextMonth = month === 11 ? 0 : month + 1;
	let nextYear = nextMonth === 0 ? year + 1 : year;

	let minDate = new Date();
	minDate.setMonth(prevMonth);
	minDate.setFullYear(prevYear);

	let maxDate = new Date();
	maxDate.setMonth(nextMonth);
	maxDate.setFullYear(nextYear);

	return (
		<Calendar style={{width: '99%'}} value={date} onChange={(e) => setDate(e.value)} inline showWeek />
	);
}

export default CalendarCard;
