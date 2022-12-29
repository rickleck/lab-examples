import { FormEvent, useRef } from 'react';
import './styles.scss';

function Login({ login, close }: { login: Function; close: Function }): JSX.Element {
    const username = useRef<HTMLInputElement | null>(null);

    /**
     *
     */
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        login(username.current?.value);
        close();
    }

    return (
        <div className="login">
            <div className="bg" onClick={() => close()}></div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="header">Login</div>
                    <div className="form-control">
                        <label htmlFor="username" className="label">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="input-text"
                            ref={username}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input-text"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary btn-submit">
                        Submit
                    </button>
                </form>
                <button className="btn-close" onClick={() => close()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path
                            fill="black"
                            d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Login;
