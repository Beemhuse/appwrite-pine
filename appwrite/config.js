import {Client, Account, Databases} from 'appwrite';
const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('6467693109706848b680');
export const account = new Account(client);

// Databases

export const database = new Databases(client, "64679ca71b633b4e8826");