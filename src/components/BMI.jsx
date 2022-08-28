import {
  BlueText,
  BMICardContainer,
  Center,
  DarkText,
  DarkTitle,
  IconButton,
  InlineInfo,
  NumberSlider,
  NumberSliderContainer,
  NumberSliderItem,
} from "./CustomComponets";
import { MdOutlineMoreHoriz, MdArrowDropDown } from "react-icons/md";

const BMICard = (props) => {
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }

  //   Use these function to make the scoller even better
  function destroyed() {
    window.removeEventListener("scroll", this.actionScroll);
  }
  function created() {
    window.addEventListener("scroll", this.actionScroll);
  }

  const SliderNumbers = range(1, 100);
  return (
    <BMICardContainer>
      <InlineInfo>
        <DarkTitle>Body Mass Index</DarkTitle>
        <MdOutlineMoreHoriz size={25} />
      </InlineInfo>
      <InlineInfo>
        <NumberSliderContainer>
          <IconButton>
            <Center>
              <MdArrowDropDown size={20} color="rgba(1, 42, 50, 0.5)" />
            </Center>
          </IconButton>
          <NumberSlider cap>
            {SliderNumbers.map((num) => (
              <NumberSliderItem>{num}</NumberSliderItem>
            ))}
          </NumberSlider>
          <Center>
            <BlueText>Kg</BlueText>
          </Center>
        </NumberSliderContainer>

        <NumberSliderContainer>
          <IconButton>
            <Center>
              <MdArrowDropDown size={20} color="rgba(1, 42, 50, 0.5)" />
            </Center>
          </IconButton>
          <NumberSlider cap>
            {SliderNumbers.map((num) => (
              <NumberSliderItem>{num}</NumberSliderItem>
            ))}
          </NumberSlider>
          <Center>
            <BlueText>Kg</BlueText>
          </Center>
        </NumberSliderContainer>
      </InlineInfo>
      <br />
      <InlineInfo>
        <DarkText>Underweight</DarkText>
        <DarkText>Normal</DarkText>
        <DarkText>Overweight</DarkText>
      </InlineInfo>
    </BMICardContainer>
  );
};

export default BMICard;
