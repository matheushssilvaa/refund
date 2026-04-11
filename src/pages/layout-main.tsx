import { Outlet } from "react-router";
import MainHeader from "../components/main-header";
import Container from "../components/container";

export default function LayoutMain() {
	return (
		<Container size="md">
			<MainHeader className="mt-9 mb-10" />
			<Outlet />
		</Container>
	);
}