// Import the Node.js file system module so the JSON file can be read from disk.
import fs from 'fs';
// Import the path helper so the app can build a correct file path to the data folder.
import path from 'path';

// Set the folder where the JSON blog data lives inside the project.
const dataDir = path.join(process.cwd(), 'data');

// Export a function that reads the whole JSON file and returns a sorted list of blog entries.
export function getSortedPostsData() {
    // Build the exact path to the posts.json file in the project data folder.
    const filePath = path.join(dataDir, 'posts.json');
    // Read the JSON file as a string so it can be parsed into JavaScript objects.
    const jsonString = fs.readFileSync(filePath, 'utf8');
    // Convert the text file into a JavaScript array of post objects.
    const jsonObj = JSON.parse(jsonString);
    // Sort the posts alphabetically by title so the list appears in a predictable order.
    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    // Return a simplified array that only includes the fields needed by the homepage.
    return jsonObj.map(item => {
        return {
            // Convert the numeric post id into a string so it works naturally in route URLs.
            id: item.id.toString(),
            // Keep the post title for display in the list.
            title: item.title,
            // Keep the published date for display and sorting.
            date: item.date,
            // Keep the gift idea data if the project uses it elsewhere.
            giftideas: item.giftIdea
        };
    });
}

// Export a function that creates the static paths required for each blog post page.
export function getAllPostIds() {
    // Build the full path to the JSON file again.
    const filePath = path.join(dataDir, 'posts.json');
    // Read the JSON file from disk.
    const jsonString = fs.readFileSync(filePath, 'utf8');
    // Parse the text into the JavaScript object structure.
    const jsonObj = JSON.parse(jsonString);
    // Log the data to the console during development so the values can be inspected.
    console.log(jsonObj);
    // Map each object into a Next.js params object for static generation.
    return jsonObj.map(item => {
        return {
            params: {
                // Convert the numeric id into a string to match the URL parameter format.
                id: item.id.toString()
            }
        };
    });
}

// Export a function that fetches the data for a single post by matching the requested id.
export function getPostData(id) {
    // Locate the JSON file again.
    const filePath = path.join(dataDir, 'posts.json');
    // Read the JSON content from disk.
    const jsonString = fs.readFileSync(filePath, 'utf8');
    // Parse the file into a JavaScript array.
    const jsonObj = JSON.parse(jsonString);

    // Filter the array down to the matching post whose id equals the requested id.
    const objReturned = jsonObj.filter(obj => {
        return obj.id.toString() === id;
    });

    // If no post matches the id, return a fallback object instead of crashing the page.
    if (objReturned.length === 0) {
        return {
            // Keep the requested route id in the response.
            id: id,
            // Set a placeholder title for missing posts.
            title: 'Not Found',
            // Set a placeholder date for missing posts.
            date: 'Not Found',
            // Set a placeholder HTML value for missing posts.
            contentsHTML: 'Not Found'
        };
    } else {
        // If a match exists, return the original object from the JSON file.
        return objReturned[0];
    }
}
