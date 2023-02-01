import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import LinkToHome from 'features/LinkToHome';
import LinkToLocation from 'features/LinkToLocation';

const DesignSystemPage: React.FC = () => {
  return (
    <>
      <Grid container px={10} py={5} mb={10} justifyContent="space-between" alignItems="center" bgcolor="secondary.main">
        <Typography variant="h4" component="h1" color="common.white" textTransform="uppercase">
          <Box component="span" display="block">Modern</Box> art gallery
        </Typography>

        <Typography variant="body2" color="common.white" textTransform="uppercase">
          Design system
        </Typography>
      </Grid>

      <Container component="main">
        <Box component="section" mb={10}>
          <Typography variant="h4" mb={4} textTransform="uppercase" color="custom.darkGray">Colors</Typography>

          <Grid container>
            <Grid item xs={3}>
              <Stack spacing={2}>
                <Grid container sx={{ width: 255, height: 103 }} alignContent="flex-end" p={1.5} bgcolor="primary.main">
                  <Typography alignContent="flex-end" fontWeight="bold" color="common.white">#D5966C</Typography>
                </Grid>

                <Box component="section">
                  <Box component="div">
                    <Typography variant="body2" component="span" mr={3} color="custom.darkGray" >RGB</Typography>
                    <Typography variant="body2" component="span" fontWeight="bold" color="secondary.main">213, 150, 108</Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" component="span" mr={3} color="custom.darkGray" >HSV</Typography>
                    <Typography variant="body2" component="span" fontWeight="bold" color="secondary.main">24°, 49%, 84%</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={2}>
                <Grid container sx={{ width: 255, height: 103 }} alignContent="flex-end" p={1.5} bgcolor="secondary.main">
                  <Typography alignContent="flex-end" fontWeight="bold" color="common.white">#151515</Typography>
                </Grid>

                <Box component="section">
                  <Box component="div">
                    <Typography variant="body2" component="span" mr={3} color="custom.darkGray" >RGB</Typography>
                    <Typography variant="body2" component="span" fontWeight="bold" color="secondary.main">21, 21, 21</Typography>
                  </Box>
                  <Box component="div">
                    <Typography variant="body2" component="span" mr={3} color="custom.darkGray" >HSV</Typography>
                    <Typography variant="body2" component="span" fontWeight="bold" color="secondary.main">0°, 0%, 8%</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={2}>
                <Grid container sx={{ width: 255, height: 103 }} alignContent="flex-end" p={1.5} bgcolor="custom.darkGray">
                  <Typography alignContent="flex-end" fontWeight="bold" color="common.white">#444444</Typography>
                </Grid>

                <Box component="section">
                  <Box component="div">
                    <Typography variant="body2" component="span" mr={3} color="custom.darkGray" >RGB</Typography>
                    <Typography variant="body2" component="span" fontWeight="bold" color="secondary.main">68, 68, 68</Typography>
                  </Box>

                  <Box component="div">
                    <Typography variant="body2" component="span" mr={3} color="custom.darkGray" >HSV</Typography>
                    <Typography variant="body2" component="span" fontWeight="bold" color="secondary.main">0°, 0%, 27%</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Stack spacing={2}>
                <Grid container sx={{ width: 255, height: 103, border: '1px solid', borderColor: 'custom.darkGray' }} alignContent="flex-end" p={1.5} bgcolor="common.white">
                  <Typography alignContent="flex-end" fontWeight="bold">#FFFFFF</Typography>
                </Grid>

                <Box component="section">
                  <Box component="div">
                    <Typography variant="body2" component="span" mr={3} color="custom.darkGray">RGB</Typography>
                    <Typography variant="body2" component="span" fontWeight="bold" color="secondary.main">255, 255, 255</Typography>
                  </Box>

                  <Box component="div">
                    <Typography variant="body2" component="span" mr={3} color="custom.darkGray" >HSV</Typography>
                    <Typography variant="body2" component="span" fontWeight="bold" color="secondary.main">0°, 0%, 100%</Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box component="section" mb={10}>
          <Typography variant="h4" mb={3} textTransform="uppercase" color="custom.darkGray">Typography</Typography>

          <Grid container>
            <Grid item xs={6}>
              <Stack spacing={2} mb={4}>
                <Stack direction="row" alignItems="center" spacing={1.5} color="custom.darkGray">
                  <Typography sx={{ fontSize: '1.125rem'}} variant="h4" component="span" color="secondary.main">Heading (XL)</Typography>
                  <Typography variant="body2" component="span" textTransform="capitalize">Big shoulders display black</Typography>
                  <Typography variant="body2" component="span">96px</Typography>
                  <Typography variant="body2" component="span" textTransform="capitalize">88px Line spacing</Typography>
                </Stack>

                <Typography variant="h1" textTransform="uppercase">
                  Morbi in sem placerat
                </Typography>
              </Stack>

              <Stack spacing={2} mb={4}>
                <Stack direction="row" alignItems="center" spacing={1.5} color="custom.darkGray">
                  <Typography sx={{ fontSize: '1.125rem'}} variant="h4" component="span" color="secondary.main">Heading (L)</Typography>
                  <Typography variant="body2" component="span" textTransform="capitalize">Big shoulders display black</Typography>
                  <Typography variant="body2" component="span">70px</Typography>
                  <Typography variant="body2" component="span" textTransform="capitalize">70px Line spacing</Typography>
                </Stack>

                <Typography variant="h2" textTransform="uppercase">
                  Praesent dapibus neque id cursus
                </Typography>
              </Stack>

              <Stack spacing={2} mb={4}>
                <Stack direction="row" alignItems="center" spacing={1.5} color="custom.darkGray">
                  <Typography sx={{ fontSize: '1.125rem'}} variant="h4" component="span" color="secondary.main">Heading (M)</Typography>
                  <Typography variant="body2" component="span" textTransform="capitalize">Big shoulders display black</Typography>
                  <Typography variant="body2" component="span">60px</Typography>
                  <Typography variant="body2" component="span" textTransform="capitalize">50px Line spacing</Typography>
                </Stack>

                <Typography variant="h3" textTransform="uppercase">
                  Phasellus ultrices nulla quiz nibh
                </Typography>
              </Stack>

              <Stack spacing={2} mb={4}>
                <Stack direction="row" alignItems="center" spacing={1.5} color="custom.darkGray">
                  <Typography sx={{ fontSize: '1.125rem'}} variant="h4" component="span" color="secondary.main">Heading (S)</Typography>
                  <Typography variant="body2" component="span" textTransform="capitalize">Big shoulders display black</Typography>
                  <Typography variant="body2" component="span">36px</Typography>
                  <Typography variant="body2" component="span" textTransform="capitalize">36px Line spacing</Typography>
                </Stack>

                <Typography variant="h4" textTransform="uppercase">
                  Nam nulla quam gravida non commodo a sodales sit
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Box>
                <Stack spacing={2} mb={4}>
                  <Stack direction="row" alignItems="center" spacing={1.5} color="custom.darkGray">
                    <Typography sx={{ fontSize: '1.125rem'}} variant="h4" component="span" color="secondary.main">Body (M)</Typography>
                    <Typography variant="body2" component="span" textTransform="capitalize">Outfit light</Typography>
                    <Typography variant="body2" component="span">22px</Typography>
                    <Typography variant="body2" component="span" textTransform="capitalize">32px Line spacing</Typography>
                  </Stack>

                  <Typography variant="body1" color="custom.darkGray">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                  </Typography>
                  
                  <Typography variant="body1" color="custom.darkGray">
                    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis.
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1.5} color="custom.darkGray">
                    <Typography sx={{ fontSize: '1.125rem'}} variant="h4" component="span" color="secondary.main">Body (S)</Typography>
                    <Typography variant="body2" component="span" textTransform="capitalize">Outfit light</Typography>
                    <Typography variant="body2" component="span">18px</Typography>
                    <Typography variant="body2" component="span" textTransform="capitalize">28px Line spacing</Typography>
                  </Stack>

                  <Typography variant="body2" color="custom.darkGray">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box component="section" mb={10}>
          <Typography variant="h4" mb={5} textTransform="uppercase" color="custom.darkGray">Buttons</Typography>

          <Grid container>
            <Grid item xs={6} mb={3} textAlign="center">
              <LinkToLocation />
              <Typography variant="body2" my={3} color="custom.darkGray">Button 1 idle</Typography>
            </Grid>
            <Grid item xs={6} textAlign="center">
              <LinkToHome />
              <Typography variant="body2" my={3} color="custom.darkGray">Button 2 idle</Typography>
            </Grid>

            <Grid item xs={6} mb={3} textAlign="center">
              <LinkToLocation activateHoverState />
              <Typography variant="body2" my={3} color="custom.darkGray">Button 1 hover</Typography>
            </Grid>
            <Grid item xs={6} textAlign="center">
              <LinkToHome activateHoverState />
              <Typography variant="body2" my={3} color="custom.darkGray">Button 2 hover</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
};

export default DesignSystemPage;
