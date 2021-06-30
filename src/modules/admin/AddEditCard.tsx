import Modal from 'antd/lib/modal/Modal';
import React, { FC, ReactChild } from 'react';

interface Props {
  //children: ReactChild;
  // isModalVisible: boolean;
}

const AddEditCard: FC<Props> = () => {
  return (
    <Modal title="Basic Modal" visible={true}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default AddEditCard;
