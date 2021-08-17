import { Button, FormInstance, Modal } from 'antd';
import React, { FC, ReactChild, ReactElement } from 'react';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  id?: string;
  form: FormInstance<any>;
  children: ReactChild;
  header: string;
}

const AddEditCard: FC<Props> = ({
  isVisible,
  closeModal,
  children,
  header,
  form,
}) => {
  const onSubmit = () => {
    form.submit();
  };

  return (
    <Modal
      visible={isVisible}
      title={header}
      width={'70%'}
      onCancel={closeModal}
      footer={[
        <Button key="back" onClick={closeModal}>
          Vazgeç
        </Button>,
        <Button key="submit" type="primary" onClick={onSubmit}>
          Kaydet
        </Button>,
      ]}
    >
      {React.cloneElement(children as ReactElement, { close: closeModal })}
    </Modal>
  );
};

export default AddEditCard;
