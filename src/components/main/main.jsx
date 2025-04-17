import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { colors } from '../../constants/colors'
import Category from '../category/category'
import Videos from '../videos/videos'
import { ApiService } from '../../service/api.service'
import Loader from '../loader/loader'

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)
    const selectedCategoryHandler = category => setSelectedCategory(category)
    useEffect(() => {
        const getVideos = async () => {
            setLoading(false)
            const data = await ApiService.fetchData(`search?part=snippet&q=${selectedCategory}`)
            setVideos(data?.data?.items)
            setLoading(true)
        }
        // getVideos()
    }, [selectedCategory])
    return (
        <Stack>
            <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />
            <Box p={2} sx={{ height: '90vh' }}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' fontWeight={'bold'} mb={2}>
                        {selectedCategory} <span style={{ color: colors.secondary, fontWeight: 'bold' }}>videos</span>
                    </Typography>

                    {loading ? (
                        videos?.length > 0 ?
                            <Videos videos={videos} /> :
                            <Typography
                                variant='h4'
                                fontWeight={'bold'}
                                mt={2}
                                mb={2}
                                color={colors.secondary}
                            >
                                No videos found !
                            </Typography>
                    ) : (
                        <Loader />
                    )}
                </Container>
            </Box>
        </Stack>
    )

}

export default Main