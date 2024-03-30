import { PageHeaderActionButton } from "./pageHeaderActionButton";
import { PageHeaderDescription } from "./pageHeaderDescription";
import { PageHeaderRoot } from "./pageHeaderRoot";
import { PageHeaderTitle } from "./pageHeaderTitle";

export const PageHeader = {
	Root: PageHeaderRoot,
	Title: PageHeaderTitle,
	Description: PageHeaderDescription,
	ActionButton: PageHeaderActionButton,
} as const;
