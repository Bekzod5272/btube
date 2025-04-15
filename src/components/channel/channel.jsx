import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Channel = () => {
    return (
        <Link to="/">
            <Button variant="outlined" color="primary">
                To Main
            </Button>
        </Link>
    )
}

export default Channel