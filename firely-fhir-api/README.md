# Firely FHIR API (ASP.NET Core)

A small starter API using the Firely .NET SDK.

## Run locally

```bash
dotnet restore
dotnet run
```

Default URL is typically `http://localhost:5000`.

## Endpoints

- `GET /` service info
- `GET /metadata` FHIR CapabilityStatement
- `GET /Patient/{id}` sample FHIR Patient resource

## Create a new GitHub repository and push this project

1. Create a repository in GitHub (for example: `firely-fhir-api`).
2. From this folder, run:

```bash
git init
git add .
git commit -m "Initial Firely FHIR API"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/firely-fhir-api.git
git push -u origin main
```

If you prefer using a token over HTTPS, use a personal access token when prompted by Git.
