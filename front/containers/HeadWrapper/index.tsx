import React, { FC } from "react";
import CustomHead from "./CustomHead";

const HeadWrapper: FC<{ title: string; children: any }> = ({
  title,
  children,
}) => {
  return (
    <>
      <CustomHead title={title} />
      {children}
    </>
  );
};
export default HeadWrapper;
