import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
import './App.css';

const FormSignup = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (

        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create your account by filling out your details</h1>
                <div className="form-inputs">
                    <label
                        className="form-label"
                        htmlFor="Username" >
                        UserName:* </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your Username"
                        className="form-input"
                        value={values.username}
                        onChange={handleChange} />
                </div>
                {errors.username && <p>{errors.username}</p>}
                <div className="form-inputs">
                    <label
                        className="form-label"
                        htmlFor="Email" >
                        Email:* </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        className="form-input"
                        value={values.email}
                        onChange={handleChange} />
                </div>
                {errors.email && <p>{errors.email}</p>}
                <div className="form-inputs">
                    <label
                        className="form-label"
                        htmlFor="Password" >
                        Password:* </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        className="form-input"
                        value={values.password}
                        onChange={handleChange} />
                </div>
                {errors.password && <p>{errors.password}</p>}
                <div className="form-inputs">
                    <label
                        className="form-label"
                        htmlFor="ConfirmPassword" >
                        Confirm Password:* </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter your Password"
                        className="form-input"
                        value={values.confirmPassword}
                        onChange={handleChange} />
                </div>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                <button className="form-input-btn" type="submit">Sign Up</button>
                <span className="form-input-login">Already have an account ? Login <a href="#">here</a></span>
            </form>
        </div>

    )
}

export default FormSignup
