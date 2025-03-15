import {createStore} from 'redux';


const initialState = {
    selectedQuestions: [],
};

const questionsReducer = (state = initialState, action) => {
    console.log('Action: ', action);
    if(action.type === 'TOGGLE_STATE') {
        const isExpanded = state.selectedQuestions.includes(action.questionId);
        if(isExpanded) {
            return {
                selectedQuestions: [...state.selectedQuestions.filter(question => question !== action.questionId)],
            };   
        } else {
            return {
                selectedQuestions: [...state.selectedQuestions, action.questionId]
            };
        }
    }

    return {...state};
};

const store = createStore(questionsReducer);

export default store;