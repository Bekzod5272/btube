import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <Box minHeight={'90vh'}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} height={'90vh'} width={'100%'}>
                <CircularProgress />
            </Stack>
        </Box>
    )
}

export default Loader