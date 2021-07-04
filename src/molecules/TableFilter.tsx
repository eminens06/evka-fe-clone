import { Card, Col, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import Text from 'antd/lib/typography/Text';
import React, { FC } from 'react';
import './molecules.style.less';

interface Props {
  withFilter?: boolean;
}

const TableFilter: FC<Props> = () => {
  const onSearch = () => {
    console.log('On search !!');
  };

  return (
    <div className="table-filter">
      <Row>
        <Col className="table-filter-label">
          <Text>Arama Yap:</Text>
        </Col>
        <Col>
          <Search
            placeholder="Tabloda Ara"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TableFilter;
