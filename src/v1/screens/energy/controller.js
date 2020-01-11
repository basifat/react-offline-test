import React from 'react';
import { Chart } from "react-google-charts";
import { useDataServices } from '../../services';
import { ENDPOINT, withData } from '../../utils';
import { Loader, Error, Header } from '../../components';
import styles from './styles.scss'


export const Charts = ({ errorMessage, loaderMessage }) => {
    const [{ data, isLoading, isError }] = useDataServices(ENDPOINT, {})

    if (isError) return <Error message={errorMessage} />

    if (!isLoading) {

        const enhancedDataWith = withData(data)
        const enhancedChartWith = enhancedDataWith(Chart)
        const enhanceComponentWith = enhancedChartWith(Header)

        const GaugeChart = enhanceComponentWith({ chartType: "Gauge" })
        const PieChart = enhanceComponentWith({ chartType: "PieChart" })
        const AreaChart = enhanceComponentWith({ chartType: "AreaChart" })
        const BarChat = enhanceComponentWith({ chartType: "Bar" })

        return <div className={ `${styles.charts} charts` }>
            <div className={ `${styles.chart} chart` }><PieChart /></div>
            <div className={ `${styles.chart} chart` }><GaugeChart /></div>
            <div className={ `${styles.chart} chart` }><AreaChart /></div>
            <div className={ `${styles.chart} chart` }><BarChat /></div>
        </div>
    }

    return <Loader message={loaderMessage} />
}

