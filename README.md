# Entertainment Hub - Joke Generator App

A fun web application built with Node.js, Express, EJS, Bootstrap, and Axios that fetches jokes dynamically from the JokeAPI.

## Features

- Get random jokes
- Select custom joke categories:
  - Programming
  - Misc
  - Dark
  - Pun
  - Spooky
  - Christmas

- Filter by language
- Blacklist unwanted joke content:
  - NSFW
  - Religious
  - Political
  - Racist
  - Sexist
  - Explicit

- Choose joke type:
  - Single
  - Two Part

- Select number of jokes (1–5)

- Preserves selected form options after submission.

---

## Tech Stack

- Node.js
- Express.js
- EJS
- Axios
- Bootstrap 5
- JokeAPI

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/entertainment-hub.git
```

Go into project folder:

```bash
cd entertainment-hub
```

Install dependencies:

```bash
npm install
```

---

## Run Project

```bash
node index.js
```

or if using nodemon:

```bash
nodemon index.js
```

Open in browser:

```bash
http://localhost:3000
```

---

## Project Structure

```bash
project/
│
├── public/
│   └── css/
│       └── main.css
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   └── dashboard.ejs
│
├── index.js
├── package.json
└── README.md
```

---

## API Used

JokeAPI

```bash
https://v2.jokeapi.dev
```

Documentation:

https://jokeapi.dev

---

## Future Improvements

- Add Weather API
- Add Currency Converter
- Add NASA API section
- Add Dark/Light Mode
- Add More Entertainment APIs

---

## Author

Built by Your Name
