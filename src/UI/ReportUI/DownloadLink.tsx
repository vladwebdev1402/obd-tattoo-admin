import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { FC } from "react";
interface Props {
  innerRef: React.RefObject<HTMLParagraphElement>;
  document: React.ReactElement;
  filename?: string;
}
const DownloadLink: FC<Props> = ({ innerRef, document, filename }) => {
  return (
    <PDFDownloadLink document={document} fileName={filename || "example.pdf"}>
      {({ blob, url, loading, error }) =>
        loading ? (
          ""
        ) : (
          <p ref={innerRef} style={{ display: "none" }}>
            1
          </p>
        )
      }
    </PDFDownloadLink>
  );
};

export default DownloadLink;
