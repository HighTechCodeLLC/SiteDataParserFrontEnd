import React, { FC } from "react";
import Head from "next/head";

const CustomHead: FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=10.0, minimum-scale=1.0 user-scalable=no"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default CustomHead;
