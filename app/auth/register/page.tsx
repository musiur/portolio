/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { LoaderContext } from "@/contexts/LoaderProvider";
import { ToasterContext } from "@/contexts/ToasterProvider";
import PublicRoute from "@/routes/PublicRoute";
import { fetchErrorHandler } from "@/utils/fetchErrorHandler";
import { nameRegex, passwordRegex } from "@/utils/regex";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Register = () => {
  const { setToast } = useContext(ToasterContext);
  const { setLoader } = useContext(LoaderContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState(formData);
  const [showPass, setShowPass] = useState(false);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };

  const validator = (data: any) => {
    let obj: any = {};
    console.log({ obj });
    if (!data.name.trim()) {
      obj.name = "is required!";
    } else if (!nameRegex.test(data.name)) {
      obj.name = "is invalid!";
    }

    if (!data.email.trim()) {
      obj.email = "is required!";
    } else if (nameRegex.test(data.email)) {
      obj.email = "is invalid!";
    }

    if (!data.password.trim()) {
      obj.password = "is required!";
    } else if (!passwordRegex.test(data.password)) {
      obj.password = "is invalid!";
    }

    if (!data.confirm_password.trim()) {
      obj.confirm_password = "is required!";
    } else if (!passwordRegex.test(data.confirm_password)) {
      obj.confirm_password = "is invalid!";
    } else if (data.password !== data.confirm_password) {
      obj.confirm_password = "not matched!";
    }

    return obj;
  };

  const CallAPI = async () => {
    setLoader(true);
    try {
      const API = `${process.env.HOST_BACKEND}/auth/signup`;
      const data = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "user",
        host: process.env.HOST,
      };
      const response = await axios.post(API, data);
      if (response.status === 200) {
        setToast({
          show: true,
          type: true,
          text: "Account created successfully and a verification email sent to your inbox!",
        });
      }
    } catch (error) {
      setToast({
        show: true,
        type: false,
        text: fetchErrorHandler(error),
      });
    }
    setLoader(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      //  call api
      CallAPI();
    }
  }, [errors]);
  return (
    <PublicRoute>
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto my-10 rounded-xl p-3 lg:p-5 border shadow">
          <div className="form">
            <h6>Register</h6>
            <div>
              <label htmlFor="name">
                Name {errors.name ? <span>{errors.name}</span> : null}
              </label>
              <input
                type="text"
                name="name"
                onChange={handleOnChange}
                id="name"
              />
            </div>
            <div>
              <label htmlFor="email">
                email {errors.email ? <span>{errors.email}</span> : null}
              </label>
              <input
                type="text"
                name="email"
                onChange={handleOnChange}
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">
                Password{" "}
                {errors.password ? <span>{errors.password}</span> : null}
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                onChange={handleOnChange}
                id="password"
              />

              <FontAwesomeIcon
                icon={!showPass ? faEyeSlash : faEye}
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[36px] right-0 mr-1 icon-base cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="confirm_password">
                Confirm password{" "}
                {errors.confirm_password ? (
                  <span>{errors.confirm_password}</span>
                ) : null}
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="confirm_password"
                onChange={handleOnChange}
                id="confirm_password"
              />

              <FontAwesomeIcon
                icon={!showPass ? faEyeSlash : faEye}
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[36px] right-0 mr-1 icon-base cursor-pointer"
              />
            </div>
            <button className="btn-primary w-full" onClick={handleOnSubmit}>
              Register
            </button>
            <div className="w-full">
              <Link href="/auth/login" className="text-center">
                Already have account? Login
              </Link>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 gap-2 pt-5"></div> */}
        </div>
      </div>
    </PublicRoute>
  );
};

export default Register;
