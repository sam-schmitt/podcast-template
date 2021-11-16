import React from "react";
import MainCard from "../../components/cards/mainCard/mainCard";
import Footer from "../../components/important/footer/footer";
import { Grid } from "@material-ui/core";

export default function Home() {
	return (
		<div className='screen'>
			<div style={{ alignItems: "center" }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={6}>
						<MainCard
							title={"Blog"}
							label={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
						/>
					</Grid>
					<Grid item xs={6}>
						<MainCard
							title={"Podcast"}
							label={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
						/>
					</Grid>
					<Grid item xs={6}>
						<MainCard
							title={"Instagram"}
							label={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
						/>
					</Grid>
					<Grid item xs={6}>
						<MainCard
							title={"TikTok"}
							label={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
						/>
					</Grid>
				</Grid>
			</div>
			<Footer />
		</div>
	);
}
