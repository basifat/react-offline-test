import React from 'react';
import { EnergyCharts } from './v1';

const errorMessage = 'Sorry something went wrong please try later...'
const loaderMessage = 'Loading Chart ...'

export const App = () => 
          <div className="App">
               <EnergyCharts 
                         errorMessage={errorMessage} 
                         loaderMessage={loaderMessage} 
               />
          </div>