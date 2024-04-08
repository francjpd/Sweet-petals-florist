import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useCurrentPath } from "./useCurrentPath";
import { useEffect } from "react";

export default function Breadcrumb() {
  const context = useCurrentPath();

  const location = useLocation();
  const pathnames: { name?: string; to: string }[] = [
    { name: "home", to: "" },
    ...location.pathname
      .split("/")
      .filter((x) => x)
      .map((path) => ({ to: path })),
  ];

  useEffect(() => context.setPath(""), [location]);

  return (
    <Breadcrumbs aria-label="breadcrumb" className="dark:text-white">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        return last ? (
          <Typography key={value.to} className="dark:text-white">
            {context.path || value.name || value.to}
          </Typography>
        ) : (
          <MuiLink
            key={value.to}
            underline="hover"
            className="dark:text-white"
            component={Link}
            to={value.to}
          >
            {value.name || value.to}
          </MuiLink>
        );
      })}
    </Breadcrumbs>
  );
}
