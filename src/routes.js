import React from 'react';
import {Route , IndexRoute} from 'react-router';

import App from './components/app';
import ExamIndex from "./components/exam_index";
import ExamNew from "./components/exam_new";

export default (
    <Route path="/" component={App} >
        <IndexRoute component={ExamIndex}/>
        <Route path="/exam/new" component={ExamNew}/>
    </Route>
);