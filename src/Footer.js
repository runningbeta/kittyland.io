import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import EthereumLogo from './assets/ethereum-logo.svg';
import RunningBetaLogo from './assets/runningbeta-light.svg';
import CryptoKittiesLogo from './assets/cryptokitties-logo.svg';
import MetamaskLogo from './assets/metamask-logo.svg';

const styles = theme => ({
  footer: {
    paddingTop: theme.spacing.unit * 4,
    position: 'relative',
    backgroundColor: 'rgba(63,81,181,0.7)',
  },
  footerContainer: {
    maxWidth: 1120,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing.unit * 3,
  },
  footerNavigation: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLink: {
    textDecoration: 'inherit',
    color: 'inherit',
    alignItems: 'left',
    justifyContent: 'left',
  },
  button: {
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  buttonLabel: {
    textTransform: 'none',
    color: '#efefef',
  },
  logo: {
    maxWidth: '300px',
    maxHeight: '100px',
    display: 'block',
    margin: '10px auto',
  },
});

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <div className={classes.footerContainer}>
      <Grid container spacing={0}>
        <Grid item xs={6} sm={3} className={classes.footerNavigation}>
          <Tooltip title="Avatars by AxiomZen" placement="top">
            <a rel="noopener noreferrer" href="https://www.cryptokitties.co" target="_blank">
              <img src={CryptoKittiesLogo} alt="CryptoKitties" className={classes.logo} />
            </a>
          </Tooltip>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.footerNavigation}>
          <Tooltip title="Powered by Ethereum" placement="top">
            <a rel="noopener noreferrer" href="https://ethereum.org/" target="_blank">
              <img src={EthereumLogo} alt="Ethereum" className={classes.logo} />
            </a>
          </Tooltip>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.footerNavigation}>
          <Tooltip title="Telemetry by Running Beta" placement="top">
            <a rel="noopener noreferrer" href="https://runningbeta.io" target="_blank">
              <img src={RunningBetaLogo} alt="Running Beta" className={classes.logo} />
            </a>
          </Tooltip>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.footerNavigation}>
          <Tooltip title="Enabled by Metamask and Infura" placement="top">
            <a rel="noopener noreferrer" href="https://metamask.io" target="_blank">
              <img src={MetamaskLogo} alt="Metamask" className={classes.logo} />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Footer);
