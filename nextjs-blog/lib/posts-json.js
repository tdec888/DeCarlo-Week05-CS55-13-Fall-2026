import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data'); // data defines the data sub dir

export function getSortedPostsData() { // load the json data from file
    const filePath = path.join(dataDir, 'posts.json'); // define file name
    const jsonString = fs.readFileSync(filePath, 'utf8'); // read file synchronously
    const jsonObj = JSON.parse(jsonString); // parse into an object
    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.title); // sort based upon a.xxxxx.localeCompare

    })
    return jsonObj.map(item => { // map data and return
        return {
            id: item.id.toString(),
            title: item.title,
            date: item.date
        }
    })
}


export function getAllPostIds() { //received and parases post ids
    const filePath = path.join(dataDir, 'posts.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString); // parses JSON
    console.log(jsonObj);
    return jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString() // return ID from json
            }
        }
    })

}

export function getPostData(id) {
    const filePath = path.join(dataDir, 'posts.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);

    const objReturned = jsonObj.filter(obj => {
        return obj.id.toString() === id;

    });

    if (objReturned.length === 0) {
        return {
            id: id,
            title: 'Not Found', 
            date: 'Not Found',
            contentsHTML: 'Not Found'
        }
    } else {
        return objReturned[0];
    }

}