import React from 'react';
import {Route, Link} from 'react-router-dom'

const Intro = props => {

    return (
        <div>
            <h1>Hey, job search is <mark className="emphasize">painful?</mark> We got you</h1>
            <p className="one-line">Here The Interview Club is to help you to nail your <mark className="red">right</mark> job <mark className="red">faster</mark>.</p>
            <div className="btn">
                <Link to='/signup' className="make-btn"
                // onClick={props.history.push('/signup')}
                >Sign Up</Link>
                <Link to='/login' className="make-btn"
                // onClick={props.history.push('/login')}
                >Log In</Link>
            </div>
        </div>
    )
}

export default Intro