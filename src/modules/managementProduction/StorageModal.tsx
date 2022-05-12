import { Row, Col, Card, Modal, Button, Typography } from 'antd';
import React, { FC, useMemo, useState } from 'react';
import ListInStorage from './ListInStorage';
import { ProductionManagment } from './types';

interface Props {
  data: ProductionManagment;
  onStorage: (id: string) => void;
  isVisible: boolean;
  closeModal: () => void;
}

const StorageModal: FC<Props> = ({
  data,
  onStorage,
  isVisible,
  closeModal,
}) => {
  const [selectedRow, setSelectedRow] = useState<string>('');
  return (
    <Modal
      visible={isVisible}
      title={'Depo'}
      width={'70%'}
      onCancel={closeModal}
      footer={[
        <Button type="primary" onClick={() => onStorage(selectedRow)}>
          Depoda Var
        </Button>,
      ]}
    >
      <Row gutter={24}>
        <ListInStorage
          data={data?.existInStorage || []}
          setSelectedRow={(id: string) => setSelectedRow(id)}
        />
      </Row>
    </Modal>
  );
};

export default StorageModal;
