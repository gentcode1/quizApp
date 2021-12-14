import React from 'react';
import { Routes, Route} from 'react-router-dom'
import HomeView from '../view/homeView'
import QuestionView from '../view/questionView'
import Result from '../component/result'
import Failure from '../component/Failure'

const Index=()=>{
    return(
<Routes>

    <Route path={'/'} element={<HomeView/>}/>
            <Route path={'/question'} element={<QuestionView />} />
            <Route path={'/result'} element={<Result />} />
            <Route   path={'/fail'} element={<Failure/>}/>
    </Routes>
    );
}
export default Index;