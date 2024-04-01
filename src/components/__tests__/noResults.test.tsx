import { render, screen } from "@testing-library/react";
import { NoResults } from "../noResults/noResults";

it("should render correctly when visible is true and all props are provided", () => {
	const title = "Test Title";
	const description = "Test Description";
	const visible = true;

	render(<NoResults title={title} description={description} visible={visible} />);

	expect(screen.getByText(title)).toBeInTheDocument();
	expect(screen.getByText(description)).toBeInTheDocument();
});

it("should render correctly without title if title is empty", () => {
	const title = "";
	const visible = true;

	render(<NoResults title={title} visible={visible} />);

	expect(screen.queryAllByRole("img")).toHaveLength(1);
});

it("should not render if visible is false", () => {
	const title = "Test Title";
	const description = "Test Description";
	const visible = false;

	render(<NoResults title={title} description={description} visible={visible} />);

	expect(screen.queryAllByRole("img")).toHaveLength(0);
});
