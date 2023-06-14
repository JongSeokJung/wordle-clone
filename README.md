# Wordle Clone Application

The Wordle Clone Application is a fun word-guessing game where players try to guess a five-letter word within a limited number of attempts. This application is inspired by the popular game called Wordle. With this application, you can test your vocabulary skills and have an enjoyable gaming experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Word Guessing**: Attempt to guess a five-letter word within a specified number of tries.
- **Letter Validation**: Validate your guesses and receive feedback on correct and incorrect letters.
- **Random Word Generation**: Obtain random five-letter words for each game session.
- **Dictionary Check**: Verify the validity of user input by checking if it exists in a dictionary.

## Technologies Used

The Wordle Clone Application is programmed using the following technologies:

- HTML: Used for structuring the application's user interface.
- CSS: Utilized for styling and layout of the application.
- JavaScript: Implemented for the back-end logic and functionality.
- Express: Used to handle APIs for handling GET and POST requests.

## Installation

1. Clone the repository: `git clone https://github.com/JongSeokJung/wordle-clone.git`
2. Navigate to the project directory: `cd wordle-clone`
3. Install the dependencies: `npm install`
4. Create .env file and put your RAPID API KEY: `RAPID_API_KEY={your-key}`

## Usage

1. Run the application: `npm start`
2. Open your web browser and visit `http://localhost:3000` to access the Wordle Clone interface.
3. Follow the on-screen instructions to play the Wordle Clone game.

## APIs Used

The Wordle Clone Application integrates the following APIs:

- Random Words API: Used to generate random five-letter words for each game session.
- Twinword API: Utilized to check whether the user's input is valid by checking if it exists in a dictionary.

Please make sure to obtain API keys from the respective providers and update the configuration files accordingly.

## Contributing

Contributions are welcome! If you'd like to contribute to the Wordle Clone Application, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and test thoroughly.
4. Commit your changes: `git commit -m "Add feature-name"`
5. Push to your forked repository: `git push origin feature-name`
6. Open a pull request detailing your changes and improvements.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this application for personal or commercial purposes.
