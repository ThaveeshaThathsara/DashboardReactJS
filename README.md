# SparkSocket Dashboard

This project is a dashboard for SparkSocket, an application to manage and view service details such as orders, heating, electrical work, air conditioning, and solar panels.
It includes a sidebar with navigation links, a main dashboard area displaying various statistics, and a table listing service details.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- A code editor, such as VS Code.

### Steps

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sparksocket-dashboard.git
```

2. Navigate to the project directory:

```bash
cd dashboard
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The application should now be running on `http://localhost:5173`.

## Usage

Once the application is running, you can navigate through the sidebar to different sections such as Home, Services, Profile, Tickets, Payment Info, Feedback & Rating, and Settings.

The main dashboard area displays various statistics like Active Orders, Heating, Electrical, Air Conditioner, and Solar Panel tasks.

### Search

- A search bar is available in the header to quickly find services or details.
- Date filter and a dropdown for filtering service types are also provided.

## Project Structure

The project follows a standard React project structure:

```plaintext
spark-socket-dashboard/
├── public/
│   ├── userData.json
│   └── ...
├── src/
│   ├── assets/
│   │   ├── Dashboard/
│   │   └── Sidbar/
│   ├── components/
│   │   ├── Dashboard.js
│   │   └── Sidebar.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

- **assets/**: Contains images and icons used in the dashboard.
- **components/**: Contains React components for the dashboard and sidebar.
- **public/**: Contains static files such as `userData.json`.
- **src/**: Contains the main source code for the React application.

## Features

- **Dashboard Statistics**: Displays various statistics related to the services.
- **Service Details Table**: Lists detailed information about each service task.

## Contributing

Contributions are always welcome! Here are a few ways you can help:

1. Report bugs.
2. Suggest features.
3. Submit pull requests.

To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using SparkSocket Dashboard! If you have any questions or feedback, feel free to reach out.
