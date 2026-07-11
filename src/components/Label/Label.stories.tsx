import { Label } from './Label';

const meta = {
  title: 'Components/Label',
  component: Label,
};

export default meta;

export const Default = {
  args: {
    text: 'Label Text',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Disabled Label',
    disabled: true,
  },
};
