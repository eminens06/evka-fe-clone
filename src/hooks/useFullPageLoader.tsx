import { Spin } from 'antd';
import React, { useState } from 'react';

const useFullPageLoader = (): any => {
  const [loading, setLoading] = useState(false);

  return {
    loader: loading ? (
      <div className="custom-loader">
        <Spin className="custom-spinner" size="large" />
      </div>
    ) : null,
    openLoader: () => {
      setLoading(true);
      document.body.style.overflow = 'hidden';
    },
    closeLoader: () => {
      setLoading(false), (document.body.style.overflow = 'unset');
    },
  };
};

export default useFullPageLoader;
