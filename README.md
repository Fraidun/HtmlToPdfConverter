# HtmlToPdfConverter

This repository contains an Angular frontend and a .NET API backend for converting HTML to PDF.

## Angular Frontend

### Prerequisites

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
   ```
   git clone <repository_url>
   ```
2. Navigate to the frontend directory:
   ```
   cd HtmlToPdfConverter/frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Development Server

- Run the following command for a dev server:
  ```
  npm start
  ```
  Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

- Run the following command to build the project:
  ```
  npm run build
  ```
  The build artifacts will be stored in the `dist/` directory.

### Running Tests

- Execute the following command to run unit tests via [Karma](https://karma-runner.github.io):
  ```
  npm test
  ```

## .NET API Backend

### Prerequisites

- .NET 7 SDK installed

### Installation

1. Navigate to the backend directory:
   ```
   cd HtmlToPdfConverter/backend
   ```

### Running the API

- Run the project using Visual Studio or by executing the following command:
  ```
  dotnet run
  ```
  The API will be hosted at `https://localhost:5001` by default.

## Additional Dependencies

### Angular

- `@angular/animations`: Angular animation library.
- `@angular/cdk`: Angular component development kit.
- `@angular/common`, `@angular/core`, `@angular/forms`, `@angular/platform-browser`, `@angular/platform-browser-dynamic`, `@angular/router`: Angular core and platform libraries.
- `@angular/material`: Angular material UI components.
- `rxjs`, `zone.js`, `tslib`: Angular dependencies.

### .NET

- `Microsoft.AspNetCore.OpenApi`: OpenAPI/Swagger integration.
- `PDFsharp`, `Polybioz.HtmlRenderer.PdfSharp.Core`: Libraries for PDF generation.
- `Swashbuckle.AspNetCore`: Swagger tooling for ASP.NET Core APIs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
