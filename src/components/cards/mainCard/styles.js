import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	paper: {
		padding: 10, //grid padding
		textAlign: "center",
		margin: 10,
	},
	labelStyle: {
		fontSize: 18,
		textAlign: "left",
	},
	titleStyle: {
		fontSize: 30,
		fontWeight: "bold",
		margin: 5,
	},
	imageStyle: {
		maxWidth: "60%",
		borderRadius: 5,
	},
}));
