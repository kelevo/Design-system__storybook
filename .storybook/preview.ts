import type { Preview } from "@storybook/html";

const customViewports = {
  smallPhone: {
    name: 'smallPhone',
    styles: {
      width: '320px',
      height: '568px',
    }
  },
  mediumPhone: {
    name: 'smallPhone',
    styles: {
      width: '400px',
      height: '600px',
    }
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'smallPhone'
    }
  },
};

export default preview;
