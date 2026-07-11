import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
};

export default meta;

export const Default = {
  args: {
    content: 'This is text',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    content: 'Disabled text',
    disabled: true,
  },
};
