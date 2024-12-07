import { aws_codebuild, aws_secretsmanager } from "aws-cdk-lib";
import { Construct } from "constructs";

export interface CodebuildHostedGitHubActionsRunnerProps {
    /**
     * The name of the CodeBuild project.
     * @default - A name is generated based on the repository owner and name.
     */
    readonly codeBuildProjectName?: string;

    /**
     * The owner of the GitHub repository.
     */
    readonly repositoryOwner: string;

    /**
     * The name of the GitHub repository.
     */
    readonly repositoryName: string;

    /**
     * The ARN of the Secrets Manager secret containing the GitHub token.
     *
     * Note! CodeBuild only allows a single credential for GitHub
     * to be saved in a given AWS account in a given region -
     * any attempt to add more than one will result in an error.
     *
     * @default - No GitHub token is used.
     */
    readonly tokenSecretArn?: string;
}

export class CodebuildHostedGitHubActionsRunner extends Construct {
    public readonly project: aws_codebuild.IProject;

    constructor(scope: Construct, id: string, props: CodebuildHostedGitHubActionsRunnerProps) {
        super(scope, id);

        const { codeBuildProjectName, repositoryOwner, repositoryName, tokenSecretArn } = props;

        if (tokenSecretArn) {
            const secret = aws_secretsmanager.Secret.fromSecretCompleteArn(this, "GitHubToken", tokenSecretArn);

            new aws_codebuild.GitHubSourceCredentials(this, "GitHubSourceCredentials", {
                accessToken: secret.secretValue,
            });
        }

        this.project = new aws_codebuild.Project(this, "Project", {
            projectName: codeBuildProjectName ?? `${repositoryOwner}-${repositoryName}`,
            source: aws_codebuild.Source.gitHub({
                owner: repositoryOwner,
                repo: repositoryName,
                webhook: true,
                webhookFilters: [aws_codebuild.FilterGroup.inEventOf(aws_codebuild.EventAction.WORKFLOW_JOB_QUEUED)],
            }),
        });
    }
}
