import React, { useState } from "react";
import Contact from "../../component/Contact";

function ContactPage() {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState();

  //regx used for email pattern validation (return true/false) --->
  function validEmail(e) {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search(filter) != -1;
  }

  //this function used for complete form is not empty validation --->
  function formValid() {
    const values = Object.values(formData);
    const error={};
    if (values.length === 4) {
      const everyResult = values.every((item, index) => item != "");
      setFormError(everyResult);
      return everyResult;
    }
    if(!values.name){
      error.name="Name is not required"
      console.log("values.nameeeeeeeeeee", values.name)
    }
    if(!values.email){
      error.email="Email is not required"
    }
    if(!values.mobile){
      error.mobile="Mobile number is not required"
    }
     else {
      return false;
    }
  }

  const handleSubmit = async (e) => {
    // function used to clear default behavior of submit button in form ---> 
    e.preventDefault();
    
    //if form valid then data will printed in console --->
    if (formValid()) {
      console.log("formData:", formData);
    } else {
      alert("Empty form is not valid!");
    }
  };

  //funciton used for email and mobile number validation (red border added until not matched)--->
  const handleFieldValidation = (e) => {
    switch (e.target.name) {
      case "email":
        {
          setFormError((prev) => ({
            ...prev,
            email: validEmail(e.target.value)?"form-control":'form-control border border-danger border-3',
          }));

          setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
        break;

        case 'mobile':{
         const phone = e.target.value.replace(/[^0-9]/g, '');
          if(phone?.length < 10) { 
             setFormError((prev) => ({
              ...prev,
              mobile:'form-control border border-danger border-3',
            }));
          } else {
            setFormError((prev) => ({
              ...prev,
              mobile: 'form-control',
            }));
          } ;
          if(phone?.length<=10){
            setFormData((prev) => ({ ...prev, [e.target.name]:phone}));
          }
        };
        break;

      default: {
        return setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    }
  };
  return (
    <Contact
      formData={formData}
      formError={formError}
      onChange={handleFieldValidation}
      submit={handleSubmit}
    />
  );
}

export default ContactPage;
