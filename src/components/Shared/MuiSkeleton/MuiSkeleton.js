import { Skeleton, Stack } from "@mui/material";
import React from "react";

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} sx={{ minWidth: 345 }}>
      <Skeleton variant="rectangular" height={450} sx={{ minWidth: 345 }} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Stack>
  );
};

export default MuiSkeleton;
