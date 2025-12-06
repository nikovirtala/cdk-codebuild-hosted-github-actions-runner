# Project Structure

## Directory Layout

```
.
├── src/                    # Source code
│   └── index.ts           # Main construct implementation
├── .projen/               # Projen metadata (generated)
├── .github/               # GitHub workflows and configuration
├── .kiro/                 # Kiro AI assistant configuration
│   └── steering/          # AI steering documents
├── .vscode/               # VS Code settings
├── .projenrc.ts           # Projen configuration (source of truth)
├── package.json           # Package metadata (generated)
├── biome.jsonc            # Biome configuration (generated)
├── tsconfig.dev.json      # TypeScript configuration (generated)
├── API.md                 # API documentation (generated)
└── README.md              # Project documentation
```

## Source Organization

### `src/index.ts`

The main entry point containing:

- **Interface**: `CodebuildHostedGitHubActionsRunnerProps` - Configuration properties for the construct
- **Class**: `CodebuildHostedGitHubActionsRunner` - The main CDK construct

## Architecture Patterns

### CDK Construct Pattern

- Extends `Construct` from the `constructs` library
- Accepts props interface for configuration
- Exposes public readonly properties (e.g., `project`)
- Uses composition to create AWS resources

### Resource Naming

- Default project names follow pattern: `${repositoryOwner}-${repositoryName}`
- Allow optional override via `codeBuildProjectName` prop

### Conditional Resource Creation

- GitHub source credentials are only created when `tokenSecretArn` is provided
- Supports both public and private repository scenarios

## Generated Files

**DO NOT manually edit these files** - they are managed by Projen:

- `package.json`
- `tsconfig.dev.json`
- `biome.jsonc`
- `.projen/**`
- `.github/workflows/**`
- API.md

To modify these, edit `.projenrc.ts` and run `npx projen`.

## Import Conventions

- Use named imports from `aws-cdk-lib` submodules (e.g., `aws_codebuild`, `aws_secretsmanager`)
- Import `Construct` from `constructs` package
- Keep imports organized and minimal
