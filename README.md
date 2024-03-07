# Image Generator

This Node.js backend application is designed specifically for generating images using the Dal-E-3 model from OpenAI. It provides a straightforward interface for making API calls to Dal-E-3 and generating images based on given prompts. This project serves as a portfolio piece showcasing the integration of Dal-E-3's image generation capabilities into real-world applications.

## Description

The application facilitates image generation by accepting prompts from users and utilizing OpenAI's Dal-e-3 model to produce corresponding images. With this backend, you can seamlessly incorporate Dal-E-3's image generation functionality into various projects, such as art generation tools, visual content creation platforms, or image-based chatbots.

## Features

- Image generation: Utilizes the Dal-E-3 model to generate images based on provided prompts.
- Customization Options: Allows users to specify parameters such as prompts, image size, and other generation settings.
- Scalable Architecture: Built on Node.js, the application ensures efficient handling of image generation requests, making it suitable for scaling in production environments.

## Installation

1. Clone this repository to your local machine:

2. Navigate to the project directory:

3. Install dependencies:

4. Obtain your OpenAI API key specifically for Dal-E-3 model usage. You can acquire the API key from the OpenAI website (https://openai.com/). Once obtained, create a `.env` file in the root directory of the project and add the following:
   Replace `your_openai_api_key` with your actual API key.

5. Start the server:

## Usage

Interact with the application through its RESTful API endpoints to generate images using Dal-E-3. Below is how you can use the endpoints:
