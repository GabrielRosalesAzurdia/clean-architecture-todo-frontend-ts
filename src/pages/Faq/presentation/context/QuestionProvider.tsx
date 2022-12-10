import React from "react"
import { QuestionList } from "../../domain/models"
import {QuestionContext} from "./QuestionContext"

const INITIAL_STATE:QuestionList = {
    value:[
        {
            title:"Where do I write my Todos?",
            text:"Write the title of your to-do and the description of your to-do at the form in the home page."
        },
        {
            title:"How to I add my Todos?",
            text:"When finished writing your todo at the form click the 'Add' button."
        },
        {
            title:"How many Todos can I add?",
            text:"As many as you want."
        },
        {
            title:"How do I delete a Todo?",
            text:"Click the 'delete' button at the end of your todo card at watch it disappear."
        },
        {
            title:"Can anyone else see my todos or can I share them?",
            text:"No, your todos are for your eyes only."
        },
    ]
}

interface QuestionContextInterface{
    children:JSX.Element | JSX.Element[]
}

export const QuestionProvider:React.FC<QuestionContextInterface> = ({children})=>{
    const questions = INITIAL_STATE;
    return <QuestionContext.Provider value={{questionState:questions}}>
        {children}
    </QuestionContext.Provider>
}
