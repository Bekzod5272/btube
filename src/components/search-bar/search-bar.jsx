import { Search } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material"
import { colors } from "../../constants/colors"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        if (value) return navigate(`/search/${value}`)
    }
    return (
        <Paper
            onSubmit={handleChange}
            component={"form"}
            sx={{ boxShadow: 'none', pl: 2, border: `1px solid ${colors.primary}` }}
            elevation={0}
        >
            <input
                type="text"
                placeholder="Search..."
                className="search-bar"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <IconButton type="submit">
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar