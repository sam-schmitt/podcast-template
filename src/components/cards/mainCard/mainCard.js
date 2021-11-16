import React from "react";
import "./mainCard.css";
import { Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import Puppy from "../../../assets/puppy.jpeg";

export default function MainCard({ image, title, label }) {
	const { paper, titleStyle, labelStyle, imageStyle } = useStyles();
	return (
		<Paper className={paper} elevation={2}>
			<img src={Puppy} alt='loading pic' className={imageStyle} />
			<div className={titleStyle}>{title}</div>

			<div className={labelStyle}>{label}</div>
		</Paper>
	);
}
