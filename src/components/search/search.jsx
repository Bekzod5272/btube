import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ApiService } from '../../service/api.service';
import { Box, Container, Typography } from '@mui/material';
import VideoDetail from '../video-detail/video-detail';
import { colors } from '../../constants/colors';
import Videos from '../videos/videos';
import Loader from '../loader/loader';

const Search = () => {
  const [videos, setVideos] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      setLoading(false)
      try {
        await ApiService.fetchData(`search?part=snippet&q=${id}`)
          .then((res) => {
            setVideos(res.data.items)
          })
          .finally(() => {
            setLoading(true)
            console.log(videos);
          })
      } catch (error) {
        setLoading(true)
        console.log(error);
      }
    }
    // getData()
  }, [id])
  return (
    <Box p={2} sx={{ height: '90vh' }}>
      <Container maxWidth={'90%'}>
        <Typography variant='h4' fontWeight={'bold'} mb={2}>
          Search Results for <span style={{ color: colors.secondary }}>{id}</span> videos
        </Typography>
        {loading ? (
          videos?.length > 0 ?
            <Videos videos={videos} /> :
            <Typography
              variant='h4'
              fontWeight={'bold'}
              mt={2}
              mb={2}
              color={colors.secondary}>
              No videos found !
            </Typography>
        ) : <Loader />}
      </Container>
    </Box>
  )
}

export default Search