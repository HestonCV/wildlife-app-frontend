# Wildlife App Frontend

## Introduction

The Wildlife App Frontend is a React Native application that serves as the user interface for interacting with wildlife images, camera settings, and statistics. It communicates with the Wildlife App Server to fetch and display data.

## Technologies Used

- **React Native**: The framework used for building the mobile application.
- **React Navigation**: Library used for navigation within the app.
- **Expo**: Framework and platform for universal React applications.
- **expo-secure-store**: Secure storage solution for the app.

## UI Markup

Below are some initial UI mockups designed in Figma to give an idea of the planned user interface for the login and home screens.

<img src="https://i.imgur.com/cRREYME.png" alt="UI Markup" width="400"/>

## Current Features

### User Authentication

- **User Registration**: Allows new users to register.
- **User Login**: Allows existing users to login using email and password.
- **JWT Authentication**: Securely manages user sessions.

### Image Management

- **View Recent Images**: The Home screen displays the images in descending chronological order.

### Camera Management

- **Pair Camera**: The Camera screen prompts the user to enter information about the camera, including a user-chosen name and description, and the unique identification token for their camera. This allows the server to correctly pair the user with the camera.

## Code Structure

- `src/navigation`: Contains all the navigation stacks and tabs.
- `src/screens`: Contains individual screens for features.
- `src/utils`: Contains utility functions like token management.
- `src/constants`: Contains constant values like colors and server URLs.

## Future Implementations

### User Experience

- **Styling & UI/UX**: Once the core functionalities are in place, the focus will shift towards enhancing the user interface and experience. This will include implementing a cohesive color scheme and responsive layouts to ensure a seamless user experience across various devices.

### User Authentication

- **Logout**: This would invalidate the JWT Token associated with the user and navigate them to the login screen.

### Image Management

- **View Image Details**: Allow the user to click an image to view information about the image including, date, time, classification, and what camera took the image.
- **Get Images by Camera**: In the Images screen, the user will be able to choose a list of images based on camera.
- **Get Images by Classification**: In the Images screen, the user will be able to choose a list of images based on their specific classification. (e.g. "Deer")

### Statistics

- **Capture Analytics**: The statistics page will offer in-depth insights into image capture metrics, including the frequency of captures and the prevalence of specific wildlife types. This feature aims to be particularly useful for research projects that involve many cameras.
- **Graphics**: To enhance user understanding and engagement, the statistics page will also feature interactive charts and graphs. These visual aids will represent data such as capture frequency per camera, wildlife diversity, and other relevant metrics.

## Challenges and Solutions

### Challenge: Navigation

- **Problem**: Creating an intuitive navigation system that allows users to easily access various features of the app.
- **Solution**: Implemented a hybrid navigation system using both tab-based and stack-based navigation. Tab navigation is used for the main features of the app, while stack navigation is nested within each tab to handle more specific tasks and details.

## Contact

Name - Heston Vaughan  
Email - [heston.cv@gmail.com](mailto:heston.cv@gmail.com)  
Project Link: [https://github.com/HestonCV/wildlife-app-server](https://github.com/HestonCV/wildlife-app-server)
