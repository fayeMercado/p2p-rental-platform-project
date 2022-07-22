import React from "react";
import styles from "./FAQ.module.css";
import HeaderLanding from "../Headers/HeaderLanding";
import Footer from "../Footer/Footer";

const FAQ = () => {
	return (
		<div>
			<HeaderLanding />
			<div className={styles.divMain}>
				<h1>Frequently Asked Questions</h1>
				<hr />
				<div className={styles.divQuestion}>
					<h2 className={styles.h2Question}>What is Handeeman?</h2>
				</div>
				<div className={styles.divAnswer}>
					<p className={styles.pAnswer}>
						Handeeman is an online marketplace that facilitates peer-to
						peer-renting in the Philippines. Our portal enables you to do the
						following: Make money by putting your items/services up for rent.
						Save money by searching and renting items/services that you need.
						Submit a request for desired items/services that are not yet
						available on the portal.
					</p>
				</div>
				<br />
				<div className={styles.divQuestion}>
					<h2 className={styles.h2Question}>How does Handeeman work?</h2>
				</div>
				<div className={styles.divAnswer}>
					<p className={styles.pAnswer}>
						Our portal allows owners to upload their items/services for
						interested renters to rent at a fee (based daily, weekly or monthly
						rates). Owners set their own rental rates and security deposit
						fee(s) required for their items/services.
					</p>
				</div>
				<br />
				<div className={styles.divQuestion}>
					<h2 className={styles.h2Question}>Why you should rent?</h2>
				</div>
				<div className={styles.divAnswer}>
					<p className={styles.pAnswer}>
						Renting goes beyond money-making and money-saving purposes - more
						importantly, it encourages the sharing and reuse of items.
					</p>
				</div>
				<br />
				<div className={styles.divQuestion}>
					<h2 className={styles.h2Question}>
						What is Handeeman's payment processing system?
					</h2>
				</div>
				<div className={styles.divAnswer}>
					<p className={styles.pAnswer}>
						Once the status of an item is “Reserved”, Handeeman generates a
						unique security code to a Renter. Renter will give the security code
						to an Owner in exchange for the Owner's item. The security code is
						used by the two parties to authenticate the transaction. The Owner
						will claim his rental income by validating the security code in the
						Handeeman's' website.
					</p>
				</div>
				<br />
			</div>
			<Footer />
		</div>
	);
};

export default FAQ;
