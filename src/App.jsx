import { useEffect } from "react";
import "./App.css";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useSearchParams } from "react-router-dom";

// import {} from "node"

function App() {
  const [params] = useSearchParams();
  // console.log(params.get("url"));
  // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  //   "pdfjs-dist/build/pdf.worker.min.js",
  //   import.meta.url
  // ).toString();

  const pdfUrl = encodeURI(
    // eslint-disable-next-line no-undef
    `${import.meta.env.VITE_BACKEND_ASSETS_URL}/${params.get("pdfName")}`
  );
  console.log(pdfUrl);
  // const pdfWorker = "pdfjs-dist/build/pdf.worker.min.js";

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.js",
      import.meta.url
    ).toString();
  }, []);

  return (
    <>
      <div className="main">
        <Document file={pdfUrl} onLoadSuccess={console.log}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </>
  );
}

export default App;
