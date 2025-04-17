import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ChannelCard = ({ video }) => {
    console.log(video);

    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '100%', sm: '358px', md: '320px' },
                height: '326px',
                margin: 'auto',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <CardMedia
                    component={'img'}
                    src={video?.snippet?.thumbnails?.default?.url}
                    alt={video?.snippet?.title}
                    sx={{
                        width: '50%',
                        height: '50%',
                        borderRadius: '50px',
                        objectFit: 'cover',
                        mb: 2,
                        border: '1px solid #e3e3e3',
                    }}
                />
                <Typography variant='h6'>
                    {video?.snippet?.title}
                    <CheckCircle sx={{ fontSize: '12px', color: "gray", marginLeft: '5px' }} />
                </Typography>
                {video?.snippet?.subscriberCount && (
                    <Typography variant='subtitle2' sx={{ opacity: '.5' }}>
                        {parseInt(video?.snippet?.subscriberCount).toLocaleString('en-Us')} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Box>
    )
}

export default ChannelCard