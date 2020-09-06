import { Actions } from './constants';
import axios from '../../utils/axios';
import { normalizeOracles, normalizeChartData } from './normalizers';

export const fetchOraclesInit = () => ({
    type: Actions.ORACLES_FETCH_INIT,
});

export const fetchOracles = () =>
    axios
        .get('/oracles')
        .then((response) => response.data)
        .then(normalizeOracles);

export const fetchOraclesSuccess = (oracles) => ({
    type: Actions.ORACLES_FETCH_SUCCESS,
    oracles,
});

export const fetchOraclesError = () => ({
    type: Actions.ORACLES_FETCH_ERROR,
});

export const fetchChartData = (pubKey) =>
    axios
        .get(`oracles/pubKey/${pubKey}/prices`)
        .then((response) => response.data)
        .then(normalizeChartData);