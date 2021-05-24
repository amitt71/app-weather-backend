export const forecastConfig = (cityKey: string) => {
    const config = {
        params: {
            locationKey: cityKey,
            apikey: process.env.API_KEY,
            metric: true
        }
    };
    return config;
};
