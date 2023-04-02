import React from "react";
import { useParams } from "react-router-dom";
import { getCenterById } from "./../../centers.js";

const CenterDetail = () => {
	

    const { id } = useParams()

    const center = getCenterById(id);


	// const centerData = centers.find((center) => center.id === centerId);


	return (
		<div>			
			<p>{center.name} - {center.address}</p>
		</div>
	)
};

export default CenterDetail;