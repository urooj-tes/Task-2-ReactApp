import react from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const About = () => {
  const myState = useSelector((state) => state.setTheValuesInStore);
  console.log(myState);
  //debugger;
  return (
    <>
      <h1>
        <b>Hi! I am About Page.</b>
      </h1>
      <p>
        <b>Full Name: </b>
        {myState?.infoData.fullName}
      </p>
      <p>
        <b>CNIC: </b>
        {myState?.infoData.cnic}
      </p>
      <p>
        <b>Email: </b>
        {myState?.infoData.email}
      </p>
      <p>
        <b>Mobile No: </b>
        {myState?.infoData.mobileNo}
      </p>
      <p>
        <b>Date of Birth: </b>{" "}
        {moment(myState?.infoData.date).format("YYYY-MM-DD")}
      </p>
      <p>
        <b>Country: </b>
        {myState?.infoData.country}
      </p>
      <p>
        <b>Gender: </b>
        {myState?.infoData.gender}
      </p>
      <p>
        <b>Language: </b>
        {myState?.infoData.language}
      </p>
      <p>
        <b>Colors: </b>
        {myState?.infoData.colors}
      </p>
    </>
  );
};

export default About;
