import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { matchPath, Route } from 'react-router-dom';

import OtherCodyList from './OtherCodyList';
import OtherCodyPhoto from '../components/CodyPhoto';
import OtherCodyDetail from '../CodyDetail';
import Play2_MainPage from '../components/Play2_MainPage';

function OtherCody({ match }) {
	return (
		<>
			<Play2_MainPage startNumber="3" tab1={false} tab2={false} tab3={true} tab4={false} />
			<Route exact path={match.path} component={OtherCodyList} />
			<Route
				path={`${match.path}/:id`}
				render={(props) => <OtherCodyDetail {...props} isOther />}
			/>
		</>
	);
}

export default OtherCody;
