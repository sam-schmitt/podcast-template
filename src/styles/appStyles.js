import { makeStyles } from "@material-ui/core";
import theme from "../styles/theme";

export const useStyles = makeStyles(() => ({
	app: {
		backgroundColor: theme.primary,
		color: theme.primaryText,
	},
}));
