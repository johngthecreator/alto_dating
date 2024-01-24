import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import QuestionSection from './QuizSection';
import Results from '../pages/Results';
import { useAtom } from 'jotai';
import { nameAtom } from '../data/quizAtoms';
import { experienceAtom } from '../data/quizAtoms';
import { heightAtom } from '../data/quizAtoms';




export default function QuizContainer() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [hasResult, setHasResult] = useState<boolean>(false);
    const [, setName] = useAtom(nameAtom);
    const [, setExperience] = useAtom(experienceAtom);
    const [, setHeight] = useAtom(heightAtom);

    const quizData = [
    { question: "Select your experience", input: 0, atom: setExperience },
    { question: "What's your name?", input: 1, atom: setName },
    { question: "What's your height?", input: 2, atom: setHeight},
    ];

    const nextQuestion = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setHasResult(true);
        }
    };
    return (
        <div>
            <AnimatePresence>
                <div className='flex h-screen w-full'>
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className='w-full h-full flex justify-center items-center'
                        >
                        {hasResult ? (
                            <Results />
                        ):(
                            <QuestionSection
                            data={quizData[currentQuestion]}
                            onNext={nextQuestion}
                            />
                        )}
                        </motion.div>
                </div>
            </AnimatePresence>
        </div>
    );
}
