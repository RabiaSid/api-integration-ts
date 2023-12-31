import { Box, Grid, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Get } from "../../config/api-methods";

export default function ProductDetail() {
  let params = useParams();
  let [modal, setModal] = useState<any>({});

  let getData = () => {
    Get(`comments/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setModal({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        sx={{ flexGrow: 1, padding: "5px", marginY: "5px", marginX: "15px" }}
        justifyContent="center"
      >
        <Grid item xs={10}>
          <Box
            style={{
              padding: 10,
              backgroundColor: "#ebeeef",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
              }}
            >
              User Id : {modal.id ?? ""}
            </Typography>
            <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
            >{modal.name ?? ""}</Typography>
            <Typography
            variant="h6"
            sx={{
              fontWeight: "300",
            }}
            >{modal.email ?? ""}</Typography>
            <Typography
            variant="h6"
            sx={{
              fontWeight: "300",
            }}
            >{modal.body ?? ""}</Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
