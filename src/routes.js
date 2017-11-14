import React from 'react';
import {Route , IndexRoute} from 'react-router';

import App from './components/app';
import ExamIndex from "./components/exams/exam_index";
import ExamNew from "./components/exams/exam_new";
import ExamShow from "./components/exams/exam_show";
import QuestionNew from "./components/questions/question_new";
import QuestionShow from "./components/questions/question_show";

export default (
    <Route path="/" component={App} >
        <IndexRoute component={ExamIndex}/>
        <Route path="/exam/new" component={ExamNew}/>
        <Route path="/exam/:id" component={ExamShow}/>
        <Route path="/question/new/:examId" component={QuestionNew}/>
        <Route path="/question/:id" component={QuestionShow}/>
    </Route>
);