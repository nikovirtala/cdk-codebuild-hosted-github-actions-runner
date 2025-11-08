import { awscdk, JsonPatch, javascript } from "projen";

const project = new awscdk.AwsCdkConstructLibrary({
    biome: true,
    biomeOptions: {
        biomeConfig: {
            formatter: {
                indentStyle: javascript.biome_config.IndentStyle.SPACE,
                indentWidth: 4,
                lineWidth: 120,
                useEditorconfig: false,
            },
        },
        formatter: true,
        linter: true,
    },
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
    cdkVersion: "2.221.1",
    defaultReleaseBranch: "main",
    dependabot: false,
    depsUpgradeOptions: {
        workflowOptions: {
            labels: ["auto-approve", "auto-merge"],
        },
    },
    description: "A construct to create an AWS CodeBuild project that can be used to run GitHub Actions workflows",
    eslint: false,
    githubOptions: {
        mergify: true,
    },
    jest: false,
    jsiiVersion: "~5.9.3",
    keywords: ["aws", "aws-cdk", "awscdk", "cdk", "codebuild", "gha", "github", "github-actions", "runner"],
    license: "MIT",
    majorVersion: 1,
    name: "@nikovirtala/cdk-codebuild-hosted-github-actions-runner",
    npmAccess: javascript.NpmAccess.PUBLIC,
    npmTrustedPublishing: true,
    packageManager: javascript.NodePackageManager.PNPM,
    pnpmVersion: "10",
    prettier: false,
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
    typescriptVersion: "5.9.3",
});

project.vscode?.extensions.addRecommendations("biomejs.biome");

project.vscode?.settings.addSettings({
    "editor.codeActionsOnSave": {
        "source.organizeImports.biome": "always",
    },
    "editor.defaultFormatter": "biomejs.biome",
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
});

// use node.js 24.x to get new enough npm to satisfy: trusted publishing requires npm CLI version 11.5.1 or later.
project.github
    ?.tryFindWorkflow("release")
    ?.file?.patch(JsonPatch.replace("/jobs/release_npm/steps/0/with/node-version", "24.x"));

project.synth();
