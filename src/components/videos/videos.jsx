import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoDetail from '../video-detail/video-detail'

const Videos = ({ videos }) => {
  return (
    <Stack
      width={'100%'}
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'start'}
      gap={2}
      alignItems={'center'}>
      {videos?.map((item) => (
        <Box key={item.id.videoId}>{item.id.videoId && <VideoDetail video={item} />}</Box>
      ))}

    </Stack>
  )
}

export default Videos