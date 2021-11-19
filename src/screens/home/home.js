import React from "react";
import MainCard from "../../components/cards/mainCard/mainCard";
import Footer from "../../components/important/footer/footer";
import { Grid } from "@material-ui/core";
import Puppy from "../../assets/puppy.jpeg";

export default function Home() {
	return (
		<div className='screen' style={{ alignSelf: "center" }}>
			<div style={{ alignItems: "center", alignSelf: "center" }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{/* <Grid item xs={6}>
						<MainCard
							title={"Blog"}
							label={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
							link={""}
						/>
					</Grid> */}
					<Grid item xs={12}>
						<MainCard
							image={Puppy}
							title={"Podcast"}
							label={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
							link={
								"https://open.spotify.com/show/05t1zAIE3p6wiNb85lvkjH?si=d0c54aaa471347e8"
							}
						/>
					</Grid>
					<Grid item xs={6}>
						<MainCard
							image={Puppy}
							title={"Instagram"}
							label={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
							link={"https://www.instagram.com/good4theplotpodcast/"}
						/>
					</Grid>
					<Grid item xs={6}>
						<MainCard
							image={Puppy}
							title={"TikTok"}
							label={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							}
							link={""}
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
