
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    justify-content:center
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Trouvez un sujet intéressant</Typography>
                <Text variant="h5">"Notre site web est dédié à fournir des informations précieuses sur différents sujets. Nous nous efforçons de fournir des contenus de qualité pour aider nos lecteurs à élargir leurs connaissances et à rester informés.<br />
                 Notre équipe travaille dur pour vous offrir une expérience de lecture agréable et informative. N'hésitez pas à nous contacter si vous avez des questions ou des commentaires sur notre site web."
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"></Link>
                    </Box>
                </Text>

            </Wrapper>
        </Box>
    )
}

export default About;