import HeightInput from "./HeightInput";

interface IQuestionSection {
  data:any,
  onNext: ()=>void,
}


const QuestionSection = (props:IQuestionSection) => {
  return (
    <div >
      <h2 className="text-3xl font-bold mb-4">{props.data.question}</h2>
      <div className="space-y-2">
        {props.data.input == 0 &&
        <div className="flex flex-col gap-5">
          <button 
          onClick={()=>{
            props.data.atom(0)
            props.onNext()
          }}
          className="py-1 bg-pink-400 text-white font-bold">
            For the Girls
          </button>
          <button 
          onClick={()=>{
            props.data.atom(1)
            props.onNext()
          }}
          className="py-1 bg-blue-400 text-white font-bold">
            For the Boys
          </button>
        </div>
        } 
        {props.data.input == 1 && 
        <div className="flex flex-col gap-5">
          <input 
          type="text" 
          onChange={(e)=>props.data.atom(e.target.value)}
          placeholder="Alex"
          className="border-solid border-[#333] border-b-2 p-2 rounded-none"
          />
          <button 
          onClick={props.onNext}
          className="py-1 bg-[#333] text-white font-bold"
          >Next</button>
        </div>
        }
        {props.data.input == 2 && 
        <div className="flex flex-col gap-5">
          <HeightInput atom={props.data.atom}/>
          <button 
          onClick={props.onNext}
          className="py-1 bg-[#333] text-white font-bold"
          >Next</button>
        </div>
        }
      </div>
    </div>
  );
};

export default QuestionSection;
