
# Zoom Clone

This is a Zoom clone built using modern web technologies. It features a robust authentication system, the ability to start and schedule meetings, notifications for upcoming meetings, recording functionality, and personal meeting rooms. The application uses Next.js for the frontend framework, React for UI components, Tailwind CSS for styling, Clerk for authentication, and getstream.io for real-time functionality.

## Features

- **Authentication System**: Secure user login and registration using Clerk.
- **Start Instant Meet**: Instantly start a new meeting.
- **Schedule Meeting for Future**: Schedule meetings ahead of time.
- **Upcoming Meeting Notification**: Notifications for upcoming meetings on the home page.
- **Record Meeting**: Record your meetings for later review.
- **Personal Meeting Room**: Create and manage personal meeting rooms.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Authentication**: Clerk
- **Real-Time Functionality**: getstream.io

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm (or yarn)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/NithinChowdaryRavuri/ncroom.git
    cd ncroom
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add the following environment variables:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
    CLERK_SECRET_KEY="your_clerk_api_key"
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in "As per the structure"
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up "As per the structure"
    NEXT_PUBLIC_STREAM_API_KEY="your_getstream_app_key"
    STREAM_SECRET_KEY="your_getstream_secret_key"
    NEXT_PUBLIC_BASE_URL="localhost:3000" (change it during deploy)
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

```plaintext
.
├── public                 # Static files
├── components             # React components
├── hooks                  # Custom hooks
├── lib                    # Utility functions
├── providers              # Stream configuration file
├── app
│   ├── auth         	   # Auth links
│   ├── root               # Next.js pages
│   └── ...                # Other directories and files
├── .env.local             # Environment variables
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── ...                    # Other configuration files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. 

## Acknowledgements

- Thanks to the creators of Next.js, React, Tailwind CSS, Clerk, and getstream.io for providing the tools to build this application.
---

Happy coding! 🚀
