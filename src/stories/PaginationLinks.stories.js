import React from "react";
import { storiesOf } from "@storybook/react";
import PaginationLinks from "../components/PaginationLinks";

storiesOf("Pagination Links", module).add("default", () => (
  <PaginationLinks currentPage="1" numPages="2" />
));
