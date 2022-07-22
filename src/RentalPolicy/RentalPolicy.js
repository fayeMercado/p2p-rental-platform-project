import React from "react";
import styles from "./RentalPolicy.module.css";
import HeaderMain from "../Headers/HeaderMain";
import Footer from "../Footer/Footer";

const RentalPolicy = () => {
  return (
    <div>
      <HeaderMain />
      <div className={styles.divMain}>
        <h1 className={styles.h1Main}>RENTAL POLICY</h1>
        <p>
          This Rental Policy is to be considered in conjunction with our Privacy
          Policy, Prohibited Items and Terms of Use. Any agents, employees,
          attorneys, or anyone else acting on behalf of a Member must follow the
          terms of this Rental Policy and all other Handeeman Policies. Terms
          that are not defined herein shall have the same meaning as set forth
          in the Terms of Use.
        </p>
        <hr />
        <br />
        <h2 className={styles.h2}>Description Of The Rental Items</h2>
        <p>
          Any Member may post a Rental Item on the Handeeman's website at no
          cost. A “Rental Item” describes an object, product or good (an “Item”)
          to be offered for rent. A Rental Item can only include the words,
          documents and images which the positing Member decides to put online.
          Members are responsible for their Content, especially with regards to
          any intellectual property claims which might be made by a third party.
          All the objects, products, goods, and services must be placed in the
          appropriate category. Any Member, including you, who posts a Rental
          Item (an “Owner”) is solely responsible for ensuring proper categories
          for their rental items. Placement of a Rental Item in a particular
          category by an Owner can in no instance be interpreted as a guarantee
          on Handeeman's part regarding the origin and authenticity of said
          Rental Item. An Owner must have either all ownership rights to, or all
          rights allowing them to rent, the Item on their Rental Item. Any
          material terms and conditions of a Rental Item, including, but not
          limited to, cost of rental, security deposit, delivery, maintenance
          fees, or any additional fees, representations or warranties must be
          clearly indicated in the Rental Item. Further, if any Rental Agreement
          is to be proposed by the Owner it must be attached to the Rental Item.
          While the Rental Item will include the Owner's city and state, an
          Owner shall make no mention of its Personal Contact Information
          anywhere on the Rental Item. “Personal Contact Information” shall
          include, but is not limited to, the physical location of the listed
          Item, the Owner’s physical address, fax, telephone number, mailing
          address email address, or any other way to contact the Owner outside
          of the Handeeman's interface.
        </p>
        <br />
        <h2 className={styles.h2}>Non-Rentable Objects And Goods</h2>
        <p>
          You agree that any Items that you offer for rent in a Rental Item are:
          only objects and goods that are part of regular market commerce;
          authorized under local Singapore laws to be held, used, and leased;
          free of defects that would put persons or other property in danger;
          not counter to the public good or unethical; or not on Handeeman's
          list of Prohibited Items. The responsibility lies with Owner to ensure
          that the Items he or she offers for rent are legal, authorized and not
          forbidden. In cases where illegal products are offered for rent, penal
          and/or civil responsibilities may be incurred. Any Member who becomes
          aware of a rental offer that involves forbidden goods agree to contact
          Handeeman immediately via email at contact@renttycoons.com. Rent
          Tycoons reserves the right to remove from its website any listings
          which are against the law, and/or contrary to its principles and
          morals. Handeeman also reserves the right to ban the Member who posted
          said offer.
        </p>
        <br />
        <h2 className={styles.h2}>Non-Rentable Objects And Goods</h2>
        <p>
          Any Member, or you, who wish to reserve a Rental Item (the “Proposed
          Renter”) agrees that he or she will review the Rental Item in its
          entirety, including any proposed Rental Agreement, before making any
          reservation. The Proposed Renter has to follow the terms and
          conditions set forth in the Rental Agreement specified in the Rent
          Tycoons' e-contract.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RentalPolicy;
