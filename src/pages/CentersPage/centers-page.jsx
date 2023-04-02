import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllCenters } from './../../centers.js'
import CenterDetail from "../CenterDetail/center-detail.jsx";

const centers = getAllCenters();
console.log(centers);

const CentersPage = () => {

	return (
		<div>
			<h1>Pobocky</h1>
			{centers.map((center) => {
				let centerLink = `/centers/${center.id}`;
				return (
					<>
						<li><Link key={center.id} to={centerLink}>{center.name}</Link></li>

						{/* <CenterDetail name={center.name} address={center.address}/> */}
					</>
				)
			})}
			<Outlet />
		</div>
	)
};

export default CentersPage;