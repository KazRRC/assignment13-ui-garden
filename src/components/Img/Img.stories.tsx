import { Img } from './Img';

const meta = {
  title: 'Components/Img',
  component: Img,
};

export default meta;

export const Default = {
  args: {
    src: 'https://via.placeholder.com/300',
    alt: 'example',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    src: 'https://via.placeholder.com/300',
    alt: 'example',
    disabled: true,
  },
};
