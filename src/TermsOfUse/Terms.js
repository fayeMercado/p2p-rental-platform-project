import React from "react";
import styles from "./Terms.module.css";
import HeaderMain from "../Headers/HeaderMain";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";

const Terms = () => {
  return (
    <div>
      <HeaderMain />
      <Container className={styles.divMain + " px-0 py-3"}>
        <h1 className={styles.h1Main}>TERMS OF USE</h1>
        <p>
          BY USING THE SITE IN ANY WAY, YOU ARE ACCEPTING ALL TERMS OF USE AND
          ALL POLICIES, AND YOU SHALL COPMY IN ACCORDANCE WITH THEM. BEFORE YOU
          DECIDE TO BECOME A MEMBER, YOU MUST READ AND ACCEPT THE TERMS OF USE
          AND ALL POLICIES OF HANDEEMAN.
          <br />
          <br />
          Should you object to any of the Terms of Use or Policies, or any
          subsequent changes or become dissatisfied with Handeeman in any way,
          your only recourse is to immediately discontinue the use (of the Site
          of) of Handeeman. Rent Tycoon has the right, but is not obligated, to
          strictly enforce the Terms of Use or Policies through self-help,
          community moderation, active investigation, litigation and
          prosecution.
        </p>
        <hr />
        <br />
        <h2 className={styles.h2}>Disclaimers</h2>
        <p>
          YOU AGREE AND ACCEPT THAT USING THE SITE AND THE SERVICE IS ENTIRELY
          AT YOUR OWN RISK AND YOU ASSUME TOTAL RESPONSIBILITY FOR THE USE OF
          THE SITE AND THE SERVICES AND ANY RENTAL TRANSACTION YOU ENTER INTO.
          YOUR SOLE REMEDY AGAINST HANDEEMAN FOR DISSATISFACTION WITH THE SITE,
          THE SERVICES, OR ANY CONTENT, IS TO STOP USING THE SITE AND THE
          SERVICE. THE SITE AND THE SERVICE ARE PROVIDED ON AN "AS IS" OR "AS
          AVAILABLE" BASIS, WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY
          KIND. Under no circumstances shall Handeeman be liable for (DIRECT,
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES
          (EVEN IF HANDEEMAN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES), resulting from your use of the Site or the Service, or
          resulting from any rental transaction, including, but not limited to,
          damages or injury resulting from a rented item or non-returned item or
          non-payment by any other user, damages which arise from use or misuse
          of the Site or the Service, from inability to use the Site or the
          Service, or the interruption, suspension, modification, alteration, or
          termination of the Site, the Service or member account. Such
          limitation shall also apply with respect to damages incurred by reason
          of other Services or products received through or advertised in
          connection with the Site or the Service or any links on the Site, as
          well as by reason of any information or advice received through or
          advertised in connection with the Site or the Service or any links on
          the Site. HANDEEMAN EXPRESSLY DISCLAIMS ALL EXPRESS AND IMPLIED
          WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE WARRANTIES OF ACCURACY,
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT OF PROPRIETARY RIGHTS. HANDEEMAN DOES NOT REPRESENT
          OR WARRANT THAT THE SITE OR ANY CONTENTS, SERVICES, OR FEATURES WILL
          BE ERROR-FREE OR UNINTERRUPTEDED, THAT ANY DEFECTS WILL BE CORRECTED,
          THAT YOUR USE OF THE SITE WILL PROVIDE SPECIFIC RESULTS, OR THAT ANY
          FILES OR OTHER DATA YOU DOWNLOAD FROM THE SITE WILL BE FREE OF VIRUSES
          OR CONTAMINATION OR DESTRUCTIVE FEATURES. HANDEEMAN DISCLAIMS ANY AND
          ALL LIABILITY FOR THE ACTS, OMMISSIONS AND CONDUCT OF ANY THIRD
          PARTIES, INCLUDING OTHER USERS, IN CONNECTION WITH OR RELATED TO YOUR
          USE OF THE SITE OR SERVICES, INCLUDING, BUT NOT LIMITED TO, ITEMS
          RENTED TO OR FROM YOU IN CONNECTION WITH YOUR USE OF THE SITE OR
          SERVICES, SERVICES OBTAINED OR GIVEN BY YOU IN CONNECTION WITH YOUR
          USE OF THE SITE OR SERVICES, AND/OR ANY OTHER HANDEEMAN SERVICES.
          HANDEEMAN SHALL NOT BE LIABLE FOR THE DELETION OR FAILURE TO STORE ANY
          CONTENT MAINTAINED OR TRANSMITTED BY THE SERVICE. RENT TYCOONS WILL
          NOT PROVIDE LEGAL ADVICE REGARDING ANY SERVICES YOU USE (OR PROPOSE TO
          USE). NO ACT OF HANDEEMAN SHALL BE INTERPRETED AS PROVIDING LEGAL
          ADVICE, INCLUDING BUT NOT LIMITED TO PROVIDING LEGAL DOCUMENT
          TEMPLATES OR PERMITTING A RENTAL TRANSACTION TO OCCUR. RENT TYCOONS
          ENCOURAGES YOU TO SEEK YOUR OWN LEGAL COUNSEL IF YOU HAVE ANY
          QUESTIONS REGARDING YOUR PERSONAL LIABILITY FOR ANY PARTICULAR
          TRANSACTION OR IF YOU WOULD LIKE A RENTAL AGREEMENT DRAFTED AND/OR
          REVIEWED.
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default Terms;
