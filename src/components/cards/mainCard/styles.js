import { makeStyles } from "@material-ui/core";
import theme from "../../../styles/theme";

export const useStyles = makeStyles(() => ({
	paper: {
		padding: 10, //grid padding
		textAlign: "center",
		margin: 10,
		backgroundColor: theme.primary,
	},
	labelStyle: {
		fontSize: 18,
		textAlign: "left",
		color: theme.cardText,
	},
	titleStyle: {
		fontSize: 30,
		fontWeight: "bold",
		margin: 5,
		color: theme.cardText,
	},
	imageStyle: {
		maxWidth: "60%",
		borderRadius: 5,
	},
}));
