import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import { Select } from "antd";
import { Radio } from "antd";
import { Checkbox, Row, Col } from "antd";
import { Button } from "antd";
import { Modal } from "antd";
import { useState, useEffect, useCallback} from "react";
import moment from 'moment';
import {Form} from  "antd";
import "./index.css";


const My_Form = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const [infoData, setInfoData] = useState({});
  const [welcomeMessage, setWelcomeMessage]= useState("");
  const [registerMessage, setRegisterMessage] = useState("false");
  const [thanksMessage, setThanksMessage] = useState('false');

    useEffect(()=>{
      setWelcomeMessage("Welcome to the form!");
      setRegisterMessage(false)
      return()=>{
        console.log('Thank You');
      }
    }, []);

  const onFinish = useCallback((updtedValues) => {
   const values = { 
     ...updtedValues,
     'language': updtedValues['language'],
     'colors': updtedValues['colors'],
   }
     setInfoData(updtedValues);
     showModal();
     setRegisterMessage(true);
  }, [infoData]);

  const showModal = useCallback((values) => {
    setVisible(true);
  }, [visible]);

  const handleOk = useCallback(() => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setThanksMessage(true);
    }, 2000);
  }, [confirmLoading]);

  const handleCancel = useCallback( () => {
    setVisible(false);   
  }, [visible]);

  const languageVal = useCallback({
    rules:[{
            required: true,
            message: 'Please select a language.',
        },
      ]
  },[infoData]);

  const colorsVal = useCallback( {
    rules:[{
            required: true,
            message: 'Please select colors.',
          },
        ]
  },[infoData]);

  const dateVal = useCallback({
    rules: [{
      type: 'object', required: true, 
      message: 'Please select date' }],
  }, [infoData]);
  
  return (
    <>
    {<h1>{welcomeMessage}</h1>}
    {/* {thanksMessage && <h1>Thank you</h1>} */}
    {registerMessage && <h1>Form is submitted successfully</h1>}
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
        name="fullName"
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
          { min:13,
          message: 'Please enter 13 digit number. It is less than 13'},
          {max: 13,
            message: 'Please enter 13 digit number. It is greater than 13'},
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
        <Input type="email" placeholder="example@gmail.com" />
      </Form.Item>
      <Form.Item
        label="Mobile No"
        name="mobileNo"
        rules={[
          {
            required: true,
            message: 'Please enter your Phone Number',
          },
          { min:10,
          message: 'Please enter 10 digit number. It is less than 10'
          },
          {max: 10,
            message: 'Please enter 10 digit number. It is greater than 10'
            },
          {whitespace:true},
        ]}
        hasFeedback
      >
        <Input type="number" placeholder="+92 --- -------"/>
      </Form.Item>
      <Form.Item
      label="Date of Birth:"
      name="date"
      {...dateVal}
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
          placeholder="Please Select languages"
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
        <p><b>Full Name:</b>{infoData.fullName}</p>
        <p><b>CNIC:</b> {infoData.cnic}</p>
        <p><b>Email: </b>{infoData.email}</p>
        <p><b>Mobile No:</b> {infoData.mobileNo}</p>
        <p><b>Date of Birth:</b> {moment(infoData.date).format('YYYY-MM-DD')}</p>
        <p><b>Country:</b> {infoData.country}</p>
        <p><b>Gender: </b> {infoData.gender}</p>
        <p><b>Language: </b>{infoData.language}</p>
        <p><b>Favourite Colors:</b> {infoData.colors}</p>
      </Modal>
    </>
  );
};
export default My_Form;
