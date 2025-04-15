import { Search } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material"
import { colors } from "../../constants/colors"

const SearchBar = () => {
    return (
        <Paper component={"form"} sx={{ boxShadow: 'none', pl: 2, border: `1px solid ${colors.primary}` }}>
            <input type="text" placeholder="Search..." className="search-bar" />
            <IconButton>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar