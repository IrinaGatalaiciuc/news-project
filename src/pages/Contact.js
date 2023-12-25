import React from 'react'
import { useForm } from "react-hook-form";
import { BlueButton } from '../components/button/Button';
import regimg from "../pages/images/newspaper.jpg"
import "../styles/Contact.css" 

function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function regist(data) {
    console.log(data)
  }

  return (
    <div className="contact">

      <div>
        <img src={regimg} />
        <div className="shadow"></div>
      </div>
      <form onSubmit={handleSubmit(regist)}>
        <input type="text" placeholder="Name" {...register("name", { required: true })}></input>
        {errors.name && <p>Write your name</p>}
        <input type="text" placeholder="Username" {...register("username", { required: "Write username", maxLength: { value: 10, message: "Less than 10 symbols" } })}></input>
        {errors.username && <p>{errors.username.message}</p>}
        <input type="password" placeholder="Password" {...register("password", { required: true })}></input>
        {errors.password && <p>Add password</p>}
        <textarea placeholder="Write your message" {...register("message")}></textarea>
        <BlueButton type="submit">Send message</BlueButton>
      </form>

    </div>
  )
}

export default Contact