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
        <div>
          <DarkTitle>Vaccinanation Certificate</DarkTitle>
          <Notification>2</Notification>
        </div>
        <AiOutlineMore />
      </InlineInfo>
      <DownloadCard>
        <div>
          <AiOutlineFilePdf size={20} />
          <BlueText>Covid-19 Vaccination</BlueText>
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
        <div>
          <AiOutlineFilePdf />
          <BlueText>Child immunasation</BlueText>
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
