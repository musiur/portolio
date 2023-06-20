"use client";

import { useEffect, useState } from "react";

type FormData = {
  fullname: String;
  email: String;
  messages: String;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    messages: "",
  });
  const [errors, setErrors] = useState(formData);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };

  const validator = (data: FormData) => {
    let obj: any = {};

    if (!data.email.trim()) {
      obj.email = "Email is required!";
    }
    if (!data.fullname.trim()) {
      obj.fullname = "Full name is required!";
    }
    if (!data.messages.trim()) {
      obj.messages = "Messages are required!";
    }

    return obj;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  }, [errors]);
  return (
    <section className="container mx-auto">
      <div className="max-w-[600px] mx-auto rounded-xl border p-5 lg:p-8">
        <h4 className="pb-1 mb-5">Get touch with me!</h4>
        <div className="form pb-5">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-0">
            <div>
              <label htmlFor="fullname">
                Full name{" "}
                {errors.fullname ? <span>{errors.fullname}</span> : null}
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="fullname">
                Your email {errors.email ? <span>{errors.email}</span> : null}
              </label>
              <input
                id="fullname"
                name="email"
                type="text"
                onChange={handleOnChange}
              />
            </div>
          </section>
          <div>
            <label htmlFor="fullname">
              Messages {errors.messages ? <span>{errors.messages}</span> : null}
            </label>
            <textarea
              id="fullname"
              name="messages"
              onChange={handleOnChange}
              className="min-h-[20vh]"
            />
          </div>
        </div>
        <button className="btn-primary" onClick={handleOnSubmit}>
          Get touch now!
        </button>
      </div>
    </section>
  );
};

export default Contact;
