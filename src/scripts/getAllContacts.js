import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises'

export const getAllContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB, "UTF-8");
        return JSON.parse(data);
    } catch (error){
        console.error('Error: Помилка виконання файлу', error);
    }
};

console.log(await getAllContacts());
