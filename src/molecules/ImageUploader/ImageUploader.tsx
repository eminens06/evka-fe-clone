import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { message, Upload } from 'antd';

import { InboxOutlined } from '@ant-design/icons';
import { useFragment, useMutation } from 'relay-hooks';
import CREATE_IMAGE_GROUP, {
  ImageUploaderRelayCreateImageMutation,
  ImageUploaderRelayCreateImageMutationResponse,
} from '../../__generated__/ImageUploaderRelayCreateImageMutation.graphql';
import IMAGE_GROUP_FRAGMENT, {
  ImageUploaderFragment,
} from '../../__generated__/ImageUploaderFragment.graphql';
import { getImageGroupByWidth } from '../../utils/helpers';
const { Dragger } = Upload;

interface Props {
  setUploadedImages: Dispatch<SetStateAction<any[]>>;
  imageFragment: any;
  imageFragmentGroup: any;
}

const ImageUploader: FunctionComponent<Props> = ({
  setUploadedImages,
  imageFragment,
  imageFragmentGroup,
}) => {
  const draggerProps = {
    name: 'file',
    multiple: true,
    onChange(info: any) {
      let uploadables;
      if (info.file) {
        uploadables = {
          image: info.file.originFileObj,
        };
      }

      const { status } = info.file;
      if (status === 'uploading') {
        /*createImageGroup({
          variables: {
            input: {
              name: info.file.name,
            },
          },
          uploadables,
        });*/
      }

      if (status === 'done') {
        message.success(`${info.file.name} dosya başarıyla eklendi.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} dosya eklenemedi.`);
      }

      setUploadedImages(info.fileList);
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const defaultFileList = useMemo(() => {
    return imageFragmentGroup?.map((item: any, index: any) => {
      const url = getImageGroupByWidth(item, 320);
      return {
        uid: index.toString(),
        name: item.name,
        status: 'done',
        url: url,
        thumbUrl: url,
      };
    });
  }, [imageFragmentGroup]);

  return (
    <section className="code-box-demo">
      <Dragger
        {...draggerProps}
        listType="picture"
        defaultFileList={defaultFileList}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Sürükle Bırak veya Seç </p>
        <p className="ant-upload-hint">
          Dosyalarınızı tek tek veya toplu olarak yükleyebilirsiniz
        </p>
      </Dragger>
    </section>
  );
};
export default ImageUploader;
