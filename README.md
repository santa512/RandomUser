# About React Random User Generator

## Random User Generator

This project is a React application that integrates with the Random User Generator API to fetch random user data based on user-defined parameters. It allows users to specify details such as gender, nationality, and the number of users to fetch. The data is then presented in a clean and responsive layout.

## Features

1. ### User Input:

    Input fields to specify parameters like gender, nationality, and the number of users to fetch.
    A submit button that triggers the API request.

2. ### API Integration:

    Fetches random user data based on the parameters entered by the user.
    Uses asynchronous JavaScript (Fetch API or Axios) to handle API requests and responses.

3. ### Display Data:

    Displays user information such as name, gender, email, profile picture, and other relevant details.
    Each user is displayed in a clean card layout.

4. ### Infinite Scroll:

    Used infinte scroll to show large numbers of data to improve performance and user experience.

  ##  Installation

Clone or download the repository:

``` git clone https://github.com/yourusername/random-user-generator.git ```

Navigate to the project folder:

``` cd random-user-generator```

Open the `index.html` file in your browser to view the application.

## How to Use

    Enter the desired parameters:

    - Gender: Choose the gender (Male/Female/Other).
    - Nationality: Choose the nationality of users (e.g., American, British, Canadian).
    - Number of Users: Specify how many random users to generate.

    Click the Submit button to fetch the random user data.
    The fetched user data will be displayed on the page, showing details such as:

    - Name
    - Gender
    - Email
    - Profile picture (if available)
    - API Integration

This project uses the Random User Generator API to fetch random user data. The API endpoint used is:

``` https://randomuser.me/api/ ```
Parameters are passed via the query string to filter the data:

    gender: Filter by gender (e.g., male, female).
    nat: Filter by nationality (e.g., us, gb, ca).
    results: Specify the number of users to fetch (e.g., 10, 20).

## Responsiveness
The application is fully responsive and designed to work seamlessly on mobile, tablet, and desktop devices.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.

## Acknowledgements
- [Random User Generator API](https://randomuser.me/)
- Thank you to all contributors who helped make this project better!