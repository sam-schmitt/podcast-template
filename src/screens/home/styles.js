import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1), //grid padding
		textAlign: "center",
		// color: theme.palette.text.secondary,
	},
}));
