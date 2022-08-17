import { Box } from '@mui/material';
import React from 'react'

const Hero = () => {
  return (
    <Box sx={{
        width: "100%",
        height: "90vh",
        backgroundImage: "url(https://source.unsplash.com/4-4WPFLVhAY)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center'
    }}
    >
        <Box sx={{
            backgroundColor: 'rgba(43, 167, 220, 0.5)',
            height: "250px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: '20px',
            padding: '0 50px',
            marginTop: '70px'
        }}>
            <Box sx={{
                fontSize: "h2.fontSize",
                textAlign: 'center'
            }}>
               Heading for Hero Block   
            </Box>
            <Box sx={{
                fontSize: 'h4.fontSize',
                textAlign: 'center'
            }}>
                Subheading for Hero Block
            </Box>

        </Box>
        
    </Box>
  )
}

export default Hero