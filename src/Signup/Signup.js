import React from "react";
import PropTypes from "prop-types";
import styles from "./Signup.module.css";
import close from "../Login/images/Close.png";

function Signup() {
	return (
		<div className={styles.mainDiv}>
			<div className={styles.divSignupMain}>
				<img src={close} className={styles.close} />
				<h1 className={styles.signupH1}>CREATE A NEW ACCOUNT</h1>
				<form className={styles.formItem} action="">
					<div>
						<label className={styles.labelItem}>First Name</label>
						<input
							type="text"
							placeholder="First Name"
							name="first name"
							className={styles.inputItem}
							required
						/>
						<label className={styles.labelItem} htmlFor="">
							Last Name
						</label>
						<input
							type="text"
							placeholder="Last Name"
							name="first name"
							className={styles.inputItem}
							required
						/>
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
							Phone Number
						</label>
						<input
							type="text"
							placeholder="+639XXXXXXXXX"
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
						<label className={styles.labelItem} htmlFor="">
							Confirm Password
						</label>
						<input
							type="password"
							placeholder="Confirm Password"
							name="first name"
							className={styles.inputItem}
							required
						/>
						<div className="divTerms">
							<input
								className={styles.checkBox}
								type="checkbox"
								placeholder="Password"
								name="first name"
								required
							/>
							<label className={styles.checkboxText} htmlFor="">
								I agree to the Handeeman's Terms of Use including the
								collection, use and disclosure of my personal data in accordance
								with and for the purposes set out in the Privacy Policy
							</label>
						</div>
						<div className={styles.divRegister}>
							<button className={styles.buttonRegister}>Register</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
