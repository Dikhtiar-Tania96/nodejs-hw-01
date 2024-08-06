import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB, 'UTF-8');
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (error){
        console.error('Помилка виконання коду', error);
    }
};

console.log(await countContacts());
