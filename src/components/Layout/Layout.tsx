import React from "react";
import { ReactNode, useState } from "react";
import { Header } from "../Header/Header";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import { MainPage } from "../../pages/MainPage";

import s from "./Layout.module.css";
import { Form } from "../Form/Form";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <Header />

      <div className={s.container}>
        <NavigationBar />

        <div className={s.form}>
          <Form />
        </div>
      </div>
    </div>
  );
};
