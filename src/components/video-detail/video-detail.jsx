import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react'
import { colors } from '../../constants/colors';
import moment from 'moment/moment';
import { CheckCircle } from '@mui/icons-material';

const VideoDetail = ({ video }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '360px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
      <CardMedia
        width={{ xs: '100%', sm: '360px', md: '320px' }}
        height={'180px'}
        component="img"
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        objectFit={'cover'}
      />
      <CardContent sx={{ background: colors.primary, position: 'relative', height: '200px' }}>
        <Typography variant='subtitle1' my={'5px'} sx={{ opacity: '.5' }} >
          {moment(video?.snippet?.publishedAt).fromNow()}
        </Typography>
        <Typography >
          {video?.snippet?.title?.slice(0, 50)}...
        </Typography>
        <Typography variant='subtitle2' sx={{ opacity: '.5' }} >
          {video?.snippet?.description?.slice(0, 70)}...
        </Typography>
        <Stack
          direction={'row'}
          position={'absolute'}
          bottom={'10px'}
          gap={'5px'}
          alignItems={'center'}
        >
          <Avatar
            src={video?.snippet?.thumbnails?.default?.url}
            alt={video?.snippet?.channelTitle}
            sx={{ width: '20px', height: '20px' }} />
          <Typography variant='subtitle2' sx={{ opacity: '.5' }} >
            {video?.snippet?.channelTitle}
          </Typography>
          <CheckCircle sx={{ fontSize: '12px', color: "gray", marginLeft: '5px' }} />
        </Stack>
      </CardContent>
    </Card>

  )
}

export default VideoDetail