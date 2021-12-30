const formValues = (updtedValues) => {
  //debugger;
  const values = {
    ...updtedValues,
    language: updtedValues["language"],
    colors: updtedValues["colors"],
  };
  return (dispatch) => {
    dispatch({ type: "INFO", infoData: values });
    console.log(values);
  };
};

export default formValues;
