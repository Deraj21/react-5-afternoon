import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHistory } from '../../ducks/reducer';

class WizardEight extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">                    
                        <p>Have you had a bankruptcy or foreclosure in the past seven years? </p><br />
                    <div className="row">
                        <Link to="/wNine"><button value="Has never been in bankruptcy" onClick={ () => updateHistory("Has never been in bankruptcy") }>No</button></Link>
                        <Link to="/wNine"><button value="Has had bankruptcy before" onClick={ () => updateHistory("Has had bankruptcy before") }>Bankruptcy</button></Link>
                        <Link to="/wNine"><button value="Has had a foreclosure before" onClick={ () => updateHistory("Has had a foreclosure before") }>Foreclosure</button></Link>
                        <Link to="/wNine"><button value="Has had both a foreclosure and a bankruptcy" onClick={ () => updateHistory("Has had both a foreclosure and a bankruptcy") }>Both</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { history } = state;
    return {
        history
    }
}

export default connect( mapStateToProps, { updateHistory } )( WizardEight );