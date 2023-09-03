# React Native Search App

This is a simple React Native application that allows users to search for posts based on their titles and contents. The app fetches a list of posts from an API and uses the Fuse.js library for efficient searching. It also includes a debouncing mechanism to improve search performance.

## Getting Started

To run this project on your local machine, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone <repository-url>

2. Navigate to the project directory:
   cd react-native-search-app

3. Install the required dependencies:
   npm install

4. Run the React Native development server:
   npx react-native start

5. Build and run the app on an Android or iOS emulator or device:
   npx react-native run-android
# or
   npx react-native run-ios

Features
Search Posts: Users can enter a search query in the input field at the top of the screen. As they type, the app dynamically filters and displays posts that match the search query.

Debouncing: The search input is debounced, which means that the search function is only called after a short delay when the user stops typing. This reduces the number of unnecessary API requests and improves performance.

List of Posts: The app displays the search results in a scrollable list. Each item in the list shows the title and content of a post.

Item Separators: To enhance the user interface, a line separator is added between each item in the list for better readability.

Technologies Used
React Native: A JavaScript framework for building native mobile apps.

Fuse.js: A powerful fuzzy search library used for searching posts efficiently.

lodash: A utility library that includes the debounce function used for debouncing the search input.

Project Structure
The project is organized as follows:

components: Contains reusable components used in the app. CustomList is used to display individual posts, and CustomTextInput is used for the search input.

helpers: Contains utility functions and API service functions. apiServices.js contains the function to fetch posts from the API.

styles: Contains the stylesheet for styling the components in the app.

Search.js: The main component of the app that handles the search functionality and renders the UI.

Future Enhancements
Implement pagination for large datasets to load more posts as the user scrolls.

Add error handling and display appropriate messages to the user in case of API request failures.

Improve the UI/UX with better styling and animations.

Allow users to filter posts by additional criteria, such as date or category.

Implement unit tests to ensure the stability of the application.

Contributors
Abdullah Ansari
License
This project is licensed under the MIT License.
