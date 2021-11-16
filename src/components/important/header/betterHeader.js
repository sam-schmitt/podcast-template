import React from "react";
import text from "../../../styles/text";
import { useStyles } from "./styles";

export default function BetterHeader() {
	const { betterHeaderText } = useStyles();

	return (
		<div>
			<div className={betterHeaderText}>{text.title}</div>
		</div>
	);
}
