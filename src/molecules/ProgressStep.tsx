import { Steps } from 'antd';
import React, { FC, useMemo } from 'react';
import { WorkshopStatus } from '../modules/production/types';
import { ProgressStepValue } from './types';

interface Props {
  steps: ProgressStepValue[];
  value: WorkshopStatus;
}

const ProgressStep: FC<Props> = ({ steps, value }) => {
  const currentStep = useMemo(() => {
    const index = steps.findIndex((step) => step.value === value);
    return index > -1 ? index : 0;
  }, [steps, value]);

  return (
    <Steps size="small" current={currentStep}>
      {steps.map((step) => {
        return <Steps.Step title={step.text} />;
      })}
    </Steps>
  );
};

export default ProgressStep;
