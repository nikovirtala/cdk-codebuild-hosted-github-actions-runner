import { awscdk, javascript } from "projen";

const project = new awscdk.AwsCdkConstructLibrary({
    author: "Niko Virtala",
    authorAddress: "niko.virtala@hey.com",
    autoApproveOptions: {
        secret: "GITHUB_TOKEN",
        allowedUsernames: ["nikovirtala"],
    },
    catalog: {
        announce: true,
        twitter: "nikovirtala",
    },
    cdkVersion: "2.146.0",
    defaultReleaseBranch: "main",
    dependabot: false,
    depsUpgradeOptions: {
        workflowOptions: {
            labels: ["auto-approve", "auto-merge"],
        },
    },
    description: "A construct to create an AWS CodeBuild project that can be used to run GitHub Actions workflows",
    githubOptions: {
        mergify: true,
    },
    jest: false,
    jsiiVersion: "~5.5.0",
    keywords: ["aws", "aws-cdk", "awscdk", "cdk", "codebuild", "gha", "github", "github-actions", "runner"],
    license: "MIT",
    majorVersion: 1,
    name: "@nikovirtala/cdk-codebuild-hosted-github-actions-runner",
    npmAccess: javascript.NpmAccess.PUBLIC,
    prettier: true,
    prettierOptions: {
        settings: {
            printWidth: 120,
            tabWidth: 4,
            trailingComma: javascript.TrailingComma.ALL,
        },
    },
    projenrcTs: true,
    releaseToNpm: true,
    repositoryUrl: "https://github.com/nikovirtala/cdk-codebuild-hosted-github-actions-runner.git",
});

project.vscode?.extensions.addRecommendations("dbaeumer.vscode-eslint", "esbenp.prettier-vscode");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.fixAll": "explicit",
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

project.synth();
