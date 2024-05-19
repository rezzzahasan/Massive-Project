import Navbar from "../components/Navbar";
import "../styles/Register.css";

function Register() {
  return (
    <>
      <Navbar />
      <div className="Register">
        <div className="card-register">
          <h2 className="register-title">Register</h2>
          <form className="register-form">
          <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="username" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" required />
            </div>
            <button type="submit" className="btn-primary">
              Register
            </button>
            <p className="signup-text">
              Sudah punya akun?{" "}
              <a href="#" className="login-link">
                Masuk 
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
