import { Button, Image, Popover, Row, Typography } from 'antd';
import React, { FC } from 'react';
import { CameraOutlined } from '@ant-design/icons';

interface Props {
  images: any[];
  text: string;
}
const ImagePopover: FC<Props> = ({ images, text }) => {
  return (
    <Row className="note" style={{ alignItems: 'center' }}>
      <Popover
        content={
          <div style={{ width: 80, height: 80, overflow: 'hidden' }}>
            <Image.PreviewGroup>
              {images.map((item: any) => (
                <Image
                  onClick={(event) => event.stopPropagation()}
                  width={80}
                  height={80}
                  src={item}
                />
              ))}
            </Image.PreviewGroup>
          </div>
        }
        trigger="click"
        style={{ width: 80, overflow: 'hidden' }}
      >
        <Button
          size="small"
          shape="circle"
          icon={<CameraOutlined />}
          onClick={(event) => event.stopPropagation()}
        />
      </Popover>
      <Typography.Text style={{ marginLeft: 10 }}>{text}</Typography.Text>
    </Row>
  );
};

export default ImagePopover;
