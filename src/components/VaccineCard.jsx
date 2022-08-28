import {
  BlueText,
  DarkText,
  DarkTitle,
  DownloadCard,
  IconButton,
  InlineInfo,
  Notification,
  VaccineCardContainer,
} from "./CustomComponets";
import { AiOutlineMore, AiOutlineFilePdf } from "react-icons/ai";

const VaccineCard = (props) => {
  //Get document links from parent component
  const { documentLinks } = props;

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <VaccineCardContainer>
      <InlineInfo>
        <div style={{ display: "flex" }}>
          <h4>Vaccinanation Certificate</h4>
          <Notification>2</Notification>
        </div>
        <AiOutlineMore />
      </InlineInfo>
      <DownloadCard>
        <div
          style={{
            color: "#048ba8",
            width: "100%",
            display: "flex",
          }}
        >
          <AiOutlineFilePdf size={20} />
          <b style={{ color: "#048ba8", width: "100%" }}>
            Covid-19 Vaccination
          </b>
        </div>
        <IconButton
          onClick={() =>
            downloadURI(documentLinks.covid.link, documentLinks.covid.name)
          }
        >
          <DarkText>Download</DarkText>
        </IconButton>
      </DownloadCard>
      <DownloadCard>
        <div
          style={{
            color: "#048ba8",
            width: "100%",
            display: "flex",
          }}
        >
          <AiOutlineFilePdf size={20} />
          <b style={{ color: "#048ba8", width: "100%" }}>Child immunasation</b>
        </div>
        <IconButton
          onClick={() =>
            downloadURI(documentLinks.covid.link, documentLinks.covid.name)
          }
        >
          <DarkText>Download</DarkText>
        </IconButton>
      </DownloadCard>
    </VaccineCardContainer>
  );
};

export default VaccineCard;
