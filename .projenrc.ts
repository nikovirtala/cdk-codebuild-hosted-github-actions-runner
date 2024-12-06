import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Niko Virtala',
  authorAddress: 'niko.virtala@hey.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'cdk-codebuild-hosted-github-actions-runner',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/niko.virtala/cdk-codebuild-hosted-github-actions-runner.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();