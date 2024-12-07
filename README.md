# Codebuild hosted GitHub Actions runner

[![View on Construct Hub](https://constructs.dev/badge?package=%40nikovirtala%2Fcdk-codebuild-hosted-github-actions-runner)](https://constructs.dev/packages/@nikovirtala/cdk-codebuild-hosted-github-actions-runner)

The `cdk-codebuild-hosted-github-actions-runner` package provides a construct to create an AWS CodeBuild project that can be used to run GitHub Actions workflows.

## Installation

To install this package, use [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/):

```sh
npm install @nikovirtala/cdk-codebuild-hosted-github-actions-runner
```

```sh
yarn add @nikovirtala/cdk-codebuild-hosted-github-actions-runner
```

```sh
pnpm add @nikovirtala/cdk-codebuild-hosted-github-actions-runner
```

## Usage

To use this construct, you need to have an AWS Secrets Manager secret containing your GitHub Personal Access Token. This token is used to authenticate with GitHub. Use `Plaintext` type Secret value. I will add Support for `Key/value` type later.

```
github_pat_<redacted>_<redacted>
```

For more information on creating a GitHub token with the required scopes, refer to the [AWS CodeBuild documentation](https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens-github.html).

### Example

```typescript
import { Stack, App } from "aws-cdk-lib";
import { CodebuildHostedGitHubActionsRunner } from "@nikovirtala/cdk-codebuild-hosted-github-actions-runner";

const app = new App();
const stack = new Stack(app, "MyStack");

new CodebuildHostedGitHubActionsRunner(stack, "MyRunner", {
  repositoryOwner: "my-github-username",
  repositoryName: "my-repo",
  tokenSecretArn:
    "arn:aws:secretsmanager:region:account-id:secret:my-github-token",
});
```

## GitHub Actions Workflow

To trigger the CodeBuild project from a GitHub Actions workflow, you need to create a workflow file to `.github/workflows/` folder in your GitHub repository. Below is an example of a workflow file:

```yaml
name: Run on Codebuild

on: [push]

jobs:
  codebuild-job:
    runs-on:
      - codebuild-<<project name>>-${{ github.run_id }}-${{ github.run_attempt }}
      - image:arm-3.0
      - instance-size:small

    steps:
      - name: Run a script
        run: echo "Hello, world!"
```

Replace `<<project name>>` with the name of your CodeBuild project. If you did not specify a `codeBuildProjectName` in the construct, the default name will be `${repositoryOwner}-${repositoryName}`.

## Properties

For detailed information about the construct properties, refer to the [API.md](./API.md) file.
