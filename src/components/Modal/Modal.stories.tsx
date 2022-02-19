import Modal, { ModalProps } from './Modal';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <Modal.Header>Modal</Modal.Header>
    <Modal.Body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </Modal.Body>
  </Modal>
);

export const Basic = Template.bind({});
Basic.args = {
  show: true,
  handleShow: action('clicked'),
};

export const WithoutOverlay = () => (
  <Modal show={true} handleShow={action('clicked')} overlay={false}>
    <Modal.Header>Modal</Modal.Header>
    <Modal.Body>Description ... </Modal.Body>
  </Modal>
);

export const Opaque = () => (
  <Modal show={true} handleShow={action('clicked')} opaque={true}>
    <Modal.Header>Modal</Modal.Header>
    <Modal.Body>Description ... </Modal.Body>
  </Modal>
);
