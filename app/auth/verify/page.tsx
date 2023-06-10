"use client";

import { LoaderContext } from "@/contexts/LoaderProvider";
import { ToasterContext } from "@/contexts/ToasterProvider";
import { fetchErrorHandler } from "@/utils/fetchErrorHandler";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useContext } from "react";

const Verify = () => {
  const params = useSearchParams();
  const router = useRouter()
  const { setToast } = useContext(ToasterContext);
  const { setLoader } = useContext(LoaderContext);

  const verifyAccount = async () => {
    setLoader(true);
    try {
      const email = params.get("email");
      const token = params.get("token");
      const API = `${process.env.HOST_BACKEND}/auth/verify`;
      const response = await axios.post(API, { email, token });
      if (response.status === 200) {
        setToast({
          show: true,
          type: true,
          text: "Account verification successful!",
        });
        router.push("/auth/login")
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
  return (
    <section className="container mx-auto text-center flex items-center flex-wrap gap-5">
      <p>Please, click this button to verify your account!</p>
      <button onClick={verifyAccount} className="btn-primary">
        Verify
      </button>
    </section>
  );
};

export default Verify;
