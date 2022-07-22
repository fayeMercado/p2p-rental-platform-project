import React from "react";
import styles from "./Privacy.module.css";
import HeaderLanding from "../Headers/HeaderLanding";
import Footer from "../Footer/Footer";

const Privacy = () => {
	return (
		<div>
			<HeaderLanding />
			<div className={styles.divMain}>
				<h1 className={styles.h1Main}>Privacy and Data Protection Statement</h1>
				<hr />
				<p>
					Handeeman, Inc aims to comply with the requirements of the Republic
					Act 10173 - <strong>Data Privacy Act of 2012</strong> and respects
					your choices in respect of your personal data. The main purposes for
					which your personal data is collected, used or disclosed by Handeeman
					Inc, its related corporations and our service providers in Singapore
					include providing you with our products and services, managing your
					membership, and your account, processing payments, addressing
					questions and feedback, improving our products and services, as well
					as where permitted under law, sending you marketing and promotional
					offers on our products and services, and personalized content and
					advertising based on your preferences or demographics. In addition, if
					you have registered your telephone number with the national Do Not
					Call (DNC) registry, we will not send you promotional and marketing
					messages via your telephone number unless you have provided Handeeman
					Inc consent to do so. Handeeman Inc has a Privacy Policy which
					provides more information about how we collect, use and disclose your
					personal data. Should you have any feedback or enquiries relating to
					your personal data or if you wish to stop receiving promotional or
					marketing messages from Handeeman Inc, please contact:
				</p>
				<br />
				<p>
					The Personal Data Protection Officer at the following addresses:{" "}
					<br />
					<strong>Name</strong>: Mr Kristoff Villanueva, Chief Security Officer{" "}
					<br />
					<strong>Email</strong>: contact@handeeman.com <br />
					<strong>Address</strong>: 20 Cebu St, Nueva Ecija <br />
					<strong>Phone</strong>: 6807 0320 <br />
					<br />
					For more information about privacy, please visit the Personal Data
					Protection Commission's website at https://www.privacy.gov.ph/
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default Privacy;
