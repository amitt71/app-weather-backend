import { CityForecast } from './forecasts';
import { PutItemInput } from 'aws-sdk/clients/dynamodb';

export interface ItemParams {
    TableName: 'CitiesForecasts';
    Item: {
        cityKey: string;
        cityForecast: CityForecast;
    };
}

export type AwsConfig = {
    region: string;
    endpoint: string;
    acccessKeyId: string;
    secretAccessKey: string;
};

export const AWSynamoDbConfig = {
    region: 'us-east-2',
    endpoint: 'dynamodb.us-east-2.amazonaws.com'
};
