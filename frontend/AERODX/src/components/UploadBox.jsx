function UploadBox() {
  return (
    <div
      style={{
        border: "2px dashed #ccc",
        padding: "30px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Upload CT Scan</h2>

      <input type="file" />

      <br />
      <br />

      <button>Analyze Scan</button>
    </div>
  );
}

export default UploadBox;