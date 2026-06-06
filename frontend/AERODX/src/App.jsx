import Navbar from "./components/Navbar";
import UploadBox from "./components/UploadBox";
import ResultCard from "./components/ResultCard";
import ChatWindow from "./components/ChatWindow";
import CTPreview from "./components/CTPreview";

function App() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          <UploadBox />
          <CTPreview />
          <ResultCard />
        </div>

        {/* Right Side */}
        <div style={{ flex: 1 }}>
          <ChatWindow />
        </div>
      </div>
    </>
  );
}

export default App;