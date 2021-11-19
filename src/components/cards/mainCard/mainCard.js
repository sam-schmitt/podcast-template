import React from "react";
import "./mainCard.css";
import { Paper, Link } from "@material-ui/core";
import { useStyles } from "./styles";
import Puppy from "../../../assets/puppy.jpeg";

export default function MainCard({ image, title, label, link }) {
	const { paper, titleStyle, labelStyle, imageStyle } = useStyles();
	return (
		<Paper className={paper} elevation={2}>
			<a href={link} target='_blank' rel='noreferrer'>
				<img src={image} alt='loading pic' className={imageStyle} />
			</a>
			<div className={titleStyle}>{title}</div>

			<div className={labelStyle}>{label}</div>
		</Paper>
	);
}
