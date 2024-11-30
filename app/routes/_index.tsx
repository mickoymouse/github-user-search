import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Github User - Search" },
		{ name: "description", content: "Welcome to github user search app!" },
	];
};

export default function Index() {
	return <div>home</div>;
}
