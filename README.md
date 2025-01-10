# AI Insurance Project for Railway Deployment

This project provides an API to handle insurance-related queries using a Flask backend.

## How to Deploy on Railway

1. **Upload to Railway**:
   - Push this project to a GitHub repository.
   - Connect the repository to Railway.
   - Railway will automatically detect the `Procfile` and set up the service.

2. **Install Dependencies**:
   - Railway will automatically install the dependencies listed in `requirements.txt`.

3. **Run the API**:
   - The application will be hosted on a public domain provided by Railway.

## Endpoint
- `POST /query`: Accepts a JSON body with a key `"query"` and returns a simulated response.

## Example Usage
```bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "What is insurance?"}' https://your-railway-domain/query