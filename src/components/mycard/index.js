import { Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'


const MyCard = ({children, sx}) => {
  return (
        <Card sx={sx}>
           {children}
        </Card>
  )
}

export default MyCard