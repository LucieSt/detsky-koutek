import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllCenters } from './../../centers.js'

const centers = getAllCenters();

const CentersPage = () => {

	return (
		<div>
			<h1>Pobocky</h1>
			<ul>
				{centers.map((center) => {
					let centerLink = `/centers/${center.id}`;
					return (
							<li key={center.id}><Link to={centerLink}>{center.name}</Link></li>
					)
				})}
			</ul>
			<Outlet />
		</div>
	)
};

export default CentersPage;