import React from 'react';
import styled from 'styled-components';

function UpcomingApp() {
	const Appointment = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #048ba820;
		box-size: border-box;
		height: 60px;
		width: 400px;
	`;

	const timeSection = styled.div`
		display: flex;
	`;

	return <Appointment></Appointment>;
}

export default UpcomingApp;
