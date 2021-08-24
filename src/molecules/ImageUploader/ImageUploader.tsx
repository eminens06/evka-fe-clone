import React, { FunctionComponent } from 'react';
import { message, Upload } from 'antd';

import { InboxOutlined } from '@ant-design/icons';
import { useMutation } from 'relay-hooks';
import CREATE_IMAGE_GROUP, {
  ImageUploaderRelayCreateImageMutation,
  ImageUploaderRelayCreateImageMutationResponse,
} from '../../__generated__/ImageUploaderRelayCreateImageMutation.graphql';
import { ImageUploaderFragment } from '../../__generated__/ImageUploaderFragment.graphql';
const { Dragger } = Upload;

interface Props {
  onImageUploadSuccess: (image: ImageUploaderFragment) => void;
}

const ImageUploader: FunctionComponent<Props> = ({ onImageUploadSuccess }) => {
  const [createImageGroup] = useMutation<ImageUploaderRelayCreateImageMutation>(
    CREATE_IMAGE_GROUP,
    {
      onCompleted: (result: any) => {
        if (result.createImageGroup && result.createImageGroup.imageGroup) {
          onImageUploadSuccess(result);
        }
      },
      // onError: standardOnError(setCreatingMsg, setCreateErrors),
    },
  );

  const draggerProps = {
    name: 'file',
    multiple: true,
    onChange(info: any) {
      let uploadables;
      if (info.file) {
        uploadables = {
          image: info.file,
        };
      }
      createImageGroup({
        variables: {
          input: {
            name: info.file.name,
          },
        },
        uploadables,
      });

      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <section className="code-box-demo">
      <Dragger {...draggerProps}>
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
