import React from 'react';

const UserInput = ({ username, password, handleChange, handleSubmit, isLogin }) => {
    return (
        <form className='login-register-internal-form' onSubmit={handleSubmit}>
            <div className="login-register-form-group">
                <label htmlFor="email">Email</label>
                <input
                    className="form-control"
                    name="username"
                    type="email"
                    value={username}
                    onChange={handleChange}
                />
            </div>
            <div className="login-register-form-group">
                <label htmlFor="password">Password</label>
                <input
                    className="form-control"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-blue btn-sign">
                {isLogin ? 'Login' : 'Register'}
            </button>
        </form>
    );
};

export default UserInput;
