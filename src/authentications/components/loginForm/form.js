import '../../styles/login.css';

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <h2 className='h2 mt-5'>Hello, Welcome Back</h2>
            <p className='mb-1'>Login to access your account</p>
            <form className="login-form" action="#" method="post">
                <label htmlFor="Email" className="labels mb-1 mt-3">Email</label> <br/> <span></span>
                <input className='login-input p-2' type="text" name="Email" id="email" placeholder="Email"/>
                <br />
                <span></span>
                <label htmlFor="paswword" className="labels mb-1 mt-3">Password</label> <br/>
                <input  className='login-input p-2'type="password" name="password" id="passwd" placeholder="Password"/>
                <br/>
                <span></span>
                <input type="submit" value="Login" className="login p-2 rounded fw-bold mt-3 mb-2" />
        </form>
        </div>
    );
};

// form validation
//this code doesn't work yet
const email = document.getElementById('#email');
const password = document.getElementById('#passwd');

export default LoginForm;