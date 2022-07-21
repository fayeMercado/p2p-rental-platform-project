import React from "react";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
import close from "./images/Close.png";

function Login() {
	return (
		<div className={styles.divLoginMain}>
			<img className={styles.close} src={close} />
			<h1 className={styles.loginH1}>LOG IN</h1>
			<form action="">
				<div>
					<label htmlFor="">E-mail</label>
					<input type="text" placeholder="E-mail" name="first name" required />
					<label htmlFor="">Password</label>
					<input
						type="password"
						placeholder="Password"
						name="first name"
						required
					/>
					<p className={styles.forgotPass}>Forgot password?</p>
					<div className={styles.divLogin}>
						<button className={styles.buttonLogin}>Login</button>
					</div>
					<p className={styles.member}>
						Not yet a member?{" "}
						<span className={styles.signUpLink}>Sign Up!</span>
					</p>
				</div>
			</form>
		</div>
	);
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
