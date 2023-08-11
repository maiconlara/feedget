import CloseButton from "../../CloseButton";
import sucess from "../../../assets/success.svg";

const FeedbackSuccess = () => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={sucess} alt="sucesso" className="w-12 h-12" />
      </div>

      <span className="text-xl mt-8 ">Agradeçemos seu Feedback!</span>
    </> 
  );
};
export default FeedbackSuccess;
