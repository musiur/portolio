"use client";

import { LoaderContext } from "@/contexts/LoaderProvider";
import { ToasterContext } from "@/contexts/ToasterProvider";
import { UserContext } from "@/contexts/UserProvider";
import PublicRoute from "@/routes/PublicRoute";
import { fetchErrorHandler } from "@/utils/fetchErrorHandler";
import { emailRegex, passwordRegex } from "@/utils/regex";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Login = () => {
  const { setToast } = useContext(ToasterContext);
  const { setLoader } = useContext(LoaderContext);
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!data.email.trim()) {
      obj.email = "is required!";
    } else if (!emailRegex.test(data.email)) {
      obj.email = "is invalid!";
    }

    if (!data.password.trim()) {
      obj.password = "is required!";
    } else if (!passwordRegex.test(data.password)) {
      obj.password = "is invalid!";
    }

    return obj;
  };

  const CallAPI = async () => {
    setLoader(true);
    try {
      const API = `${process.env.HOST_BACKEND}/auth/signin`;
      const data = {
        email: formData.email,
        password: formData.password,
      };
      const response = await axios.post(API, data);
      console.log(response);

      if (response.status === 200) {
        setUser(response.data.result);
        localStorage.setItem("user", JSON.stringify(response.data.result));
        setToast({
          show: true,
          type: true,
          text: "Signin successful!",
        });
        const previousRoute = localStorage.getItem("from");
        if (previousRoute) {
          router.push(previousRoute);
        } else {
          router.push("/auth/login");
        }
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
      <div className="container mx-auto min-h-[100vh]">
        <div className="max-w-[400px] mx-auto my-10 rounded-xl p-3 lg:p-5 border shadow">
          <div className="form">
            <h6>Login</h6>
            <div>
              <label htmlFor="email">
                Email {errors.email ? <span>{errors.email}</span> : null}
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
              <Link href="/auth/forget-password">Forget password?</Link>
            </div>
            <button className="btn-primary w-full" onClick={handleOnSubmit}>
              Login
            </button>
            <div>
              <Link href="/auth/register" className="text-center">
                {`Don't`} have account? Register now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicRoute>
  );
};

export default Login;
