import React from "react";
import Work from "../img/work.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";

function Home() {
  return (
    <div className="home" style={{ paddingTop: 50 }}>
      <div className="hom-top">
        <Grid container spacing={0} sx={{ px: "5%" }}>
          <Grid item lg={6} md={6} sm={12}>
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                maxWidth: "400px",
                my: 13,
                pl: "5%",
              }}
            >
              <Typography variant="h3" gutterBottom>
                More than just shorter links
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "gray", fontWeight: 300 }}
              >
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </Typography>
              <Button
                variant="contained"
                sx={{ color: "grey", bgcolor: "cyan", borderRadius: 10 }}
              >
                Get Started
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <span>
              <img src={Work} alt="work" />
            </span>
          </Grid>
        </Grid>
        <div className="bt">
          <div className="input-link">
            <div className="input-search">
              <input type="text" placeholder="Shorten a link here..." />
            </div>
            <div className="input-btn">
              <input type="button" value="Shorten it!" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="home-bottom"
        style={{ padding: "17vh 0", backgroundColor: "RGB(232, 232, 232)" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Advanced Statics</Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "#35323E",
              fontWeight: 300,
              maxWidth: 500,
              mx: "auto",
              my: 5,
            }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Typography>
        </Box>

        <Box className="box-container" sx={{ mx: "10vh" }}>
          <div className="item">
            <div className="box">
              <span>
                <img src={logo1} alt="logo1" />
              </span>
              <Box sx={{p: 2, textAlign: 'center'}}>
                <Typography variant="h5" >Brand Recognition</Typography>
                <Typography variant="subtitle2" sx={{color: 'gray', p: 2}}>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</Typography>
              </Box>
            </div>
          </div>
          <div className="item">
            <div id="box2" className="box">
              <span>
                <img src={logo2} alt="logo2" />
              </span>
              <Box sx={{p: 2, textAlign: 'center'}}>
                <Typography variant="h5">Detailed Records</Typography>
                <Typography variant="subtitle2" sx={{color: 'gray', p: 2}}>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</Typography>
              </Box>
            </div>
          </div>
          <div className="item">
            <div id="box3" className="box">
              <span>
                <img src={logo3} alt="logo3" />
              </span>
              <Box sx={{p: 2, textAlign: 'center'}}>
                <Typography variant="h5">Fully Customizable</Typography>
                <Typography variant="subtitle2" sx={{color: 'gray', p: 2}}>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</Typography>
              </Box>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Home;
