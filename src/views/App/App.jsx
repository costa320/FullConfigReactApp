import React, {Component} from 'react';
/* REDUX */
import {connect} from 'react-redux';
import {SetSession} from '../../redux/actions/SessionActions';
/* CONFIG */
import config from '../../UrlConfig';

class App extends Component {

  componentDidMount() {
    this
      .props
      .SetSession_(config.ENV_variables.enviroment_variable);
  }

  render() {
    return (
      <div className="App">
        Stai in modalita : {config.ENV_variables.enviroment_variable}
      </div>
    );
  }
}

/* quale reducer vuoi utilizzare qui? solo math */
const mapStateToProps = (state) => {
  return {Session: state.SessionREDUCER}
}
const mapDispatchToProps = (dispatch) => {
  return {
    SetSession_: (sessione) => {
      dispatch(SetSession(sessione))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
