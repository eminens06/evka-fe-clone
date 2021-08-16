import { Button, ButtonProps, FormInstance, Modal, Row, Tag } from 'antd';
import { FilePdfOutlined, CaretRightOutlined } from '@ant-design/icons';
import React, { FC, ReactChild, ReactElement, useMemo } from 'react';
import ProgressStep from '../../molecules/ProgressStep';
import { ProgressStepValue } from '../../molecules/types';
import { WorkshopStatus } from '../production/types';

type CustomActionTypes = 'revert' | 'bluePrint';

type CustomActionProps = ButtonProps & {
  text: string;
  type?: CustomActionTypes;
  onPress?: any;
};

const Actions: Record<CustomActionTypes, CustomActionProps> = {
  revert: {
    text: 'Tekrar Gönder',
    danger: true,
    icon: <CaretRightOutlined />,
  },
  bluePrint: {
    text: 'Şablonu Göster',
    icon: <FilePdfOutlined />,
  },
};

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  children: ReactChild;
  header: string;
  progressSteps: ProgressStepValue[];
  modalData: any;
  form?: FormInstance<any>;
  onChangeStatus: Function;
  customAction?: {
    type: CustomActionTypes;
    onPress: Function;
    text?: string;
    button?: any;
  };
  saveTextArray: Record<any, string>;
}

const StatusModal: FC<Props> = ({
  isVisible,
  closeModal,
  children,
  header,
  form,
  modalData,
  onChangeStatus,
  progressSteps,
  customAction,
  saveTextArray,
}) => {
  const onSubmit = () => {
    if (form && modalData.status === WorkshopStatus.READY) form.submit();
    else {
      onChangeStatus();
    }
  };

  const buttonProps: CustomActionProps | undefined = useMemo(() => {
    if (customAction) {
      return {
        ...Actions[customAction.type],
        ...customAction,
      };
    }
    return undefined;
  }, [customAction]);

  const status = modalData.status as WorkshopStatus;
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
        <Button type="primary" onClick={onSubmit}>
          {saveTextArray[status]}
        </Button>,
      ]}
    >
      {isVisible && (
        <>
          <ProgressStep steps={progressSteps} value={status} />
          {React.cloneElement(children as ReactElement, { close: closeModal })}
          {modalData.notes && (
            <Tag color="red" className="note-tag">
              {modalData.notes}
            </Tag>
          )}
          {customAction && buttonProps && (
            <Row style={{ justifyContent: 'center', marginTop: 20 }}>
              <Button
                {...buttonProps}
                icon={buttonProps.icon}
                onClick={buttonProps.onPress}
                type="primary"
              >
                {buttonProps.text}
              </Button>
            </Row>
          )}
        </>
      )}
    </Modal>
  );
};

export default StatusModal;
