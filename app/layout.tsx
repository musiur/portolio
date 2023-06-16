import ContextWrapper from "@/contexts/ContextWrapper";
import "./globals.scss";
import { Inter } from "next/font/google";
import { ReactElement } from "react";
import LayoutsWrapper from "@/components/libs/layouts/LayoutsWrapper";
import CoreCompWrapper from "@/components/libs/core/CoreCompWrapper";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musiur Alam Opu",
  description:
    "As a Software Engineer with an eye for design and user experience, efficiency, I craft quality software from frontend- every aspect considered as much as possible. In order to be irreplaceable, I must always want to be different",
};

const RootLayout = ({ children }: { children: ReactElement }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextWrapper>
          <LayoutsWrapper>
            <CoreCompWrapper>
              <>{children}</>
            </CoreCompWrapper>
          </LayoutsWrapper>
        </ContextWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
