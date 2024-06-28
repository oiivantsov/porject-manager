import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SocialSignup = ({ isLogin }) => {
    const googleText = isLogin ? 'Sign In with Google' : 'Sign Up with Google';
    const facebookText = isLogin ? 'Sign In with Facebook' : 'Sign Up with Facebook';

    return (
        <div className="social-signup">
            <a className="btn btn-google" href="/auth/google" role="button">
                <FontAwesomeIcon className='social-icon' icon={faGoogle} />
                <p className='social-text'>{googleText}</p>
            </a>
            <a className="btn btn-facebook" href="/auth/facebook" role="button">
                <FontAwesomeIcon className='social-icon' icon={faFacebook} />
                <p className='social-text'>{facebookText}</p>
            </a>
        </div>
    );
};

export default SocialSignup;
