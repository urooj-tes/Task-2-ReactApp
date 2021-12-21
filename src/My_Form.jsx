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
import "./index.css";

const My_Form = () => {
  const [infoData, setInfoData] = useState({
    fullName: "",
    cnic: "",
    email: "",
    mobileNo: "",
    date: "",
    country: "",
    gender: "",
    language: "",
    colors: "",
  });
   const [fullNameError, setFullNameError] = useState({});
   const [cnicError, setCnicError] = useState({});
   const [emailError, setEmailError] = useState({});
   const [phoneError, setPhoneError] = useState({});
   const [genderError, setGenderError] = useState({});
   const [languageError, setLanguageError] = useState({});
   const [colorError, setColorError] = useState({});
   const [countryError, setCountryError] = useState({});
   const [dateError, setDateError] = useState({});


  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [setValue] = React.useState(1);

  const inputEvent = (event, type = "") =>  {
    //console.log(event);
    const { name, value } = event.target;
      setInfoData((updatedValue) => {
        return {
          ...updatedValue,
          [name]: value,
        };
      });  
  };
  const isEmail = () => {
    var atSymbol = infoData.email.indexOf('@');
    if (atSymbol <1) return false;
    return true;
  };

  const formValidation = () =>{
    const fullNameError = {};
    const cnicError = {};
    const emailError = {};
    const phoneError = {};
    const genderError = {};
    const languageError = {};
    const colorError = {};
    const countryError= {};
    const dateError = {};

    let isValid = true;

   if(infoData.fullName ===""){
      fullNameError.fullNameShort = "Full Name cannot be empty. Please fill it.";
      isValid = false;
    }else if(infoData.fullName.trim().length >=1 && infoData.fullName.trim().length<3){
      fullNameError.fullNameShort = "Name is too short. It must have atleast 3 characters";
      isValid = false;
    }else if(infoData.fullName.trim().length >15){
      fullNameError.fullNameShort = "Name is too long. It must not have more than 15 numbers.";
      isValid = false;
    }
     if(infoData.cnic === " "){
      cnicError.cnicIssue = "CNIC cannot be empty. Please fill it.";
      isValid = false;
    }   
    else if(infoData.cnic.trim().length < 13 ){
      cnicError.cnicIssue = "Please enter 13 digit number. It is less than 13";
      isValid = false;
    }else if(infoData.cnic.trim().length > 13 ){
      cnicError.cnicIssue = "Please enter 13 digit number. It is greater than 13";
      isValid = false;
    }
    if(infoData.email===""){
      emailError.emailShort = "Email cannot be empty."
    }
    else if(!isEmail(infoData.email)){
      emailError.emailShort = "Invalid email."
      isValid = false;
    }
    if(infoData.mobileNo.trim().length != 10 ){
      phoneError.phoneShort = "Please enter a 10 digit phone number.";
      isValid = false;
    }
    if(infoData.date===""){
      dateError.dateSelect = "Please select DOB.";
      isValid = false;
    }
    if(infoData.country < 1){
      countryError.countrySelect = "Please select a country.";
      isValid =false;
    }
    if(infoData.gender===""){
      genderError.genderSelect = "Please select your gender."
      isValid = false;
    }
    if(infoData.language.length <=1){
      languageError.languageSelect = "Please select atleast two languages."
      isValid = false;
    }
    if(infoData.colors === ""){
      colorError.colorSelect = "Please select favorite color."
      isValid = false;
    }
    
    setFullNameError(fullNameError);
    setCnicError(cnicError);
    setEmailError(emailError);
    setPhoneError(phoneError);
    setGenderError(genderError);
    setLanguageError(languageError);
    setColorError(colorError);
    setCountryError(countryError);
    setDateError(dateError);


    return isValid;
  }

  const showModal = () => {
    const isValid = formValidation();
    if(isValid){
    setVisible(true);
    }
  };

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
  const { Option } = Select;
  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  return (
    <>
      <form >
        <h1>Please Enter Details Carefully!</h1>
        <b>Full Name:</b>
        <Input
          type="text"
          name="fullName"
          value={infoData.fullName}
          placeholder="Enter your Full Name"
          onChange={inputEvent}
          autoComplete="off"
          required
        />
        {Object.keys(fullNameError).map((key) => {
          return <div style={{color:'red'}}> {fullNameError[key]}</div>
        })}
        <b>CNIC:</b>
        <Input
          type="number"
          name="cnic"
          value={infoData.cnic}
          placeholder="----- ------- -"
          onChange={inputEvent}
          required
        />
        {Object.keys(cnicError).map((key) => {
          return <div style={{color:'red'}}> {cnicError[key]}</div>
        })}
        <b>Email:</b>
        <Input
          type="text"
          name="email"
          value={infoData.email}
          placeholder="example@gmail.com"
          autoComplete="off"
          onChange={inputEvent}
          required
        />
        {Object.keys(emailError).map((key) => {
          return <div style={{color:'red'}}> {emailError[key]}</div>
        })}
        <b>Mobile No:</b>
        <Input
          type="number"
          name="mobileNo"
          value={infoData.mobileNo}
          placeholder="+92 --- -------"
          onChange={inputEvent}
        />
         {Object.keys(phoneError).map((key) => {
          return <div style={{color:'red'}}> {phoneError[key]}</div>
        })}
        <Space direction="vertical">
         <b> Date of Birth:</b>
          <DatePicker
            name="date"
            required
            onChange={(date ,dateString) =>
              inputEvent({ target: { value: dateString, name: "date" } })
            } 
          />
        </Space>
        {Object.keys(dateError).map((key) => {
          return <div style={{color:'red'}}> {dateError[key]}</div>
        })}
        <br />
       <b> Select Country</b> <br />
        <Select
          name="country"
          defaultValue=""
          style={{ width: 120 }}
          required
          onChange={(val) => inputEvent({target:{value: val, name:"country"}})}
        >
          <Option value="Pakistan">Pakistan</Option>
          <Option value="India">India</Option>
          <Option value="Nigeria">Nigeria</Option>
          <Option value="China">China</Option>
        </Select>
        {Object.keys(countryError).map((key) => {
          return <div style={{color:'red'}}> {countryError[key]}</div>
        })}
        <br />
        <b>Please Select Gender</b> <br />
        <Radio.Group
          name="gender"
          required
          value={infoData.gender}
          onChange={(onChangeRadio, inputEvent)}
        >
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
          <Radio value="Other">Other</Radio>
        </Radio.Group>
        {Object.keys(genderError).map((key) => {
          return <div style={{color:'red'}}> {genderError[key]}</div>
        })}
        <br />
        <b>Select Languages that you can speak fluently!</b> <br />
        <Select
          name="language"
          mode="multiple"
          style={{ width: "100%" }}
          required
          placeholder="Please Select atleast 1 language"
          defaultValue={["English "]}
          onChange={(c) => inputEvent({target:{ value:c, name:"language"}})}
          optionLabelProp="label"
        >
          <Option value="English " label="English ">
            <div className="demo-option-label-item">
              <span role="img" aria-label="English"></span>
              English
            </div>
          </Option>
          <Option value="Urdu " label="Urdu">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Urdu"></span>
              Urdu
            </div>
          </Option>
          <Option value="Chinese " label="Chinese">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Chinese"></span>
              Chinese
            </div>
          </Option>
          <Option value="Punjabi " label="Punjabi">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Punjabi"></span>
              Punjabi
            </div>
          </Option>
        </Select>
        {Object.keys(languageError).map((key) => {
          return <div style={{color:'red'}}> {languageError[key]}</div>
        })}
        <br />
       <b> Please select favorite colors:</b>
        <Checkbox.Group
          name="colors"
          //value={infoData.colors}
          style={{ width: "100%" }}
          onChange={(f) => inputEvent({target: {value:f, name:"colors"}})}
        >
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
        {Object.keys(colorError).map((key) => {
          return <div style={{color:'red'}}> {colorError[key]}</div>
        })}
        <br />
        <Button type="primary" onClick={showModal}>
          Submit
        </Button>
      </form>
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
      <br />
    </>
  );
};
export default My_Form;
