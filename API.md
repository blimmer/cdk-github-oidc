# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubActionsIdentityProvider <a name="GithubActionsIdentityProvider" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider"></a>

- *Implements:* <a href="#@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider">IGithubActionsIdentityProvider</a>

This construct creates an ODIC provider to allow AWS access from Github Actions workflows.

You'll need to instantiate
this construct once per AWS account.

You can import a existing provider using `GithubActionsIdentityProvider.fromAccount`.

To create a role that can be assumed by GitHub Actions workflows, use the `GithubActionsRole` construct.

#### Initializers <a name="Initializers" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.Initializer"></a>

```typescript
import { GithubActionsIdentityProvider } from '@blimmer/cdk-github-oidc'

new GithubActionsIdentityProvider(scope: Construct, id: string, props?: GithubActionsIdentityProviderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.Initializer.parameter.props">props</a></code> | <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProviderProps">GithubActionsIdentityProviderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.Initializer.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProviderProps">GithubActionsIdentityProviderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.fromAccount">fromAccount</a></code> | Retrieve a reference to existing Github OIDC provider in your AWS account. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isConstruct"></a>

```typescript
import { GithubActionsIdentityProvider } from '@blimmer/cdk-github-oidc'

GithubActionsIdentityProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isCfnElement"></a>

```typescript
import { GithubActionsIdentityProvider } from '@blimmer/cdk-github-oidc'

GithubActionsIdentityProvider.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isCfnResource"></a>

```typescript
import { GithubActionsIdentityProvider } from '@blimmer/cdk-github-oidc'

GithubActionsIdentityProvider.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromAccount` <a name="fromAccount" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.fromAccount"></a>

```typescript
import { GithubActionsIdentityProvider } from '@blimmer/cdk-github-oidc'

GithubActionsIdentityProvider.fromAccount(scope: Construct, props?: GithubActionsIdentityProviderImportProps)
```

Retrieve a reference to existing Github OIDC provider in your AWS account.

An AWS account can only have single Github OIDC provider configured into it,
so internally the reference is made by constructing the ARN from AWS
Account ID & Github issuer URL.

###### `scope`<sup>Required</sup> <a name="scope" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.fromAccount.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `props`<sup>Optional</sup> <a name="props" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.fromAccount.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProviderImportProps">GithubActionsIdentityProviderImportProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.attrArn">attrArn</a></code> | <code>string</code> | Returns the Amazon Resource Name (ARN) for the specified `AWS::IAM::OIDCProvider` resource. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | A list of tags that are attached to the specified IAM OIDC provider. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.thumbprintList">thumbprintList</a></code> | <code>string[]</code> | A list of certificate thumbprints that are associated with the specified IAM OIDC provider resource object. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.clientIdList">clientIdList</a></code> | <code>string[]</code> | A list of client IDs (also known as audiences) that are associated with the specified IAM OIDC provider resource object. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.url">url</a></code> | <code>string</code> | The URL that the IAM OIDC provider resource object is associated with. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.arn">arn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrArn`<sup>Required</sup> <a name="attrArn" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.attrArn"></a>

```typescript
public readonly attrArn: string;
```

- *Type:* string

Returns the Amazon Resource Name (ARN) for the specified `AWS::IAM::OIDCProvider` resource.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

A list of tags that are attached to the specified IAM OIDC provider.

The returned list of tags is sorted by tag key. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide* .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-tags)

---

##### `thumbprintList`<sup>Required</sup> <a name="thumbprintList" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.thumbprintList"></a>

```typescript
public readonly thumbprintList: string[];
```

- *Type:* string[]

A list of certificate thumbprints that are associated with the specified IAM OIDC provider resource object.

For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html) .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-thumbprintlist](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-thumbprintlist)

---

##### `clientIdList`<sup>Optional</sup> <a name="clientIdList" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.clientIdList"></a>

```typescript
public readonly clientIdList: string[];
```

- *Type:* string[]

A list of client IDs (also known as audiences) that are associated with the specified IAM OIDC provider resource object.

For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html) .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-clientidlist](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-clientidlist)

---

##### `url`<sup>Optional</sup> <a name="url" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL that the IAM OIDC provider resource object is associated with.

For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html) .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-url](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-url)

---

##### `arn`<sup>Required</sup> <a name="arn" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProvider.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

### GithubActionsRole <a name="GithubActionsRole" id="@blimmer/cdk-github-oidc.GithubActionsRole"></a>

#### Initializers <a name="Initializers" id="@blimmer/cdk-github-oidc.GithubActionsRole.Initializer"></a>

```typescript
import { GithubActionsRole } from '@blimmer/cdk-github-oidc'

new GithubActionsRole(scope: Construct, id: string, props: GithubActionsRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.Initializer.parameter.props">props</a></code> | <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps">GithubActionsRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@blimmer/cdk-github-oidc.GithubActionsRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@blimmer/cdk-github-oidc.GithubActionsRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@blimmer/cdk-github-oidc.GithubActionsRole.Initializer.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps">GithubActionsRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.addManagedPolicy">addManagedPolicy</a></code> | Attaches a managed policy to this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.addToPolicy">addToPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.addToPrincipalPolicy">addToPrincipalPolicy</a></code> | Adds a permission to the role's default policy document. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.attachInlinePolicy">attachInlinePolicy</a></code> | Attaches a policy to this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.grant">grant</a></code> | Grant the actions defined in actions to the identity Principal on this resource. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.grantAssumeRole">grantAssumeRole</a></code> | Grant permissions to the given principal to assume this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.grantPassRole">grantPassRole</a></code> | Grant permissions to the given principal to pass this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.withoutPolicyUpdates">withoutPolicyUpdates</a></code> | Return a copy of this Role object whose Policies will not be updated. |

---

##### `toString` <a name="toString" id="@blimmer/cdk-github-oidc.GithubActionsRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@blimmer/cdk-github-oidc.GithubActionsRole.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@blimmer/cdk-github-oidc.GithubActionsRole.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addManagedPolicy` <a name="addManagedPolicy" id="@blimmer/cdk-github-oidc.GithubActionsRole.addManagedPolicy"></a>

```typescript
public addManagedPolicy(policy: IManagedPolicy): void
```

Attaches a managed policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="@blimmer/cdk-github-oidc.GithubActionsRole.addManagedPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The the managed policy to attach.

---

##### `addToPolicy` <a name="addToPolicy" id="@blimmer/cdk-github-oidc.GithubActionsRole.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): boolean
```

Add to the policy of this principal.

###### `statement`<sup>Required</sup> <a name="statement" id="@blimmer/cdk-github-oidc.GithubActionsRole.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToPrincipalPolicy` <a name="addToPrincipalPolicy" id="@blimmer/cdk-github-oidc.GithubActionsRole.addToPrincipalPolicy"></a>

```typescript
public addToPrincipalPolicy(statement: PolicyStatement): AddToPrincipalPolicyResult
```

Adds a permission to the role's default policy document.

If there is no default policy attached to this role, it will be created.

###### `statement`<sup>Required</sup> <a name="statement" id="@blimmer/cdk-github-oidc.GithubActionsRole.addToPrincipalPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The permission statement to add to the policy document.

---

##### `attachInlinePolicy` <a name="attachInlinePolicy" id="@blimmer/cdk-github-oidc.GithubActionsRole.attachInlinePolicy"></a>

```typescript
public attachInlinePolicy(policy: Policy): void
```

Attaches a policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="@blimmer/cdk-github-oidc.GithubActionsRole.attachInlinePolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.Policy

The policy to attach.

---

##### `grant` <a name="grant" id="@blimmer/cdk-github-oidc.GithubActionsRole.grant"></a>

```typescript
public grant(grantee: IPrincipal, actions: ...string[]): Grant
```

Grant the actions defined in actions to the identity Principal on this resource.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@blimmer/cdk-github-oidc.GithubActionsRole.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

###### `actions`<sup>Required</sup> <a name="actions" id="@blimmer/cdk-github-oidc.GithubActionsRole.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantAssumeRole` <a name="grantAssumeRole" id="@blimmer/cdk-github-oidc.GithubActionsRole.grantAssumeRole"></a>

```typescript
public grantAssumeRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to assume this role.

###### `identity`<sup>Required</sup> <a name="identity" id="@blimmer/cdk-github-oidc.GithubActionsRole.grantAssumeRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `grantPassRole` <a name="grantPassRole" id="@blimmer/cdk-github-oidc.GithubActionsRole.grantPassRole"></a>

```typescript
public grantPassRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to pass this role.

###### `identity`<sup>Required</sup> <a name="identity" id="@blimmer/cdk-github-oidc.GithubActionsRole.grantPassRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `withoutPolicyUpdates` <a name="withoutPolicyUpdates" id="@blimmer/cdk-github-oidc.GithubActionsRole.withoutPolicyUpdates"></a>

```typescript
public withoutPolicyUpdates(options?: WithoutPolicyUpdatesOptions): IRole
```

Return a copy of this Role object whose Policies will not be updated.

Use the object returned by this method if you want this Role to be used by
a construct without it automatically updating the Role's Policies.

If you do, you are responsible for adding the correct statements to the
Role's policies yourself.

###### `options`<sup>Optional</sup> <a name="options" id="@blimmer/cdk-github-oidc.GithubActionsRole.withoutPolicyUpdates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.WithoutPolicyUpdatesOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.customizeRoles">customizeRoles</a></code> | Customize the creation of IAM roles within the given scope. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleArn">fromRoleArn</a></code> | Import an external role by ARN. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleName">fromRoleName</a></code> | Import an external role by name. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.isRole">isRole</a></code> | Return whether the given object is a Role. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@blimmer/cdk-github-oidc.GithubActionsRole.isConstruct"></a>

```typescript
import { GithubActionsRole } from '@blimmer/cdk-github-oidc'

GithubActionsRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@blimmer/cdk-github-oidc.GithubActionsRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@blimmer/cdk-github-oidc.GithubActionsRole.isOwnedResource"></a>

```typescript
import { GithubActionsRole } from '@blimmer/cdk-github-oidc'

GithubActionsRole.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@blimmer/cdk-github-oidc.GithubActionsRole.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@blimmer/cdk-github-oidc.GithubActionsRole.isResource"></a>

```typescript
import { GithubActionsRole } from '@blimmer/cdk-github-oidc'

GithubActionsRole.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@blimmer/cdk-github-oidc.GithubActionsRole.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `customizeRoles` <a name="customizeRoles" id="@blimmer/cdk-github-oidc.GithubActionsRole.customizeRoles"></a>

```typescript
import { GithubActionsRole } from '@blimmer/cdk-github-oidc'

GithubActionsRole.customizeRoles(scope: Construct, options?: CustomizeRolesOptions)
```

Customize the creation of IAM roles within the given scope.

It is recommended that you **do not** use this method and instead allow
CDK to manage role creation. This should only be used
in environments where CDK applications are not allowed to created IAM roles.

This can be used to prevent the CDK application from creating roles
within the given scope and instead replace the references to the roles with
precreated role names. A report will be synthesized in the cloud assembly (i.e. cdk.out)
that will contain the list of IAM roles that would have been created along with the
IAM policy statements that the role should contain. This report can then be used
to create the IAM roles outside of CDK and then the created role names can be provided
in `usePrecreatedRoles`.

*Example*

```typescript
declare const app: App;
Role.customizeRoles(app, {
  usePrecreatedRoles: {
    'ConstructPath/To/Role': 'my-precreated-role-name',
  },
});
```


###### `scope`<sup>Required</sup> <a name="scope" id="@blimmer/cdk-github-oidc.GithubActionsRole.customizeRoles.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope to customize role creation.

---

###### `options`<sup>Optional</sup> <a name="options" id="@blimmer/cdk-github-oidc.GithubActionsRole.customizeRoles.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.CustomizeRolesOptions

options for configuring role creation.

---

##### `fromRoleArn` <a name="fromRoleArn" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleArn"></a>

```typescript
import { GithubActionsRole } from '@blimmer/cdk-github-oidc'

GithubActionsRole.fromRoleArn(scope: Construct, id: string, roleArn: string, options?: FromRoleArnOptions)
```

Import an external role by ARN.

If the imported Role ARN is a Token (such as a
`CfnParameter.valueAsString` or a `Fn.importValue()`) *and* the referenced
role has a `path` (like `arn:...:role/AdminRoles/Alice`), the
`roleName` property will not resolve to the correct value. Instead it
will resolve to the first path component. We unfortunately cannot express
the correct calculation of the full path name as a CloudFormation
expression. In this scenario the Role ARN should be supplied without the
`path` in order to resolve the correct role resource.

###### `scope`<sup>Required</sup> <a name="scope" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleArn.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleArn.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleArn.parameter.roleArn"></a>

- *Type:* string

the ARN of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleArn.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleArnOptions

allow customizing the behavior of the returned role.

---

##### `fromRoleName` <a name="fromRoleName" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleName"></a>

```typescript
import { GithubActionsRole } from '@blimmer/cdk-github-oidc'

GithubActionsRole.fromRoleName(scope: Construct, id: string, roleName: string, options?: FromRoleNameOptions)
```

Import an external role by name.

The imported role is assumed to exist in the same account as the account
the scope's containing Stack is being deployed to.

###### `scope`<sup>Required</sup> <a name="scope" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleName.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleName.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleName.parameter.roleName"></a>

- *Type:* string

the name of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="@blimmer/cdk-github-oidc.GithubActionsRole.fromRoleName.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleNameOptions

allow customizing the behavior of the returned role.

---

##### `isRole` <a name="isRole" id="@blimmer/cdk-github-oidc.GithubActionsRole.isRole"></a>

```typescript
import { GithubActionsRole } from '@blimmer/cdk-github-oidc'

GithubActionsRole.isRole(x: any)
```

Return whether the given object is a Role.

###### `x`<sup>Required</sup> <a name="x" id="@blimmer/cdk-github-oidc.GithubActionsRole.isRole.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Returns the role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.roleArn">roleArn</a></code> | <code>string</code> | Returns the ARN of this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.roleId">roleId</a></code> | <code>string</code> | Returns the stable and unique string identifying the role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.roleName">roleName</a></code> | <code>string</code> | Returns the name of the role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.assumeRolePolicy">assumeRolePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The assume role policy document associated with this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | Returns the permissions boundary attached to this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRole.property.principalAccount">principalAccount</a></code> | <code>string</code> | The AWS account ID of this principal. |

---

##### `node`<sup>Required</sup> <a name="node" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assumeRoleAction`<sup>Required</sup> <a name="assumeRoleAction" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.assumeRoleAction"></a>

```typescript
public readonly assumeRoleAction: string;
```

- *Type:* string

When this Principal is used in an AssumeRole policy, the action to use.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `policyFragment`<sup>Required</sup> <a name="policyFragment" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.policyFragment"></a>

```typescript
public readonly policyFragment: PrincipalPolicyFragment;
```

- *Type:* aws-cdk-lib.aws_iam.PrincipalPolicyFragment

Returns the role.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Returns the ARN of this role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Returns the stable and unique string identifying the role.

For example,
AIDAJQABLZS4A3QDU576Q.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Returns the name of the role.

---

##### `assumeRolePolicy`<sup>Optional</sup> <a name="assumeRolePolicy" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.assumeRolePolicy"></a>

```typescript
public readonly assumeRolePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The assume role policy document associated with this role.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

Returns the permissions boundary attached to this role.

---

##### `principalAccount`<sup>Optional</sup> <a name="principalAccount" id="@blimmer/cdk-github-oidc.GithubActionsRole.property.principalAccount"></a>

```typescript
public readonly principalAccount: string;
```

- *Type:* string

The AWS account ID of this principal.

Can be undefined when the account is not known
(for example, for service principals).
Can be a Token - in that case,
it's assumed to be AWS::AccountId.

---


## Structs <a name="Structs" id="Structs"></a>

### BranchFilterProps <a name="BranchFilterProps" id="@blimmer/cdk-github-oidc.BranchFilterProps"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.BranchFilterProps.Initializer"></a>

```typescript
import { BranchFilterProps } from '@blimmer/cdk-github-oidc'

const branchFilterProps: BranchFilterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.BranchFilterProps.property.owner">owner</a></code> | <code>string</code> | The org or user that owns the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.BranchFilterProps.property.repository">repository</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.BranchFilterProps.property.branch">branch</a></code> | <code>string</code> | The name of the branch to filter on. You can also use wildcards. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@blimmer/cdk-github-oidc.BranchFilterProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The org or user that owns the repository.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@blimmer/cdk-github-oidc.BranchFilterProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The name of the repository.

---

##### `branch`<sup>Required</sup> <a name="branch" id="@blimmer/cdk-github-oidc.BranchFilterProps.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The name of the branch to filter on. You can also use wildcards.

To allow all branches, pass `*`.

---

### CustomFilterProps <a name="CustomFilterProps" id="@blimmer/cdk-github-oidc.CustomFilterProps"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.CustomFilterProps.Initializer"></a>

```typescript
import { CustomFilterProps } from '@blimmer/cdk-github-oidc'

const customFilterProps: CustomFilterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.CustomFilterProps.property.owner">owner</a></code> | <code>string</code> | The org or user that owns the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.CustomFilterProps.property.repository">repository</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.CustomFilterProps.property.filter">filter</a></code> | <code>string</code> | The filter to apply. The construct will automatically prefix the filter with `repo:${owner}/${repository}:`. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@blimmer/cdk-github-oidc.CustomFilterProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The org or user that owns the repository.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@blimmer/cdk-github-oidc.CustomFilterProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The name of the repository.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@blimmer/cdk-github-oidc.CustomFilterProps.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply. The construct will automatically prefix the filter with `repo:${owner}/${repository}:`.

See https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider

---

### EnvironmentFilterProps <a name="EnvironmentFilterProps" id="@blimmer/cdk-github-oidc.EnvironmentFilterProps"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.EnvironmentFilterProps.Initializer"></a>

```typescript
import { EnvironmentFilterProps } from '@blimmer/cdk-github-oidc'

const environmentFilterProps: EnvironmentFilterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.EnvironmentFilterProps.property.owner">owner</a></code> | <code>string</code> | The org or user that owns the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.EnvironmentFilterProps.property.repository">repository</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.EnvironmentFilterProps.property.environment">environment</a></code> | <code>string</code> | The name of the Github environment to allow assuming this role. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@blimmer/cdk-github-oidc.EnvironmentFilterProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The org or user that owns the repository.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@blimmer/cdk-github-oidc.EnvironmentFilterProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The name of the repository.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@blimmer/cdk-github-oidc.EnvironmentFilterProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The name of the Github environment to allow assuming this role.

---

### GithubActionOidcFilterProps <a name="GithubActionOidcFilterProps" id="@blimmer/cdk-github-oidc.GithubActionOidcFilterProps"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.GithubActionOidcFilterProps.Initializer"></a>

```typescript
import { GithubActionOidcFilterProps } from '@blimmer/cdk-github-oidc'

const githubActionOidcFilterProps: GithubActionOidcFilterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionOidcFilterProps.property.owner">owner</a></code> | <code>string</code> | The org or user that owns the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionOidcFilterProps.property.repository">repository</a></code> | <code>string</code> | The name of the repository. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@blimmer/cdk-github-oidc.GithubActionOidcFilterProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The org or user that owns the repository.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@blimmer/cdk-github-oidc.GithubActionOidcFilterProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The name of the repository.

---

### GithubActionsIdentityProviderImportProps <a name="GithubActionsIdentityProviderImportProps" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProviderImportProps"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProviderImportProps.Initializer"></a>

```typescript
import { GithubActionsIdentityProviderImportProps } from '@blimmer/cdk-github-oidc'

const githubActionsIdentityProviderImportProps: GithubActionsIdentityProviderImportProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProviderImportProps.property.account">account</a></code> | <code>string</code> | An explicit account ID where the provider is defined. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProviderImportProps.property.partition">partition</a></code> | <code>string</code> | An explicit partition where the provider is defined. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProviderImportProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* the current stack's account

An explicit account ID where the provider is defined.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProviderImportProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string
- *Default:* the current stack's partition

An explicit partition where the provider is defined.

---

### GithubActionsIdentityProviderProps <a name="GithubActionsIdentityProviderProps" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProviderProps"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProviderProps.Initializer"></a>

```typescript
import { GithubActionsIdentityProviderProps } from '@blimmer/cdk-github-oidc'

const githubActionsIdentityProviderProps: GithubActionsIdentityProviderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProviderProps.property.thumbprints">thumbprints</a></code> | <code>string[]</code> | Pass a list of thumbprints for the GitHub Actions OIDC provider. |

---

##### `thumbprints`<sup>Optional</sup> <a name="thumbprints" id="@blimmer/cdk-github-oidc.GithubActionsIdentityProviderProps.property.thumbprints"></a>

```typescript
public readonly thumbprints: string[];
```

- *Type:* string[]
- *Default:* [d89e3bd43d5d909b47a18977aa9d5ce36cee184c]

Pass a list of thumbprints for the GitHub Actions OIDC provider.

---

### GithubActionsRoleConfiguration <a name="GithubActionsRoleConfiguration" id="@blimmer/cdk-github-oidc.GithubActionsRoleConfiguration"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.GithubActionsRoleConfiguration.Initializer"></a>

```typescript
import { GithubActionsRoleConfiguration } from '@blimmer/cdk-github-oidc'

const githubActionsRoleConfiguration: GithubActionsRoleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleConfiguration.property.provider">provider</a></code> | <code><a href="#@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider">IGithubActionsIdentityProvider</a></code> | Reference to the Github Actions OpenID Connect Provider configured in AWS IAM. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleConfiguration.property.subjectFilters">subjectFilters</a></code> | <code><a href="#@blimmer/cdk-github-oidc.IGithubActionOidcFilter">IGithubActionOidcFilter</a>[]</code> | Subject filters to apply to the Github Actions OIDC token. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@blimmer/cdk-github-oidc.GithubActionsRoleConfiguration.property.provider"></a>

```typescript
public readonly provider: IGithubActionsIdentityProvider;
```

- *Type:* <a href="#@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider">IGithubActionsIdentityProvider</a>

Reference to the Github Actions OpenID Connect Provider configured in AWS IAM.

Either pass an construct defined by `new GithubActionsOidcProvider`
or a retrieved reference from `GithubActionsOidcProvider.fromAccount`.
There can be only one (per AWS Account).

---

##### `subjectFilters`<sup>Required</sup> <a name="subjectFilters" id="@blimmer/cdk-github-oidc.GithubActionsRoleConfiguration.property.subjectFilters"></a>

```typescript
public readonly subjectFilters: IGithubActionOidcFilter[];
```

- *Type:* <a href="#@blimmer/cdk-github-oidc.IGithubActionOidcFilter">IGithubActionOidcFilter</a>[]

Subject filters to apply to the Github Actions OIDC token.

This filters restrict which repo/branch/tag/etc. can assume the role. This construct
exposes many common filters, but you can also pass a custom filter if you need to.

For a basic starting point, you can allow all branches to access the role via:

const subjectFilters = [
  new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "*" }),
]

---

### GithubActionsRoleProps <a name="GithubActionsRoleProps" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.Initializer"></a>

```typescript
import { GithubActionsRoleProps } from '@blimmer/cdk-github-oidc'

const githubActionsRoleProps: GithubActionsRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.provider">provider</a></code> | <code><a href="#@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider">IGithubActionsIdentityProvider</a></code> | Reference to the Github Actions OpenID Connect Provider configured in AWS IAM. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.subjectFilters">subjectFilters</a></code> | <code><a href="#@blimmer/cdk-github-oidc.IGithubActionOidcFilter">IGithubActionOidcFilter</a>[]</code> | Subject filters to apply to the Github Actions OIDC token. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.description">description</a></code> | <code>string</code> | A description of the role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.externalIds">externalIds</a></code> | <code>string[]</code> | List of IDs that the role assumer needs to provide one of when assuming this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.inlinePolicies">inlinePolicies</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_iam.PolicyDocument}</code> | A list of named policies to inline into this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.managedPolicies">managedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | A list of managed policies associated with this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.maxSessionDuration">maxSessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum session duration that you want to set for the specified role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.path">path</a></code> | <code>string</code> | The path associated with this role. |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | AWS supports permissions boundaries for IAM entities (users or roles). |
| <code><a href="#@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.roleName">roleName</a></code> | <code>string</code> | A name for the IAM role. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.provider"></a>

```typescript
public readonly provider: IGithubActionsIdentityProvider;
```

- *Type:* <a href="#@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider">IGithubActionsIdentityProvider</a>

Reference to the Github Actions OpenID Connect Provider configured in AWS IAM.

Either pass an construct defined by `new GithubActionsOidcProvider`
or a retrieved reference from `GithubActionsOidcProvider.fromAccount`.
There can be only one (per AWS Account).

---

##### `subjectFilters`<sup>Required</sup> <a name="subjectFilters" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.subjectFilters"></a>

```typescript
public readonly subjectFilters: IGithubActionOidcFilter[];
```

- *Type:* <a href="#@blimmer/cdk-github-oidc.IGithubActionOidcFilter">IGithubActionOidcFilter</a>[]

Subject filters to apply to the Github Actions OIDC token.

This filters restrict which repo/branch/tag/etc. can assume the role. This construct
exposes many common filters, but you can also pass a custom filter if you need to.

For a basic starting point, you can allow all branches to access the role via:

const subjectFilters = [
  new BranchFilter({ owner: "my-org", repository: "my-repo", branch: "*" }),
]

---

##### `description`<sup>Optional</sup> <a name="description" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the role.

It can be up to 1000 characters long.

---

##### `externalIds`<sup>Optional</sup> <a name="externalIds" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.externalIds"></a>

```typescript
public readonly externalIds: string[];
```

- *Type:* string[]
- *Default:* No external ID required

List of IDs that the role assumer needs to provide one of when assuming this role.

If the configured and provided external IDs do not match, the
AssumeRole operation will fail.

---

##### `inlinePolicies`<sup>Optional</sup> <a name="inlinePolicies" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.inlinePolicies"></a>

```typescript
public readonly inlinePolicies: {[ key: string ]: PolicyDocument};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_iam.PolicyDocument}
- *Default:* No policy is inlined in the Role resource.

A list of named policies to inline into this role.

These policies will be
created with the role, whereas those added by ``addToPolicy`` are added
using a separate CloudFormation resource (allowing a way around circular
dependencies that could otherwise be introduced).

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]
- *Default:* No managed policies.

A list of managed policies associated with this role.

You can add managed policies later using
`addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(policyName))`.

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="maxSessionDuration" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.maxSessionDuration"></a>

```typescript
public readonly maxSessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(1)

The maximum session duration that you want to set for the specified role.

This setting can have a value from 1 hour (3600sec) to 12 (43200sec) hours.

Anyone who assumes the role from the AWS CLI or API can use the
DurationSeconds API parameter or the duration-seconds CLI parameter to
request a longer session. The MaxSessionDuration setting determines the
maximum duration that can be requested using the DurationSeconds
parameter.

If users don't specify a value for the DurationSeconds parameter, their
security credentials are valid for one hour by default. This applies when
you use the AssumeRole* API operations or the assume-role* CLI operations
but does not apply when you use those operations to create a console URL.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html)

---

##### `path`<sup>Optional</sup> <a name="path" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string
- *Default:* /

The path associated with this role.

For information about IAM paths, see
Friendly Names and Paths in IAM User Guide.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy
- *Default:* No permissions boundary.

AWS supports permissions boundaries for IAM entities (users or roles).

A permissions boundary is an advanced feature for using a managed policy
to set the maximum permissions that an identity-based policy can grant to
an IAM entity. An entity's permissions boundary allows it to perform only
the actions that are allowed by both its identity-based policies and its
permissions boundaries.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@blimmer/cdk-github-oidc.GithubActionsRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the role name.

A name for the IAM role.

For valid values, see the RoleName parameter for
the CreateRole action in the IAM API Reference.

IMPORTANT: If you specify a name, you cannot perform updates that require
replacement of this resource. You can perform updates that require no or
some interruption. If you must replace the resource, specify a new name.

If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to
acknowledge your template's capabilities. For more information, see
Acknowledging IAM Resources in AWS CloudFormation Templates.

---

### RoleProps <a name="RoleProps" id="@blimmer/cdk-github-oidc.RoleProps"></a>

RoleProps.

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.RoleProps.Initializer"></a>

```typescript
import { RoleProps } from '@blimmer/cdk-github-oidc'

const roleProps: RoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.RoleProps.property.description">description</a></code> | <code>string</code> | A description of the role. |
| <code><a href="#@blimmer/cdk-github-oidc.RoleProps.property.externalIds">externalIds</a></code> | <code>string[]</code> | List of IDs that the role assumer needs to provide one of when assuming this role. |
| <code><a href="#@blimmer/cdk-github-oidc.RoleProps.property.inlinePolicies">inlinePolicies</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_iam.PolicyDocument}</code> | A list of named policies to inline into this role. |
| <code><a href="#@blimmer/cdk-github-oidc.RoleProps.property.managedPolicies">managedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | A list of managed policies associated with this role. |
| <code><a href="#@blimmer/cdk-github-oidc.RoleProps.property.maxSessionDuration">maxSessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum session duration that you want to set for the specified role. |
| <code><a href="#@blimmer/cdk-github-oidc.RoleProps.property.path">path</a></code> | <code>string</code> | The path associated with this role. |
| <code><a href="#@blimmer/cdk-github-oidc.RoleProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | AWS supports permissions boundaries for IAM entities (users or roles). |
| <code><a href="#@blimmer/cdk-github-oidc.RoleProps.property.roleName">roleName</a></code> | <code>string</code> | A name for the IAM role. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@blimmer/cdk-github-oidc.RoleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the role.

It can be up to 1000 characters long.

---

##### `externalIds`<sup>Optional</sup> <a name="externalIds" id="@blimmer/cdk-github-oidc.RoleProps.property.externalIds"></a>

```typescript
public readonly externalIds: string[];
```

- *Type:* string[]
- *Default:* No external ID required

List of IDs that the role assumer needs to provide one of when assuming this role.

If the configured and provided external IDs do not match, the
AssumeRole operation will fail.

---

##### `inlinePolicies`<sup>Optional</sup> <a name="inlinePolicies" id="@blimmer/cdk-github-oidc.RoleProps.property.inlinePolicies"></a>

```typescript
public readonly inlinePolicies: {[ key: string ]: PolicyDocument};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_iam.PolicyDocument}
- *Default:* No policy is inlined in the Role resource.

A list of named policies to inline into this role.

These policies will be
created with the role, whereas those added by ``addToPolicy`` are added
using a separate CloudFormation resource (allowing a way around circular
dependencies that could otherwise be introduced).

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@blimmer/cdk-github-oidc.RoleProps.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]
- *Default:* No managed policies.

A list of managed policies associated with this role.

You can add managed policies later using
`addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName(policyName))`.

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="maxSessionDuration" id="@blimmer/cdk-github-oidc.RoleProps.property.maxSessionDuration"></a>

```typescript
public readonly maxSessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(1)

The maximum session duration that you want to set for the specified role.

This setting can have a value from 1 hour (3600sec) to 12 (43200sec) hours.

Anyone who assumes the role from the AWS CLI or API can use the
DurationSeconds API parameter or the duration-seconds CLI parameter to
request a longer session. The MaxSessionDuration setting determines the
maximum duration that can be requested using the DurationSeconds
parameter.

If users don't specify a value for the DurationSeconds parameter, their
security credentials are valid for one hour by default. This applies when
you use the AssumeRole* API operations or the assume-role* CLI operations
but does not apply when you use those operations to create a console URL.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html)

---

##### `path`<sup>Optional</sup> <a name="path" id="@blimmer/cdk-github-oidc.RoleProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string
- *Default:* /

The path associated with this role.

For information about IAM paths, see
Friendly Names and Paths in IAM User Guide.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@blimmer/cdk-github-oidc.RoleProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy
- *Default:* No permissions boundary.

AWS supports permissions boundaries for IAM entities (users or roles).

A permissions boundary is an advanced feature for using a managed policy
to set the maximum permissions that an identity-based policy can grant to
an IAM entity. An entity's permissions boundary allows it to perform only
the actions that are allowed by both its identity-based policies and its
permissions boundaries.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@blimmer/cdk-github-oidc.RoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the role name.

A name for the IAM role.

For valid values, see the RoleName parameter for
the CreateRole action in the IAM API Reference.

IMPORTANT: If you specify a name, you cannot perform updates that require
replacement of this resource. You can perform updates that require no or
some interruption. If you must replace the resource, specify a new name.

If you specify a name, you must specify the CAPABILITY_NAMED_IAM value to
acknowledge your template's capabilities. For more information, see
Acknowledging IAM Resources in AWS CloudFormation Templates.

---

### TagFilterProps <a name="TagFilterProps" id="@blimmer/cdk-github-oidc.TagFilterProps"></a>

#### Initializer <a name="Initializer" id="@blimmer/cdk-github-oidc.TagFilterProps.Initializer"></a>

```typescript
import { TagFilterProps } from '@blimmer/cdk-github-oidc'

const tagFilterProps: TagFilterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.TagFilterProps.property.owner">owner</a></code> | <code>string</code> | The org or user that owns the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.TagFilterProps.property.repository">repository</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@blimmer/cdk-github-oidc.TagFilterProps.property.tag">tag</a></code> | <code>string</code> | The name of the tag to filter on. You can also use wildcards. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@blimmer/cdk-github-oidc.TagFilterProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The org or user that owns the repository.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@blimmer/cdk-github-oidc.TagFilterProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The name of the repository.

---

##### `tag`<sup>Required</sup> <a name="tag" id="@blimmer/cdk-github-oidc.TagFilterProps.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The name of the tag to filter on. You can also use wildcards.

To allow all tags, pass `*`.

---

## Classes <a name="Classes" id="Classes"></a>

### BranchFilter <a name="BranchFilter" id="@blimmer/cdk-github-oidc.BranchFilter"></a>

Allow assuming a role for a specific Github branch.

https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-a-specific-branch

#### Initializers <a name="Initializers" id="@blimmer/cdk-github-oidc.BranchFilter.Initializer"></a>

```typescript
import { BranchFilter } from '@blimmer/cdk-github-oidc'

new BranchFilter(props: BranchFilterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.BranchFilter.Initializer.parameter.props">props</a></code> | <code><a href="#@blimmer/cdk-github-oidc.BranchFilterProps">BranchFilterProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@blimmer/cdk-github-oidc.BranchFilter.Initializer.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.BranchFilterProps">BranchFilterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.BranchFilter.toSubject">toSubject</a></code> | *No description.* |

---

##### `toSubject` <a name="toSubject" id="@blimmer/cdk-github-oidc.BranchFilter.toSubject"></a>

```typescript
public toSubject(): string
```




### CustomFilter <a name="CustomFilter" id="@blimmer/cdk-github-oidc.CustomFilter"></a>

Allow assuming a role for a specific Github filter.

Use this as an escape hatch if we don't expose a first-class IGithubActionOidcFilter for your use case.

#### Initializers <a name="Initializers" id="@blimmer/cdk-github-oidc.CustomFilter.Initializer"></a>

```typescript
import { CustomFilter } from '@blimmer/cdk-github-oidc'

new CustomFilter(props: CustomFilterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.CustomFilter.Initializer.parameter.props">props</a></code> | <code><a href="#@blimmer/cdk-github-oidc.CustomFilterProps">CustomFilterProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@blimmer/cdk-github-oidc.CustomFilter.Initializer.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.CustomFilterProps">CustomFilterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.CustomFilter.toSubject">toSubject</a></code> | *No description.* |

---

##### `toSubject` <a name="toSubject" id="@blimmer/cdk-github-oidc.CustomFilter.toSubject"></a>

```typescript
public toSubject(): string
```




### EnvironmentFilter <a name="EnvironmentFilter" id="@blimmer/cdk-github-oidc.EnvironmentFilter"></a>

Allow assuming a role for a specific Github environment.

https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-a-specific-environment

#### Initializers <a name="Initializers" id="@blimmer/cdk-github-oidc.EnvironmentFilter.Initializer"></a>

```typescript
import { EnvironmentFilter } from '@blimmer/cdk-github-oidc'

new EnvironmentFilter(props: EnvironmentFilterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.EnvironmentFilter.Initializer.parameter.props">props</a></code> | <code><a href="#@blimmer/cdk-github-oidc.EnvironmentFilterProps">EnvironmentFilterProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@blimmer/cdk-github-oidc.EnvironmentFilter.Initializer.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.EnvironmentFilterProps">EnvironmentFilterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.EnvironmentFilter.toSubject">toSubject</a></code> | *No description.* |

---

##### `toSubject` <a name="toSubject" id="@blimmer/cdk-github-oidc.EnvironmentFilter.toSubject"></a>

```typescript
public toSubject(): string
```




### IGithubActionOidcFilter <a name="IGithubActionOidcFilter" id="@blimmer/cdk-github-oidc.IGithubActionOidcFilter"></a>

#### Initializers <a name="Initializers" id="@blimmer/cdk-github-oidc.IGithubActionOidcFilter.Initializer"></a>

```typescript
import { IGithubActionOidcFilter } from '@blimmer/cdk-github-oidc'

new IGithubActionOidcFilter(props: GithubActionOidcFilterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.IGithubActionOidcFilter.Initializer.parameter.props">props</a></code> | <code><a href="#@blimmer/cdk-github-oidc.GithubActionOidcFilterProps">GithubActionOidcFilterProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@blimmer/cdk-github-oidc.IGithubActionOidcFilter.Initializer.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.GithubActionOidcFilterProps">GithubActionOidcFilterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.IGithubActionOidcFilter.toSubject">toSubject</a></code> | *No description.* |

---

##### `toSubject` <a name="toSubject" id="@blimmer/cdk-github-oidc.IGithubActionOidcFilter.toSubject"></a>

```typescript
public toSubject(): string
```




### PullRequestFilter <a name="PullRequestFilter" id="@blimmer/cdk-github-oidc.PullRequestFilter"></a>

Allow assuming a role from (non-environment-specific) pull requests.

https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-pull_request-events

#### Initializers <a name="Initializers" id="@blimmer/cdk-github-oidc.PullRequestFilter.Initializer"></a>

```typescript
import { PullRequestFilter } from '@blimmer/cdk-github-oidc'

new PullRequestFilter(props: GithubActionOidcFilterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.PullRequestFilter.Initializer.parameter.props">props</a></code> | <code><a href="#@blimmer/cdk-github-oidc.GithubActionOidcFilterProps">GithubActionOidcFilterProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@blimmer/cdk-github-oidc.PullRequestFilter.Initializer.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.GithubActionOidcFilterProps">GithubActionOidcFilterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.PullRequestFilter.toSubject">toSubject</a></code> | *No description.* |

---

##### `toSubject` <a name="toSubject" id="@blimmer/cdk-github-oidc.PullRequestFilter.toSubject"></a>

```typescript
public toSubject(): string
```




### TagFilter <a name="TagFilter" id="@blimmer/cdk-github-oidc.TagFilter"></a>

Allow assuming a role for a specific Github tag.

https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect#filtering-for-a-specific-tag

#### Initializers <a name="Initializers" id="@blimmer/cdk-github-oidc.TagFilter.Initializer"></a>

```typescript
import { TagFilter } from '@blimmer/cdk-github-oidc'

new TagFilter(props: TagFilterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.TagFilter.Initializer.parameter.props">props</a></code> | <code><a href="#@blimmer/cdk-github-oidc.TagFilterProps">TagFilterProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@blimmer/cdk-github-oidc.TagFilter.Initializer.parameter.props"></a>

- *Type:* <a href="#@blimmer/cdk-github-oidc.TagFilterProps">TagFilterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.TagFilter.toSubject">toSubject</a></code> | *No description.* |

---

##### `toSubject` <a name="toSubject" id="@blimmer/cdk-github-oidc.TagFilter.toSubject"></a>

```typescript
public toSubject(): string
```




## Protocols <a name="Protocols" id="Protocols"></a>

### IGithubActionsIdentityProvider <a name="IGithubActionsIdentityProvider" id="@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider"></a>

- *Implemented By:* <a href="#@blimmer/cdk-github-oidc.GithubActionsIdentityProvider">GithubActionsIdentityProvider</a>, <a href="#@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider">IGithubActionsIdentityProvider</a>

Interface representing a Github Actions OIDC provider.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider.property.arn">arn</a></code> | <code>string</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@blimmer/cdk-github-oidc.IGithubActionsIdentityProvider.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

