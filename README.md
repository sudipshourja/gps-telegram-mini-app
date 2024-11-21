<p align="center">
  <br>
  <img width="240" src="./src/assets/app.webp" alt="logo of telegram web apps">
  <br>
  <br>
</p>

# Telegram Mini Apps Basic Example

This is a basic and straightforward Telegram Mini App(TMA) implemented using plain React (Vite). This project aims to provide a minimalistic example of how to create a simple TWA, location access and launch it within Telegram without relying on complex build tools or bleeding-edge libraries.

- App is available via direct link: https://t.me/weatherminiappbot?startapp
- Or you can launch app with a bot menu button: https://t.me/weatherminiappbot
- Deployment URL: [https://twa-weather-app.vercel.app/](https://twa-weather-app.vercel.app)

## Features

- Minimalistic user interface.
- No external libraries or frameworks used.
- Easy to understand and modify.

## Getting Started

### Prerequisites

To run this example, you'll need a modern web browser with JavaScript enabled.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/asqarbekolimov/twa-weather-app.git

   ```

2. Navigate to the project directory:

   ```bash
   cd twa-weather-app
   ```

Open App.jsx in your preferred code editor or IDE.

### Environment Variables

```bash
VITE_WEATHER_API_KEY= your Open Weather Map api key
```

### Telegram Mini App API

```bash
 <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
```

add to head tag in index.html

### Enable Dev Tools

```bash
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
```

Added script to run dev tools

```bash
<script>eruda.init();</script>
```

### Customization

Feel free to customize this web app to suit your needs. You can modify the React JS and Tailwind CSS files as required.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your fork.
5. Create a pull request to the main repository's main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
