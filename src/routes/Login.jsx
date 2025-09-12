export default function Login() {
  return (
    <div className="container">
        <div className="card shadow-sm p-4 text-center">
          <h2 className="mb-3">🔑 Login</h2>
          <form className="mx-auto" style={{ maxWidth: "400px" }}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Digite seu email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Digite sua senha"
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Entrar
            </button>
          </form>
        </div>
    </div>
  );
}