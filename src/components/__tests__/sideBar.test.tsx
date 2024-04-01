import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SideBar } from "../sideBar";

it("should render SideBarRoot correctly with children", () => {
	render(
		<BrowserRouter>
			<SideBar.Root>
				<SideBar.Button to="/home">Home</SideBar.Button>
				<SideBar.Button to="/about">About</SideBar.Button>
			</SideBar.Root>
		</BrowserRouter>,
	);

	expect(screen.getByText("Home")).toBeInTheDocument();
	expect(screen.getByText("About")).toBeInTheDocument();
});

it("should change button color when active", () => {
	render(
		<BrowserRouter>
			<SideBar.Root>
				<SideBar.Button to="/">Home</SideBar.Button>
				<SideBar.Button to="/about">About</SideBar.Button>
			</SideBar.Root>
		</BrowserRouter>,
	);

	const homeButton = screen.getByText("Home");
	const aboutButton = screen.getByText("About");

	expect(homeButton).toHaveClass("text-foreground");
	expect(aboutButton).toHaveClass("text-muted-foreground");
});
