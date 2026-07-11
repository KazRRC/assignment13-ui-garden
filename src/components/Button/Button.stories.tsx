import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: 'Click Me',
    backgroundColor: '#4CAF50',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled',
    backgroundColor: '#4CAF50',
    disabled: true,
  },
};
