import { Box, Stack } from "@mui/material"
import { logo } from "../../constants"
import { colors } from "../../constants/colors"
import { Link } from "react-router-dom"
import { SearchBar } from "../index"
const Navbar = () => {
    return (
        <Stack direction={'row'} alignItems={"center"} justifyContent={"space-between"} padding={2} sx={{ position: 'sticky', background: colors.primary, top: 0, zIndex: 100 }}>
            <Link to="/">
                <img src={logo} alt="" height={50} width={100} />
            </Link>
            <SearchBar />
            <Box />
        </Stack>
    )
}

export default Navbar