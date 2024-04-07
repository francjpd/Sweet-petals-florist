import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames: { name?: string; to: string }[] = [
    { name: "home", to: "" },
    ...location.pathname
      .split("/")
      .filter((x) => x)
      .map((path) => ({ to: path })),
  ];
  return (
    <Breadcrumbs aria-label="breadcrumb" className="dark:text-white">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;

        return last ? (
          <Typography key={value.to} className="dark:text-white">
            {value.name || value.to}
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
};

export default Breadcrumb;
