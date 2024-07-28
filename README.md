# LinkedTweet

LinkedTweet is an AI-powered tool designed to help you generate and share tweet-like content tailored for LinkedIn. With our app, you can easily create engaging, professional posts and share them on LinkedIn and Twitter. The app integrates with both platforms and includes features for content moderation and sentiment analysis.

## Features

- **AI-Generated Content:** Enter a topic or prompt to generate professional, tweet-like posts.
- **LinkedIn and Twitter Integration:** Share your posts directly to both platforms.
- **Content Moderation:** Ensures that generated content is appropriate.
- **Sentiment Analysis:** Provides insights into the tone of your posts.

## Tech Stack

### Backend
- **Python:** Used for building the AI model and backend logic.
- **Flask:** A lightweight web framework for serving the AI model and handling requests.
- **SQLAlchemy:** For integrating with the SQLite database (if necessary).

### Frontend
- **HTML/CSS:** For structuring and styling the web pages.
- **JavaScript:** For client-side scripting and making asynchronous requests.

### AI Model
- **Transformers (Hugging Face):** Utilizes a pre-trained language model (e.g., GPT-2) to generate tweet-like content.

### APIs
- **LinkedIn API:** For posting content directly to LinkedIn.
- **Twitter API:** For posting content directly to Twitter.
- **Content Moderation API (e.g., Azure Content Moderator):** Ensures generated content is appropriate.
- **Sentiment Analysis API (e.g., IBM Watson Tone Analyzer):** Provides insights into the tone of the generated content.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/LinkedTweet.git
    cd LinkedTweet
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Set up environment variables:
    - Create a `.env` file and add your LinkedIn, Twitter API keys, and any other necessary configurations.

5. Run the application:
    ```bash
    python app.py
    ```

## Usage

1. Open the application in your web browser.
2. Enter a topic or prompt in the provided input field.
3. Generate content and review the AI-generated posts.
4. Share posts directly to LinkedIn and Twitter using the integrated buttons.
5. Monitor the content moderation and sentiment analysis results.

## Contributing

We welcome contributions to improve LinkedTweet! If you have suggestions or find bugs, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your forked repository.
4. Open a pull request to the main repository.

---

LinkedTweet - Simplifying content creation and sharing for professionals and marketers.

