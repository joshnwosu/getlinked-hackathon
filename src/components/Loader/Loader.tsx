import React from "react";
import * as classes from "./Loader.module.css";
import { Box, LoadingOverlay } from "@mantine/core";

const Loader = () => {
  return (
    <Box>
      {/* <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        /> */}
    </Box>
  );
};
export default Loader;
