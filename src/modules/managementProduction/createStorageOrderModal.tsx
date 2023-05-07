import { Row, Col, Card, Modal, Button, Typography  } from 'antd';
import React, { FC, useMemo, useState } from 'react';
import ProductCardForModal from '../../molecules/ProductCardForModal';

import useFullPageLoader from '../../hooks/useFullPageLoader';  
interface Props {
    data: any;
    isVisible: boolean;
    sendMutation: () => void;
    closeModal: () => void;
    onApprove: (id: string) => void;
  }

const CreateStorageOrderModal: FC<Props> = ({
data,
isVisible,
sendMutation,
closeModal,
onApprove,
}) => {
  const onClickApprove = (id: string) => {
    onApprove(id);
  };


return (
    <Modal
    visible={isVisible}
    title={'Depoya Sipariş Emri Gönder'}
    width={'70%'}
    onCancel={closeModal}
    footer={null}
    >
        <ProductCardForModal
            isDisabled = {false}
        />

    </Modal>
);
};
  
export default CreateStorageOrderModal;
