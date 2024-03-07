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

   ```
   git clone https://github.com/ignaciojarruza/image-generator.git
   ```

2. Navigate to the project directory:

   ```
   cd image-generator
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Obtain your OpenAI API key specifically for Dal-E-3 model usage. You can acquire the API key from the OpenAI website (https://openai.com/). Once obtained, create a `.env` file in the root directory of the project and add the following:
   Replace `your_openai_api_key` with your actual API key.

   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

5. Start the server:
   ```
   npm start
   ```

## Usage

Interact with the application through its RESTful API endpoints to generate images using Dal-E-3. Below is how you can use the endpoints:

1. Generate Image

- Endpoint: `/generate`
- Method: POST
- Description: Generate an image using the Dal-E-3 model.
- Request Body:
- - `prompt`: The prompt to generate an image.
- - `image_size`: [soon to be added] Size of the generated image. Defaults to `1024`
- - `num_images`: [soon to be added] Number of images to generate. Defaults to `1`.
- Example Request:

```
curl -X POST -H "Content-Type: application/json" -d '{"image_description": "apples"}' http://localhost:3000/generate
```

- Example Response:

```
{"image_url":"https://oaidalleapiprodscus.blob.core.windows.net/private/org-Uaxtgmryqqal9vH8iE7EHDal/user-qXODqm6V8lyvtG2m3dg92bc8/img-Cjg4KoLfTcRrkROLb07M6cCK.png?st=2024-03-07T18%3A00%3A59Z&se=2024-03-07T20%3A00%3A59Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-03-07T18%3A12%3A23Z&ske=2024-03-08T18%3A12%3A23Z&sks=b&skv=2021-08-06&sig=dYftWv3I586HB8%2BI%2BF8psPE6OJHBFnEw1mshMYZGFd4%3D"}
```
