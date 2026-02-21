# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildHostedGitHubActionsRunner <a name="CodebuildHostedGitHubActionsRunner" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.Initializer"></a>

```typescript
import { CodebuildHostedGitHubActionsRunner } from '@nikovirtala/cdk-codebuild-hosted-github-actions-runner'

new CodebuildHostedGitHubActionsRunner(scope: Construct, id: string, props: CodebuildHostedGitHubActionsRunnerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.Initializer.parameter.props">props</a></code> | <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps">CodebuildHostedGitHubActionsRunnerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.Initializer.parameter.props"></a>

- *Type:* <a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps">CodebuildHostedGitHubActionsRunnerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.with">with</a></code> | Applies one or more mixins to this construct. |

---

##### `toString` <a name="toString" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.isConstruct"></a>

```typescript
import { CodebuildHostedGitHubActionsRunner } from '@nikovirtala/cdk-codebuild-hosted-github-actions-runner'

CodebuildHostedGitHubActionsRunner.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.property.project">project</a></code> | <code>aws-cdk-lib.aws_codebuild.IProject</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunner.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* aws-cdk-lib.aws_codebuild.IProject

---


## Structs <a name="Structs" id="Structs"></a>

### CodebuildHostedGitHubActionsRunnerProps <a name="CodebuildHostedGitHubActionsRunnerProps" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.Initializer"></a>

```typescript
import { CodebuildHostedGitHubActionsRunnerProps } from '@nikovirtala/cdk-codebuild-hosted-github-actions-runner'

const codebuildHostedGitHubActionsRunnerProps: CodebuildHostedGitHubActionsRunnerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the GitHub repository. |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.property.repositoryOwner">repositoryOwner</a></code> | <code>string</code> | The owner of the GitHub repository. |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.property.codeBuildProjectName">codeBuildProjectName</a></code> | <code>string</code> | The name of the CodeBuild project. |
| <code><a href="#@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.property.tokenSecretArn">tokenSecretArn</a></code> | <code>string</code> | The ARN of the Secrets Manager secret containing the GitHub token. |

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of the GitHub repository.

---

##### `repositoryOwner`<sup>Required</sup> <a name="repositoryOwner" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.property.repositoryOwner"></a>

```typescript
public readonly repositoryOwner: string;
```

- *Type:* string

The owner of the GitHub repository.

---

##### `codeBuildProjectName`<sup>Optional</sup> <a name="codeBuildProjectName" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.property.codeBuildProjectName"></a>

```typescript
public readonly codeBuildProjectName: string;
```

- *Type:* string
- *Default:* A name is generated based on the repository owner and name.

The name of the CodeBuild project.

---

##### `tokenSecretArn`<sup>Optional</sup> <a name="tokenSecretArn" id="@nikovirtala/cdk-codebuild-hosted-github-actions-runner.CodebuildHostedGitHubActionsRunnerProps.property.tokenSecretArn"></a>

```typescript
public readonly tokenSecretArn: string;
```

- *Type:* string
- *Default:* No GitHub token is used.

The ARN of the Secrets Manager secret containing the GitHub token.

Note! CodeBuild only allows a single credential for GitHub
to be saved in a given AWS account in a given region -
any attempt to add more than one will result in an error.

---



