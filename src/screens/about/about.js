import React from "react";
import Footer from "../../components/important/footer/footer";

export default function Home() {
	return (
		<div className='screen'>
			<h1>About</h1>
			<div
				style={{
					display: "flex",
					height: "90vh",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Footer />
			</div>
		</div>
	);
}
