import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [fileList, setFileList] = useState([]);
  const [status, setStatus] = useState();
  const [percentage, setPercentage] = useState("");
  const selectFile = (e) => {
    setFileList(e.target.files[0]);
  };

  const downloadExcel = async (e) => {
    e.preventDefault();
    await Axios.get(
      "/getExcel",
      { name: "jagath" },
      { headers: { responseType: "blob" } }
    ).then((response) => {
      console.log("blob", response);
      const src = window.URL.createObjectURL(new Blob([response.data]));
      var fileName = "svd.xlsx";
      var a = document.createElement("a");
      a.href = src;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("file", fileList);
    await Axios.post("/upload", data, {
      headers: { "Content-Type": "multipart/form-data", responseType: "blob" },
      onUploadProgress: (progress) => {
        const { loaded, total } = progress;
        const pc = Math.floor((loaded / total) * 100);
        setPercentage(pc);
      },
    }).then((res) => {
      console.log("rspons", res);
      setStatus(res.data);
      const src = window.URL.createObjectURL(new Blob([res.data]));
      var fileName = `file${Math.random(10)}.txt`;
      var a = document.createElement("a");
      a.href = src;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
    // console.log("rs", rs);
  };
  return (
    <section>
      <div>
        <div>
          <h1>Developer connector</h1>
          <p>
            Create a developer portfolio share posts and get help from others.
          </p>
          <div>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
          <form method="post" encType="multipart/form-data">
            <input
              type="file"
              name="file"
              onChange={(e) => selectFile(e)}
              multiple
            />
            <button type="submit" onClick={(e) => uploadFile(e)}>
              Upload
            </button>
          </form>
          {/* {status && <h2>{status}</h2>} */}
          {<h4>{percentage}</h4>}
          <progress value={percentage} max="100">
            32%
          </progress>
        </div>
      </div>
      <div className="download" onClick={(e) => downloadExcel(e)}>Download Excel</div>
    </section>
  );
};

export default LandingPage;
