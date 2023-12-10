import SmallText from "../UI/SmallText";
import PolicyContainer from "../shared/PolicyContainer";
import TermsAndPolicyLinks from "../shared/TermsAndPolicyLinks";

const TermsDetails = () => (
  <PolicyContainer>
    <SmallText>
      By clicking “Continue with Google” above, you acknowledge tha you have
      read and understood, and agree to Expensier’s Terms & Conditions and
      Privacy Policy.
    </SmallText>

    <TermsAndPolicyLinks />
  </PolicyContainer>
);

export default TermsDetails;
