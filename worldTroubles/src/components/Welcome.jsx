const WelcomeScreen = ({ onStart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ display: "flex", textAlign: "center" }}>
        Welcome to the Beyond Border App
      </h1>
      <button
        onClick={onStart}
        style={{ border: "2px solid #ffc857", padding: "10px 80px" }}
      >
        Start
      </button>
    </div>
  );
};

export default WelcomeScreen;
