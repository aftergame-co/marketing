"use client";

import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const Providers = ({ children }) => {
  return (
    <ReCaptchaProvider reCaptchaKey="6LesdyAkAAAAAB4gYlrAhrBPtzgbLI8anrQ7x1Yn">
      {children}
    </ReCaptchaProvider>
  );
};

export default Providers;
