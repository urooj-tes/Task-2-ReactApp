import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import { Select } from "antd";
import { Radio } from "antd";
import { Checkbox, Row, Col } from "antd";
import { Button } from "antd";
import { Modal } from "antd";
import { useState } from "react";
import {Form} from  "antd";
import "./index.css";

const My_Form = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [setValue] = React.useState(1);
  const [infoData, setInfoData] = useState({});

  const onFinish = (updtedValues) => {
   const values = {
     ...updtedValues,
     'date': updtedValues['date'].format('YYYY-MM-DD'),
     'language': updtedValues['language'],
     'colors': updtedValues['colors'],
   } 
    setInfoData(updtedValues);
   showModal();
  };
  const showModal = () => {
    setVisible(true);
  }
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setVisible(false);   
  };
  const languageVal = {
    rules:[{
            required: true,
            message: 'Please select a language.',
        }
      ]
  };
  const colorsVal = {
    rules:[{
            required: true,
            message: 'Please select colors.',
          },
        ]
  };
  const config = {
    rules: [{
      type: 'object', required: true, 
      message: 'Please select date' }],
  };

  return (
    <>
     <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Full Name"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please enter your name',
          },
          {whitespace:true},
        ]}
        hasFeedback
      >
        <Input  type="text"  placeholder="Enter your Full Name"/>
      </Form.Item>

      <Form.Item
        label="CNIC"
        name="cnic"
        rules={[
          {
            required: true,
            message: 'Please enter your CNIC',
          },
          {whitespace:true},
        ]}
        hasFeedback
      >
        <Input type="number" placeholder="----- ------- -" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'Email is not valid.',
          },
          {
            required: true,
            message: 'Please enter your E-mail.',
          },
          {whitespace:true},
        ]}
        hasFeedback
      >
        <Input type="text" placeholder="example@gmail.com" />
      </Form.Item>

      <Form.Item
        label="Mobile No"
        name="mobileNo"
        rules={[
          {
            required: true,
            message: 'Please enter your Phone Number',
          },
          {whitespace:true},
        ]}
        hasFeedback
      >
        <Input type="number"placeholder="+92 --- -------"/>
      </Form.Item>

      <Form.Item
      label="Date of Birth:"
      name="date"
      {...config}
        hasFeedback
      >
          <DatePicker/>
      </Form.Item>

      <Form.Item
       label="Country"
       name="country"
       rules={[
          {
            required: true,
            message: 'Please select a country.',
          },
          {whitespace:true},
        ]}
        hasFeedback
       >
        <Select placeholder="Please Selecet a country.">
          <Select.Option value="Pakistan">Pakistan</Select.Option>
          <Select.Option value="India">India</Select.Option>
          <Select.Option value="Nigeria">Nigeria</Select.Option>
          <Select.Option value="China">China</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
      label="Please Select Gender"
      name="gender"
      rules={[
          {
            required: true,
            message: 'Please select your gender.',
          },
          {whitespace:true},
        ]}
        hasFeedback
      >
       <Radio.Group>
      <Radio value="Male">Male</Radio>
      <Radio value="Female">Female</Radio>
      <Radio value="Other">Other</Radio>
      </Radio.Group>
      </Form.Item>

      <Form.Item
      label="Language"
      name="language"
      {...languageVal}
        hasFeedback
        >
        <Select
          mode="multiple"
          placeholder="Please Select atleast 1 language"
          defaultValue={["English "]}
          optionLabelProp="label"
        >
          <Select.Option value="English " label="English ">
            <div className="demo-option-label-item">
              <span role="img" aria-label="English"></span>
              English
            </div>
          </Select.Option>
          <Select.Option value="Urdu " label="Urdu">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Urdu"></span>
              Urdu
            </div>
          </Select.Option>
          <Select.Option value="Chinese " label="Chinese">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Chinese"></span>
              Chinese
            </div>
          </Select.Option>
          <Select.Option value="Punjabi " label="Punjabi">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Punjabi"></span>
              Punjabi
            </div>
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
      label="Favourite Colors"
      name="colors"
      {...colorsVal}
        hasFeedback
        >
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="Red">Red</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Blue">Blue</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Yellow">Yellow</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Orange">Orange</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Emerland Green">Emerland Green</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>

      </Form.Item>

     

        <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <Modal
        title="Form Data"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}

      >
        <p><b>Full Name:</b> {infoData.fullName}</p>
        <p><b>CNIC:</b> {infoData.cnic}</p>
        <p><b>Email: </b>{infoData.email}</p>
        <p><b>Mobile No:</b> {infoData.mobileNo}</p>
        <p><b>Date of Birth:</b> {infoData.date}</p>
        <p><b>Country:</b> {infoData.country}</p>
        <p><b>Gender: </b> {infoData.gender}</p>
        <p><b>Language: </b>{infoData.language}</p>
        <p><b>Favourite Colors:</b> {infoData.colors}</p>
      </Modal>
    </>
  );
};
export default My_Form;
