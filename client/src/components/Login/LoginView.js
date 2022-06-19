import React,
{
    Fragment,
    useState
} from 'react';

const LoginView = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const {email, password} = inputs;
    const onChange = (event) => {
        setInputs({...inputs, [event.target.name] : event.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };
            const response = await fetch(
                'http://localhost:5000/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            );

            const result = await response.json();
            if (result.token) {
                localStorage.setItem('token', result.token);
                setAuth(true);
            } else {
                setAuth(false);
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <div className="form-container sign-in-container">
                <form onSubmit={onSubmitForm}>
                    <h1 className="mt-5 text-center">Login</h1>
                    <input
                        type="text"
                        name="email"
                        className="form-control my-3"
                        placeholder={'EMAIL'}
                        value={email}
                        onChange={e => onChange(e)}
                    />
                    <input
                        type="password"
                        name="password"
                        className="form-control my-3"
                        placeholder={'PASSWORD'}
                        value={password}
                        onChange={e => onChange(e)}
                    />
                    <button
                        className="btn btn-success btn-block"
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </Fragment>
    );
};

export default LoginView;
