import {
  Input,
  Form,
  Row,
  Col,
  message,
  FormInstance,
  Select,
  Button,
} from 'antd';
import React, { FC, useEffect } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from 'relay-hooks';
import { SingleSelect } from '../../../atoms';
import { RoleOptions, RoleTexts } from '../../../layout/roles';
import CREATE_USER, {
  UsersRelayCreateUserMutation,
} from '../../../__generated__/UsersRelayCreateUserMutation.graphql';
import UPDATE_USER, {
  UsersRelayUpdateUserMutation,
} from '../../../__generated__/UsersRelayUpdateUserMutation.graphql';
import { UserProps } from './ListUsers';
import DELETE_USER, {
  UsersRelayDeleteMarketplaceMutation,
} from '../../../__generated__/UsersRelayDeleteMarketplaceMutation.graphql';
import useFullPageLoader from '../../../hooks/useFullPageLoader';

const PASSWORD_MAPPER = '**********';

export interface UserFormProps {
  initialValues?: UserProps;
  form: FormInstance<any>;
  onSuccess: Function;
}

const roleMapper = (roles: string) => {
  const options = [];
  const rolesArr = roles.split(',');
  rolesArr.forEach((item) => {
    const key = Object.keys(RoleTexts).find(
      (key: any) => RoleTexts[key] === item,
    );
    if (!key) return;
    options.push(key);
  });
  return options;
};

export const mapFormData = (data: UserProps | undefined): any => {
  if (!data) return;
  const { fullName } = data;
  const name = fullName.split(' ');
  return {
    firstName: name[0],
    lastName: name[0],
    email: data.email,
    id: data.id || undefined,
    password: data.password ? PASSWORD_MAPPER : undefined,
    roles: roleMapper(data.roles),
  };
};

const UserForm: FC<UserFormProps> = (props) => {
  const { form, initialValues } = props;
  const { loader, openLoader, closeLoader } = useFullPageLoader();

  const [createUser] = useMutation<UsersRelayCreateUserMutation>(CREATE_USER, {
    onError: (error: any) => {
      closeLoader();
      message.error('Hata! ', error.response.errors[0].message);
    },
    onCompleted: (res) => {
      closeLoader();
      message.success('Kullanıcı başarıyla oluşturuldu');
      props.onSuccess();
      props.close();
    },
  });

  const [updateUser] = useMutation<UsersRelayUpdateUserMutation>(UPDATE_USER, {
    onError: (error: any) => {
      closeLoader();
      message.error(
        'Hata! ',
        error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
      );
    },
    onCompleted: (res) => {
      closeLoader();
      message.success('Kullanıcı başarıyla güncellendi');
      props.onSuccess();
      props.close();
    },
  });

  const [deleteUser] = useMutation<UsersRelayDeleteMarketplaceMutation>(
    DELETE_USER,
    {
      onError: (error: any) => {
        closeLoader();
        message.error(
          'Hata! ',
          error?.response?.errors[0]?.message || 'Bilinmeyen bir hata oluştu',
        );
      },
      onCompleted: (res) => {
        closeLoader();
        message.success('Kullanıcı başarıyla silindi');
        props.onSuccess();
        props.close();
      },
    },
  );

  useEffect(() => form.resetFields(), [initialValues]);

  const onFormFinish = (values: any) => {
    openLoader();
    const finalValues = {
      ...values,
      password:
        values.password === PASSWORD_MAPPER ? undefined : values.password,
      id: formattedInitialValues?.id,
    };
    if (initialValues) {
      updateUser({
        variables: {
          input: {
            ...finalValues,
          },
        },
      });
      return;
    }
    createUser({
      variables: {
        input: {
          ...finalValues,
        },
      },
    });
  };

  const onPressDelete = () => {
    openLoader();
    const id = formattedInitialValues?.id;
    if (!id) return;
    deleteUser({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  const formattedInitialValues = mapFormData(initialValues);

  return (
    <Form
      form={form}
      name="basic"
      layout="vertical"
      initialValues={formattedInitialValues}
      onFinish={onFormFinish}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label="E-Mail"
            name="email"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Şifre"
            name="password"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="firstName"
            label="Adı"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="lastName"
            label="Soyadı"
            rules={[{ required: true, message: 'Zorunlu alan' }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Col span={12}>
        <Form.Item
          name="roles"
          label="Roller"
          rules={[{ required: true, message: 'Zorunlu alan' }]}
        >
          <SingleSelect
            options={RoleOptions}
            multiple
            defaultValue={formattedInitialValues?.roles}
          />
        </Form.Item>
      </Col>
      {initialValues && (
        <Row gutter={24}>
          <Col offset={9}>
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={onPressDelete}
            >
              Kullanıcı Sil
            </Button>
          </Col>
        </Row>
      )}
      {loader}
    </Form>
  );
};

export default UserForm;
