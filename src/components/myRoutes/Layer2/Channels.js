/**
 * Created by macbook on 2/4/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import HelloWorld from '../../../containers/HelloWorld'
import MessageContainer from '../../../containers/MessageContainer'
import './channels.scss'

const Channels = () => (
    <div className="row" >
        <div className="col-5">
            Col #2
            <h2>Channels</h2>
            <HelloWorld />
        </div>
        <div className="col-7">
            Col #3
            <MessageContainer />
        </div>
    </div>
)

Channels.propTypes = {
  //  onClick: PropTypes.func.isRequired,
}

export default Channels