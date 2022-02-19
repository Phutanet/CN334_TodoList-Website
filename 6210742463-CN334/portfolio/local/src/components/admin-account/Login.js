import React from 'react';
import './Form.css';

function CreateAccount() {
  return (
    <div className='login'>
        <div class="title">Portfolio</div>
        <div class="sub-title">Please Contract Admin About Web-site</div>
        <form class="login-form">
            <div class="username">
                <input type="text" class="user-input" placeholder="Username" />
            </div>
            <div class="password">
                <input type="password" class="user-pass" placeholder="Password" />
            </div>
            <button class="singin-btn">Submit</button>
        </form>
    </div>
  )
}

export default CreateAccount;