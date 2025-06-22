import TitleHeader from "../components/TitleHeader";
import reactIcon from "/images/logos/react.png";
import { techStackImgs } from "../constants";
const TechStack = () => {
  return (
    <div id="skills" className="flex-center flex-col  section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
        {techStackImgs.map((item, index) => {
          return (
            <div className="flex-center flex-col gap-2" key={index}>
              <div className="w-20 h-20">
                <img className="w-full h-full" src={item.imgPath} alt="" />
              </div>
              <p className="text-2xl font-bold">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
