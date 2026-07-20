export default function Login() {
  return (
    <div className="page login-page">
      <h1>Login to Cartify</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
