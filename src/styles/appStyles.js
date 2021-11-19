import { makeStyles } from "@material-ui/core";
import theme from "../styles/theme";

export const useStyles = makeStyles(() => ({
	app: {
		backgroundColor: theme.background,
		color: theme.text,
		alignItems: "center",
	},
}));
