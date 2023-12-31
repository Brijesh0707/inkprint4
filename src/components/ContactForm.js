import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import InputField from './InputField';
import CtnBtn from './CtnBtn';
import { useContactMutation } from '../redux/contactrtk/ContactRtk';

function ContactForm() {
  const [ContactApi, { mutate: Contact, isLoading: isLoginLoading }] = useContactMutation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const Navigate = useNavigate();

  const validateInput = (value) => {
    const regex = /^[A-Za-z\s]+$/;
    return value.includes('@') || value.includes('.') || value === '';
  };

  const handleFirstNameChange = (e) => {
    e.persist();
    const value = e.target.value;
  
      setFirstName(value);
   
  };
  
  const handleLastNameChange = (e) => {
    e.persist();
    const value = e.target.value;
   
      setLastName(value);
   
  };
  

  const hasNumbersOrSymbols = (value) => {
    const specialCharacters = '0123456789!@#$%^&*(),.?":{}|<>';
    return [...value].some(char => specialCharacters.includes(char));
  };

  const handleSubmit = async () => {
    try {
  
      if (!email.includes('@') || !email.includes('.')) {
        alert('Invalid email address');
        return;
      }
     
      if (hasNumbersOrSymbols(firstName) || hasNumbersOrSymbols(lastName)) {
        alert('First name and last name should only contain letters and spaces');
        return;
      }

      if (firstName ==="" || lastName === "" || email === "" || subject === "" || message === "") {
        alert('All fields are required');
        return;
      }
  

      const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        subject: subject,
        message: message,
      };
  
      console.log(formData)
    
      const response = await ContactApi(formData);
  
      alert('Message sent successfully');
      // Navigate('/');
  
      if (response.data) {
        setEmail('');
        setFirstName('');
        setLastName('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
  
      toast.error('Message not sent successfully', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };
  

  return (
    <div className="p-[24px] border rounded-xl h-[95vh] border-blue w-[56vw] md:w-full md:p-[12px] md:mb-[24px]">
      <h1 className="text-[32px] md:text-[14px] font-medium">Contact us</h1>
      <div className="flex w-full md:flex-col">
        <div onChange={handleFirstNameChange} className='w-full'>
          <InputField
            name="first_name"
            label="First Name"
            type="text"
            placeholder="John"
            required
            value={firstName}
          />
        </div>
        <div onChange={handleLastNameChange} className='w-full'>
          <InputField
            name="last_name"
            label="Last Name"
            type="text"
            placeholder="Doe"
            width="100%"
            required
            value={lastName}
          />
        </div>
      </div>
      <div className="flex w-full md:flex-col">
        <div onChange={(e) => setEmail(e.target.value)} className='w-full'>
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="John@abc.com"
            required
            value={email}
          />
        </div>
        <div onChange={(e) => setSubject(e.target.value)} className='w-full'>
          <InputField
            name="subject"
            label="Subject"
            type="text"
            placeholder="Subject"
            width="100%"
            required
            value={subject}
          />
        </div>
      </div>
      <p className="text-[16px] text-custom-text-darkGrey mt-[24px] mb-[10px] md:text-[10px] md:mt-[12px] md:mb-[7px]">Message<span className="text-red-500">*</span></p>
      <textarea
        rows={window.innerWidth<500?"3":"5"}
        placeholder="Any message for us.."
        className="border border-grayLight py-[6px] px-[12px] rounded focus:outline-none w-full md:mb-[16px]"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div onClick={handleSubmit}>
        <CtnBtn className="mt-[32px] w-[130px] h-[38px] font-semibold bg-custom-bg-gray text-white rounded cursor-pointer md:mt-0 md:text-[12px] flex items-center justify-center">
          Send Email
        </CtnBtn>
      </div>
    </div>
  );
}

export default ContactForm;
