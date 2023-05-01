import { Tabs } from "@mantine/core";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { gameScenes } from "./config";

const Layout = () => {

	const navigate = useNavigate();
	const location = useLocation();

	const tabsList = Object.entries(gameScenes).map(([id, scene]) => (
		<Tabs.Tab key={id} value={id}>
			{scene.title}
		</Tabs.Tab>
	));

	const getValue = () => {
		const currentPath = location.pathname.split("/")[1];
		if (!currentPath) return "index";
		return currentPath;
	};

	const changeHandler = (newPath: string) => {
		navigate(gameScenes[newPath].path);
	};

	return (
		<Tabs value={getValue()} onTabChange={changeHandler}>
			<Tabs.List>{tabsList}</Tabs.List>
			<Outlet />
		</Tabs>
	);
};

export { Layout };
