// Import the Node.js filesystem module so markdown files can be read from disk.
import fs from 'fs';
// Import the path utility to build file paths correctly for the current project.
import path from 'path';
// Import the gray-matter library so frontmatter metadata can be parsed out of markdown files.
import matter from 'gray-matter';

// Set the directory that stores the markdown blog posts for the app.
const postsDirectory = path.join(process.cwd(), 'posts');

// Export a function that reads all markdown files and returns post metadata sorted newest first.
export function getSortedPostsData() {
  // Read every file in the posts folder to gather available blog entries.
  const fileNames = fs.readdirSync(postsDirectory);
  // Map each markdown file into a simplified post object with its id and metadata.
  const allPostsData = fileNames.map((fileName) => {
    // Remove the .md extension from the file name to create the route id.
    const id = fileName.replace(/\.md$/, '');

    // Build the full path to the markdown file so it can be opened.
    const fullPath = path.join(postsDirectory, fileName);
    // Read the file contents from disk as plain text.
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the markdown frontmatter so metadata like title and date can be extracted.
    const matterResult = matter(fileContents);

    // Return the parsed data together with the id field for the page generation logic.
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort all posts by date so the newest entries appear first.
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Export a function that returns the route params for all post pages in the app.
export function getAllPostIds() {
  // Read the names of each markdown file in the posts folder.
  const fileNames = fs.readdirSync(postsDirectory);
  // Convert each file name into a Next.js path object with a params.id value.
  return fileNames.map((fileName) => {
    return {
      params: {
        // Strip the file extension so the URL id matches the markdown file name.
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// Export a function that returns the full data for a single post, identified by its id.
export function getPostData(id) {
  // Build the exact file name using the requested post id.
  const fullPath = path.join(postsDirectory, `${id}.md`);
  // Read the target markdown document from disk.
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse the markdown frontmatter and body so the metadata can be returned to the page.
  const matterResult = matter(fileContents);

  // Return the id plus the metadata fields from the markdown file.
  return {
    id,
    ...matterResult.data,
  };
}