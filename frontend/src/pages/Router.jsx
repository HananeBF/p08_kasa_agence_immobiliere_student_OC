import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, FicheLogement, APropos } from '@/pages/index'
import Layout from '@/components/Layout'

import Error from '@/_utils/Error'

const Router = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />}/>
            <Route path="/fiche-logement/:idl" element={<FicheLogement />} />
            <Route path="/a-propos" element={<APropos />} />

            <Route path='*' element={<Error />} />
            
          </Route>

        </Routes>
    );
};

export default Router