import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/navbar'
import { Main, Channel, VideoDetail, Search } from '../index';

const App = () => {
    return (
        <Box>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/channel" element={<Channel />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </Box>
    )
}
export default App;