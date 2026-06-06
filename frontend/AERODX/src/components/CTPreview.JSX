function CTPreview() {
  return (
    <div
      style={{
        marginTop: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <h2>CT Scan Preview</h2>

      <div
        style={{
          height: "250px",
          backgroundColor: "#f3f4f6",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        CT Scan Image Preview
      </div>
    </div>
  );
}

export default CTPreview;