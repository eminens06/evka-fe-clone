import React, { FunctionComponent, useMemo, useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getImageGroupByWidth } from '../../utils/helpers';

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

interface Props {
  imageFragmentGroup: any[];
  setUploadedImages: any;
}

const PicturesWall: FunctionComponent<Props> = ({
  imageFragmentGroup,
  setUploadedImages,
}) => {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [previewTitle, setPreviewTitle] = useState<string>('');

  const fileList: any = useMemo(() => {
    return imageFragmentGroup?.map((item: any, index: any) => {
      const url = item.url || getImageGroupByWidth(item, 320) || undefined;
      return {
        uid: index.toString(),
        name: item.name,
        status: 'done',
        url: url,
        thumbUrl: url,
        originFileObj: item.originFileObj,
        id: item.id,
      };
    });
  }, [imageFragmentGroup]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    );
  };

  const handleChange = (e: any) => {
    setUploadedImages(e.fileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Görsel Seç</div>
    </div>
  );
  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList?.length >= 10 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default PicturesWall;
