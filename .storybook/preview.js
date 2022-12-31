import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/shared/Global.styled";
import { MemoryRouter } from "react-router";

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
