import { useAtom } from "jotai"
import { nameAtom, experienceAtom, heightAtom } from "../data/quizAtoms"

export default function Results(){
    const [name, ] = useAtom(nameAtom);
    const [experience, ] = useAtom(experienceAtom);
    const [height, ] = useAtom(heightAtom);

    const HeightFeet = (height - (height%12)) / 12
    const HeightExtra = height%12

    let suggestedHeight = (experience == 0) ? .424*height + 42.6 : 0.469*height + 32.7

    const suggestedHeightFeet = (suggestedHeight - (suggestedHeight%12)) / 12
    const suggestedHeightInches = Math.ceil(suggestedHeight%12)


    return(
        <div className="flex flex-col gap-10 p-5 text-2xl">
            <h1 className="font-black text-[40px]">&#128466;&#65039; {name?.toLowerCase()}&#39;s stats &#128466;&#65039;</h1>
            <div className="font-semibold">
                <p>Your Height: {HeightFeet}&#39;{HeightExtra}&#34;</p>
                <p>Suggested {(experience == 0) ? "Guy":"Girl"} Height: {suggestedHeightFeet}&#39;{suggestedHeightInches}&#34;</p>
            </div>
            <div className="flex justify-center">
            <button 
            className="py-2 px-5 bg-[#333] rounded-lg text-white font-bold"
            onClick={()=>location.reload()}
            >
                Retake Quiz
            </button>
            </div>
        </div>
    )
}