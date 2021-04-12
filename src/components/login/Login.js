import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import React, { Component } from "react";
import { Lines } from 'react-preloaders';


class Login extends Component {

  render() {
    const style = {
      TextField: {
        height:"85px",
      },

      image: {
        backgroundImage: 'url(http://lavenderhotels.co.ke/accounts/eoffice/assets/loginBackground.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "100%",
        width: "100%"
      },
      height: {
        height: "100vh"
      },
      formPaper: {
        display: "flex",
        height: "370px",
        justifyContent: "center",
        alignItems: "center"
      },
      icon: {
        width: "100%",
        fontSize: "30px",
        color: "#2196f3",
        fontSize: "60px",
        marginBottom: "10px"
      }

    }
    return (
      <div style={style.image}>
          <Lines />

        <Grid container alignItems="center" justify="center" style={style.height} >
          <Grid item xs={4}>
            <Paper elevation={3} style={style.formPaper} >
              <form noValidate autoComplete="off">
                <AccountCircleOutlinedIcon style={style.icon} />

                <div>
                  <TextField style={style.TextField}
                    // error
                    id="outlined-error-helper-text"
                    label="نام کاربری"
                    // helperText="Incorrect entry."
                    variant="outlined"
                    fullWidth
                  />
                  <TextField style={style.TextField}
                    // error
                    id="outlined-error-helper-text"
                    label="گذرواژه"
                    // helperText="Incorrect entry."
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <Button variant="contained" color="primary" fullWidth>
                  ورود
              </Button>
              </form>
            </Paper >

          </Grid>

        </Grid>


      </div >
    );
  }
}

export default Login;
