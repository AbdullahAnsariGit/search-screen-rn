# React Native Search Post

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
Search for posts by title or content.
Debounced search input to improve user experience.
Display a loader while fetching data.
Informative message when no search results are found.

Dependencies
This project uses the following major dependencies:

React Native: A JavaScript framework for building mobile applications.
Fuse.js: A lightweight fuzzy-search library for JavaScript.
Custom components: Custom components for UI elements (e.g., CustomList, CustomTextInput, CustomLoader, CustomText, and CustomHeader).

API Services
The fetchPosts function in the apiServices module is responsible for fetching the list of posts from the API. You can modify this function to use a different API or data source if needed.

Configuration
You can adjust various settings in the performSearch function, such as the Fuse.js options (e.g., search keys and threshold) to fine-tune the search behavior to your requirements.
const fuse = new Fuse(posts, {
    keys: ['title', 'body'],
    includeScore: true,
    threshold: 0.4,
});

Contributors
Abdullah Ansari
License
This project is licensed under the MIT License.
