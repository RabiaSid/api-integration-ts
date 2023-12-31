import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Delete, Get } from "../../config/api-methods";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomizedCard from "../../components/card";
import Button from "../../components/button";

export default function Projects() {
  const navigate = useNavigate();
  const [listData, setListData] = useState<any>([]);

  const deletePost = (id: any) => {
    Delete(`comments/${id}`)
      .then(() => {
        console.log("Post Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getData = () => {
    Get("comments")
      .then((res) => {
        console.log(res.data);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1, padding: "5px", marginY: "5px", marginX: "15px" }}
      justifyContent="center"
    >
      <Grid container>
        <Grid
          item
          xs={10}
          sm={6}
          md={4}
          sx={{ padding: "5px", marginY: "5px" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/product-form")}
            label="Add"
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2}>
        {listData.map((x: any, i: any) => (
          <Grid
            item
            xs={11}
            sm={6}
            md={4}
            lg={3}
            sx={{ padding: "5px", marginY: "5px" }}
            key={i}
          >
            <CustomizedCard
              name={x.name}
              email={x.email}
              body={x.body}
              onEditClick={() => {
                navigate(`/product-form/${x.id}`);
              }}
              onDeleteClick={() => deletePost(x.id)}
              onClick={() => navigate(`/${x.id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
