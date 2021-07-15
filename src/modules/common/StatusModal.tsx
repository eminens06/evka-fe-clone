import { Button, ButtonProps, FormInstance, Modal, Row } from 'antd';
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
  status: WorkshopStatus;
  form?: FormInstance<any>;
  customAction?: {
    type: CustomActionTypes;
    onPress: Function;
    text?: string;
    button?: any;
  };
}

const StatusModal: FC<Props> = ({
  isVisible,
  closeModal,
  children,
  header,
  form,
  status,
  progressSteps,
  customAction,
}) => {
  const onSubmit = () => {
    if (form) form.submit();
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

  return (
    <Modal
      visible={isVisible}
      title={header}
      width={'70%'}
      footer={[
        <Button key="back" onClick={closeModal}>
          Vazgeç
        </Button>,
        <Button key="submit" type="primary" onClick={onSubmit}>
          Kaydet
        </Button>,
      ]}
    >
      <>
        <ProgressStep steps={progressSteps} value={status} />
        {React.cloneElement(children as ReactElement, { close: closeModal })}
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
    </Modal>
  );
};

export default StatusModal;
