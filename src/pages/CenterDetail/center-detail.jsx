import React from "react";
import { useParams } from "react-router-dom";
import { getCenterById } from "./../../centers.js";

const CenterDetail = () => {

	const { id } = useParams()
	const center = getCenterById(id);
	const openHours = center.open;

	return (
		<div>
			<h1>{center.name}</h1>
			<p>Adresa: {center.address}</p>
			<p>{center.info}</p>
			<h3>Oteviraci doba:</h3>
			<ul>
				{Object.keys(openHours).map((day) => {
					return <li key={day}>{day}: {openHours[day]}</li>
				})}
			</ul>
		</div>
	)
};

export default CenterDetail;