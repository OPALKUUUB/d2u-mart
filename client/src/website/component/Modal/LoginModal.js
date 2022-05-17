import { Login } from "../../../auth/Login";

export const LoginModal = ({ onHide }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: "999",
          background: "rgba(0,0,0,0.5)",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => onHide(false)}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          zIndex: "1000",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "white",
            padding: "20px",
          }}
        >
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <button type="button" onClick={() => onHide(false)}>
              close
            </button>
          </div>
          <Login />
        </div>
      </div>
    </>
  );
};
