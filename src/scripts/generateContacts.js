import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try{
        const data = await fs.readFile(PATH_DB,"UTF-8");
        const contacts = JSON.parse(data);

        //створювати передану кількість згенерованих контактів,
    //а потім додавати їх до масиву у файлі
        for(let i = 0; i < number; i++){
            contacts.push(createFakeContact());
        }
    //записувати їх назад у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
console.log(`${number} contacts generated successfully.`);
    } catch (error){
        console.error("Error: ", error);
    }
};

generateContacts(5);
