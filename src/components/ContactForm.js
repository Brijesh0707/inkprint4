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
  const Navigate = useNavigate()
 

  const handleSubmit = async () => {
    try {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        subject: subject,
     
      };
      console.log(formData);

      const response = await ContactApi(formData);
      console.log('this is contact response', response);



        // toast.success('Message Sent Successfully', {
        //     position: 'top-center',
        //     autoClose: 3000,
        //   });

        alert("message sent successfully")
        Navigate("/");
        if(response.data){
            setEmail("");
            setFirstName("");
            setLastName("");
            setSubject("")
        }
    } catch (error) {
      console.error('Error:', error);

      toast.error('Message not sent Successfully', {
        position: 'top-center',
        autoClose: 3000,
      })
    }
  };

  return (
    <div className="p-[24px] border rounded-xl border-blue w-full">
      <h1 className="text-4xl font-medium">Contact us</h1>
      <div className="flex">
      <div    onChange={(e) => setFirstName(e.target.value)}>
        <InputField
          name="first_name"
          label="First Name"
          type="text"
          placeholder="John"
          require
          value={firstName}
       
        />
        </div>
        <div  onChange={(e) => setLastName(e.target.value)}>
        <InputField
          name="last_name"
          label="Last Name"
          type="text"
          placeholder="Doe"
          require
          value={lastName}
         
        />
        </div>
      </div>
      <div className="flex">
      <div  onChange={(e) => setEmail(e.target.value)}>
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="John@abc.com"
          require
          value={email}
         
        />
        </div>
        <div   onChange={(e) => setSubject(e.target.value)}>
         <InputField
          name="subject"
          label="Subject"
          type="text"
          placeholder="Subject"
          require
          value={subject}
        
        />
        </div>

      </div>
      <p className="text-[16px] text-custom-text-darkGrey mt-[24px] mb-[10px]">Message</p>
      <textarea
        rows="5"
        placeholder="Any message for us.."
        className="border border-grayLight py-[6px] px-[12px] rounded focus:outline-none mb-[24px] w-full"
     
      />
      <div onClick={handleSubmit}>
        <CtnBtn
          className="mt-[32px] py-[10px] px-[24px] bg-custom-bg-gray text-white rounded cursor-pointer"
        >
          Send Email
        </CtnBtn>
      </div>
    </div>
  );
}

export default ContactForm;
