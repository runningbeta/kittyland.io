import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Footer from './Footer';

import 'typeface-roboto'; // eslint-disable-line import/extensions

import './css/oswald.css';
import './css/open-sans.css';
import './css/pure-min.css';
import './css/pure-responsive-min.css';
import './css/pure-order-min.css';
import './App.css';

import './css/material-background-styles.css';
import './css/ferris.css';

const PawIcon = require('./assets/icons/pawprint.svg');
const TicketIcon = require('./assets/icons/ticket.svg');
const EthIcon = require('./assets/icons/ethereum.svg');

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      paper: '#fff',
      default: '#efefef',
    },
  },
  typography: {
    fontFamily: '"Roboto"',
  },
});

const styles = {
  rooterLink: {
    textDecoration: 'inherit',
    color: 'inherit',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  rootContainer: {
    maxWidth: 1120,
    width: '100%',
    margin: '0 auto',
  },
  flexGrow: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  transparentAppBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },

  mainContainer: {
    maxWidth: 1120,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 32px',
  },
  footer: {
    borderTop: '.2rem solid #f3f1ee',
  },
  landing: {
    height: '100vh',
    flexDirection: 'row',
    alignContent: 'center',
    color: theme.palette.common.white,
  },
  gridSpacing: {
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing.unit * 6,
    position: 'relative',
    overflow: 'hidden',
  },
  paperSmall: {
    padding: theme.spacing.unit * 3,
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    textAlign: 'center',
  },
  quotePaper: {
    position: 'relative',
    overflow: 'hidden',
  },
  quote: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: '30%',
    backgroundColor: 'rgba(63,81,181,0.7)',
    padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  quoteText: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#efefef',
  },
  welcomeButton: {
    marginTop: '2rem',
    color: 'white',
    height: '5rem',
    padding: '0 3.2rem',
    fontSize: '1.6rem',
    borderRadius: 6,
    border: `3px solid ${theme.palette.primary.main}`,
  },
};

const App = ({ children, classes, location, theme }) => {
  const guardStyle = `linear-gradient( to right,
    ${theme.palette.secondary.main} 0%,
    ${theme.palette.secondary.main} 20%,
    white 20%,
    white 40%,
    ${theme.palette.secondary.main} 40%,
    ${theme.palette.secondary.main} 60%,
    white 60%,
    white 80%,
    ${theme.palette.secondary.main} 80%,
    ${theme.palette.secondary.main} 100%
  )`;

  return (
    <div>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar
            position="static"
            color="secondary"
            className={classes.transparentAppBar}
          >
            <div className={classes.rootContainer}>
            <Toolbar>
              <div className={classes.flexGrow}>
                <Typography variant="title" color="inherit">
                  KITTYLAND
                </Typography>
              </div>
            </Toolbar>
            </div>
          </AppBar>
          <div className="page-background">
            <div>
              <div className="space-background">
                <div className={classes.mainContainer}>
                  <Grid container className={classes.landing}>
                    <Grid item xs={12}>
                      <Typography
                        style={{ marginBottom: '1.5rem' }}
                        variant="display3"
                        color="inherit"
                        gutterBottom
                      >
                        Welcome to Kittyland
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Typography variant="headline" color="inherit" gutterBottom>
                        The first Theme Park for CryptoKitties!
                      </Typography>
                      <Button
                        className={classes.welcomeButton}
                        to="/attraction/ferriswheel"
                        variant="raised"
                        color="secondary"
                      >
                        Coming Soon
                      </Button>
                    </Grid>
                    <Grid item hidden={{ xsDown: true }} sm={5}>
                      <div>
                        <div
                          className="home-bucket bucket"
                          style={{
                            width: '60%',
                            marginTop: '14vmin',
                            marginLeft: '20%',
                            maxWidth: 330,
                          }}
                        >
                          <div className="swing">
                            <img
                              src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/614845.png"
                              alt="kitty"
                            />
                            <img
                              src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/1.png"
                              alt="kitty"
                            />
                            <span
                              style={{ backgroundColor: theme.palette.secondary.main }}
                              className="cabin"
                            />
                            <span
                              className="bucketSides"
                              style={{ borderColor: theme.palette.secondary.main }}
                            />
                            <span className="roof">
                              <span style={{ backgroundColor: theme.palette.secondary.main }} />
                              <span style={{ backgroundColor: 'white' }} />
                              <span style={{ backgroundColor: 'white' }} />
                              <span style={{ backgroundColor: theme.palette.secondary.main }} />
                              <span style={{ backgroundColor: theme.palette.secondary.main }} />
                            </span>
                            <span className="guard" style={{ background: guardStyle }} />
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className={classes.mainContainer}>
                <Grid container spacing={16} style={{ justifyContent: 'center' }}>
                  <Grid item className={classes.gridSpacing} xs={10}>
                    <Paper className={classes.paper} style={{ textAlign: 'center' }}>
                      <Typography gutterBottom variant="headline">
                        What is Kittyland?
                      </Typography>
                      <br />
                      <Typography gutterBottom variant="subheading">
                        Kittyland is a crypto theme park built on the blockchain. Each attraction in
                        Kittyland is built to be 100% safe and fun for CryptoKitties.
                      </Typography>
                      <br />
                      <Typography variant="subheading" color="primary">
                        {
                          "If you don't want your CryptoKitty to be bored on the blockchain, take her to Kittyland!"
                        }
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.gridSpacing} style={{ backgroundColor: 'white' }}>
                <div className={classes.mainContainer}>
                  <div className={classes.paper}>
                    <Grid container spacing={24} style={{ textAlign: 'center', justifyContent: 'center' }}>
                      <Grid item xs={12}>
                        <Typography variant="headline">What makes Kittyland different?</Typography>
                      </Grid>
                      <Grid item xs={10} sm={4}>
                        <Paper className={classes.paperSmall}>
                          <Typography gutterBottom variant="subheading">
                            <b>Tokens</b>
                          </Typography>
                          <img
                            style={{ margin: theme.spacing.unit, width: 60, height: 60 }}
                            alt="Ticket"
                            src={TicketIcon}
                          />
                          <Typography>
                            Each Kittyland token is an non-fungible ERC721 token that is indivisible and
                            unique.
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={10} sm={4}>
                        <Paper className={classes.paperSmall}>
                          <Typography gutterBottom variant="subheading">
                            <b>Holders</b>
                          </Typography>
                          <img
                            style={{ margin: theme.spacing.unit, width: 60, height: 60 }}
                            alt="Paw Print"
                            src={PawIcon}
                          />
                          <Typography>
                            Holders are CryptoKitties that take on roles or use tickets for attractions in
                            Kittyland.
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={10} sm={4}>
                        <Paper className={classes.paperSmall}>
                          <Typography gutterBottom variant="subheading">
                            <b>Blockchain</b>
                          </Typography>
                          <img
                            style={{ margin: theme.spacing.unit, width: 60, height: 60 }}
                            alt="Ethereum"
                            src={EthIcon}
                          />
                          <Typography>
                            To make this possible, Kittyland uses blockchain technology as an immutable
                            record of ownership.
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
              <div className={classes.mainContainer}>
                <Grid container spacing={16} style={{ justifyContent: 'center' }}>
                  <Grid item className={classes.gridSpacing} xs={12}>
                    <Paper className={classes.paper}>
                      <Grid container>
                        <Grid item xs={12} sm={7}>
                          <Typography gutterBottom variant="headline">
                            How does Kittyland work?
                          </Typography>
                          <br />
                          <Typography gutterBottom variant="subheading">
                            Buy tickets for attractions as tokens through Smart Contracts using blockchain
                            technology and make your CryptoKitties life more exciting.
                          </Typography>
                          <br />
                          <Typography gutterBottom variant="subheading">
                            Kittyland is an interactive game that lets anyone buy and own tickets for
                            Attractions through Smart Contracts on the Ethereum Blockchain. As soon as you
                            buy a ticket, you take ownership of that token and it automatically increases in
                            price.
                          </Typography>
                          <br />
                          <Typography gutterBottom variant="subheading">
                            If someone else wants to buy that ticket from you, he can do so by paying the
                            new increased price. You will then lose the ownership of that token, but you
                            will receive the paid amount of ETH. You can withdraw Ether from the Smart
                            Contract by clicking withdaw button in the account dropdown.
                          </Typography>
                        </Grid>
                        <Grid item sm={1} />
                        <Grid
                          item
                          style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            display: 'flex',
                          }}
                          hidden={{ xsDown: true }}
                          sm={4}
                        >
                          <div style={{ position: 'relative' }}>
                            <img
                              width="100%"
                              src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/105.png"
                              alt="kitty"
                            />
                            <div className={classes.quote}>
                              <Typography variant="subheading" gutterBottom className={classes.quoteText}>
                                &quot;Everyone is welcome at Kittyland&quot;
                              </Typography>
                              <Typography style={{ textAlign: 'right' }} variant="caption">
                                Delilah
                                <span role="img" aria-label="swords">
                                  ⚔️
                                </span>
                                <span role="img" aria-label="fish">
                                  🐟
                                </span>
                                <span role="img" aria-label="heart">
                                  💖
                                </span>
                              </Typography>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.gridSpacing} style={{ backgroundColor: 'white' }}>
                <div className={classes.mainContainer}>
                  <div className={classes.paper}>
                    <Grid container spacing={16}>
                      <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.quotePaper}>
                          <img
                            width="100%"
                            src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/528614.svg"
                            alt="kitty"
                          />
                          <div className={classes.quote}>
                            <Typography gutterBottom variant="subheading" className={classes.quoteText}>
                              &quot;This is so exciting!&quot;
                            </Typography>
                            <Typography style={{ textAlign: 'right' }} variant="caption">
                              {"Lil' Bob "}
                              <span role="img" aria-label="paws">
                                🐾
                              </span>
                            </Typography>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.quotePaper}>
                          <img
                            width="100%"
                            src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/571452.png"
                            alt="kitty"
                          />
                          <div className={classes.quote}>
                            <Typography gutterBottom variant="subheading" className={classes.quoteText}>
                              &quot;I think I&apos;ll stay in<br />
                              Kittyland forever&quot;
                            </Typography>
                            <Typography style={{ textAlign: 'right' }} variant="caption">
                              Pew-Pew
                            </Typography>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item hidden={{ smDown: true }} md={3}>
                        <Paper className={classes.quotePaper}>
                          <img
                            width="100%"
                            src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/613257.png"
                            alt="kitty"
                          />
                          <div className={classes.quote}>
                            <Typography gutterBottom variant="subheading" className={classes.quoteText}>
                              &quot;Ferris Wheel was great!&quot;
                            </Typography>
                            <Typography style={{ textAlign: 'right' }} variant="caption">
                              Kitty #613257
                            </Typography>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item hidden={{ smDown: true }} md={3}>
                        <Paper className={classes.quotePaper}>
                          <img
                            width="100%"
                            src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/1.png"
                            alt="kitty"
                          />
                          <div className={classes.quote}>
                            <Typography gutterBottom variant="subheading" className={classes.quoteText}>
                              &quot;I hope they build more rides for Kitties!&quot;
                            </Typography>
                            <Typography style={{ textAlign: 'right' }} variant="caption">
                              Genesis
                            </Typography>
                          </div>
                        </Paper>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
              <div className={classes.mainContainer}>
                <Grid container spacing={16} style={{ justifyContent: 'center' }}>
                  <Grid className={classes.gridSpacing} item xs={12}>
                    <Paper className={classes.paper}>
                      <Grid container>
                        <Grid
                          item
                          style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            display: 'flex',
                          }}
                          hidden={{ xsDown: true }}
                          sm={4}
                        >
                          <div style={{ position: 'relative' }}>
                            <img
                              width="100%"
                              src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/500000.png"
                              alt="kitty"
                            />
                            <div className={classes.quote}>
                              <Typography variant="subheading" gutterBottom className={classes.quoteText}>
                                &quot;Manager is taking good care of Kittyland&quot;
                              </Typography>
                              <Typography style={{ textAlign: 'right' }} variant="caption">
                                Cathena
                              </Typography>
                            </div>
                          </div>
                        </Grid>
                        <Grid item sm={1} />
                        <Grid item xs={12} sm={7}>
                          <Typography gutterBottom variant="headline">
                            What are Manager, Operator and Sponsor tokens?
                          </Typography>
                          <br />
                          <Typography gutterBottom variant="subheading">
                            Manager, Operator and Sponsor tokens are special tokens that earn from sales of
                            tokens that are hierarhically under them.
                          </Typography>
                          <ul>
                            <li>
                              <Typography gutterBottom variant="subheading">
                                Kittyland Manager token owner earns from every token sale in Kittyland.
                              </Typography>
                            </li>
                            <li>
                              <Typography gutterBottom variant="subheading">
                                Attraction Operator token owner earns from each tokens sale on that
                                particular attraction.
                              </Typography>
                            </li>
                            <li>
                              <Typography gutterBottom variant="subheading">
                                Sponsor earns from each sale on his sponsored cabin or car.
                              </Typography>
                            </li>
                          </ul>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
