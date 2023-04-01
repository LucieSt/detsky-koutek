import React from "react";
import { Link } from "react-router-dom";
import { getAllCenters } from './../../centers.js'

const centers = getAllCenters();
console.log(centers);

const CentersPage = () => {
	
	return (
		<div>
			<h1>Pobocky</h1>
			{centers.map((center) => {
				let centerLink = `centers/${center.id}`;
				return (
					<>
						<Link key={center.id} to={centerLink}>{center.name}</Link><br/>
						{/* <li key={center.id}>{center.name} - {center.address}</li> */}
					</>
				)
			})}
		</div>
	)
};

export default CentersPage;