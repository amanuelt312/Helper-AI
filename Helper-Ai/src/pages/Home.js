import React from "react";
import Cards from "../componets/Cards";
import { Lists } from "../componets/Lists";
import Grid from "@mui/material/Grid";
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Grid container spacing={2}>
        {Lists.map((item) => {
          return (
            <Grid item xs={3}>
              <Link
                to={item.id}
                style={{ textDecoration: "none" }}
                state={{ item: item }}
              >
                <Cards
                  image={item.image}
                  title={item.name}
                  description={item.description}
                />
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Outlet />
    </div>
  );
}
