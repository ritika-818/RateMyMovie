import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return <div>
    <button className="back-btn" onClick= {()=>navigate(-1)}> Back Button</button>
    I'm Sign Page
    </div>;
};
export default SignIn;
