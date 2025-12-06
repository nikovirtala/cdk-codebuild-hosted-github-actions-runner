# Product Overview

This is an AWS CDK construct library that creates CodeBuild projects for running GitHub Actions workflows. It enables users to leverage AWS infrastructure as self-hosted runners for GitHub Actions, providing a scalable and cost-effective CI/CD solution.

## Key Features

- Creates AWS CodeBuild projects configured as GitHub Actions runners
- Supports both public and private GitHub repositories via Secrets Manager integration
- Webhook-based triggering on GitHub workflow job events
- Published as a public npm package: `@nikovirtala/cdk-codebuild-hosted-github-actions-runner`

## Target Users

Developers and DevOps engineers using AWS CDK who want to run GitHub Actions workflows on AWS infrastructure instead of GitHub-hosted runners.
