import { render, screen } from "@testing-library/react";
import { PageHeader } from "../pageHeader";

it("should render PageHeader component with all child components", () => {
	render(
		<PageHeader.Root>
			<PageHeader.Title>Title</PageHeader.Title>
			<PageHeader.Description>Description</PageHeader.Description>
			<PageHeader.ActionButton>Button</PageHeader.ActionButton>
		</PageHeader.Root>,
	);

	expect(screen.getByText("Title")).toBeInTheDocument();
	expect(screen.getByText("Description")).toBeInTheDocument();
	expect(screen.getByText("Button")).toBeInTheDocument();
});
