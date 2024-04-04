import { Breadcrumbs, Link as MuiLink, Typography } from '@mui/material';
import { Link, useLocation, } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames: { name?: string, to: string }[] = [{ name: 'home', to: '' }, ...location.pathname.split('/').filter(x => x).map(path => ({ to: path }))];
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;

                return last ? (
                    <Typography color="text.primary">{value.name || value.to}</Typography>
                ) : (
                    <MuiLink underline="hover" color="inherit" component={Link} to={value.to}>{value.name || value.to}</MuiLink>
                );
            })}
        </Breadcrumbs>

    );
};

export default Breadcrumb;