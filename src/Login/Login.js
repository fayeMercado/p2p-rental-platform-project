import React from "react";
import PropTypes from "prop-types";
import styles from "./Login.module.css";
import close from "./images/Close.png";

function Login() {
	return (
		<div className={styles.mainBody}>
			<div className={styles.divLoginMain}>
				<img className={styles.close} src={close} />
				<h1 className={styles.loginH1}>LOG IN</h1>
				<form className={styles.formItem} action="">
					<div>
						<label className={styles.labelItem} htmlFor="">
							E-mail
						</label>
						<input
							type="text"
							placeholder="E-mail"
							name="first name"
							className={styles.inputItem}
							required
						/>
						<label className={styles.labelItem} htmlFor="">
							Password
						</label>
						<input
							type="password"
							placeholder="Password"
							name="first name"
							className={styles.inputItem}
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
		</div>
	);
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
