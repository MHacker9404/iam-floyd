import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [secretsmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Secretsmanager extends PolicyStatement {
  public servicePrefix = 'secretsmanager';

  /**
   * Statement provider for service [secretsmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Enables the user to cancel an in-progress secret rotation.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toCancelRotateSecret() {
    return this.to('CancelRotateSecret');
  }

  /**
   * Enables the user to create a secret that stores encrypted data that can be queried and rotated.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifName()
   * - .ifDescription()
   * - .ifKmsKeyId()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toCreateSecret() {
    return this.to('CreateSecret');
  }

  /**
   * Enables the user to delete the resource policy attached to a secret.
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Enables the user to delete a secret.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifRecoveryWindowInDays()
   * - .ifForceDeleteWithoutRecovery()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toDeleteSecret() {
    return this.to('DeleteSecret');
  }

  /**
   * Enables the user to retrieve the metadata about a secret, but not the encrypted data.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toDescribeSecret() {
    return this.to('DescribeSecret');
  }

  /**
   * Enables the user to generate a random string for use in password creation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toGetRandomPassword() {
    return this.to('GetRandomPassword');
  }

  /**
   * Enables the user to get the resource policy attached to a secret.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Enables the user to retrieve and decrypt the encrypted data.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifVersionId()
   * - .ifVersionStage()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toGetSecretValue() {
    return this.to('GetSecretValue');
  }

  /**
   * Enables the user to list the available versions of a secret.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toListSecretVersionIds() {
    return this.to('ListSecretVersionIds');
  }

  /**
   * Enables the user to list the available secrets.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toListSecrets() {
    return this.to('ListSecrets');
  }

  /**
   * Enables the user to attach a resource policy to a secret.
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifBlockPublicPolicy()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Enables the user to create a new version of the secret with new encrypted data.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toPutSecretValue() {
    return this.to('PutSecretValue');
  }

  /**
   * Enables the user to cancel deletion of a secret.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toRestoreSecret() {
    return this.to('RestoreSecret');
  }

  /**
   * Enables the user to start rotation of a secret.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifRotationLambdaARN()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toRotateSecret() {
    return this.to('RotateSecret');
  }

  /**
   * Enables the user to add tags to a secret.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Enables the user to remove tags from a secret.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifAwsTagKeys()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Enables the user to update a secret with new metadata or with a new version of the encrypted data.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifDescription()
   * - .ifKmsKeyId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toUpdateSecret() {
    return this.to('UpdateSecret');
  }

  /**
   * Enables the user to move a stage from one secret to another.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifVersionStage()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toUpdateSecretVersionStage() {
    return this.to('UpdateSecretVersionStage');
  }

  /**
   * Enables the user to validate a resource policy before attaching policy.
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public toValidateResourcePolicy() {
    return this.to('ValidateResourcePolicy');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelRotateSecret",
      "CreateSecret",
      "DeleteSecret",
      "PutSecretValue",
      "RestoreSecret",
      "RotateSecret",
      "UpdateSecret",
      "UpdateSecretVersionStage"
    ],
    "Permissions management": [
      "DeleteResourcePolicy",
      "PutResourcePolicy",
      "ValidateResourcePolicy"
    ],
    "Read": [
      "DescribeSecret",
      "GetRandomPassword",
      "GetResourcePolicy",
      "GetSecretValue",
      "ListSecretVersionIds"
    ],
    "List": [
      "ListSecrets"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type Secret to the statement
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-resources
   *
   * @param secretId - Identifier for the secretId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   * - .ifResource()
   */
  public onSecret(secretId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:secretsmanager:${Region}:${Account}:secret:${SecretId}';
    arn = arn.replace('${SecretId}', secretId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by whether the resource policy blocks broad AWS account access.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toPutResourcePolicy()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifBlockPublicPolicy(value?: boolean) {
    return this.if(`secretsmanager:BlockPublicPolicy`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the description text in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateSecret()
   * - .toUpdateSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDescription(value: string | string[], operator?: Operator | string) {
    return this.if(`Description`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the secret is to be deleted immediately without any recovery window.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toDeleteSecret()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifForceDeleteWithoutRecovery(value?: boolean) {
    return this.if(`secretsmanager:ForceDeleteWithoutRecovery`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the ARN of the KMS key in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateSecret()
   * - .toUpdateSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKmsKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`KmsKeyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the friendly name of the secret in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifName(value: string | string[], operator?: Operator | string) {
    return this.if(`Name`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the number of days that Secrets Manager waits before it can delete the secret.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toDeleteSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRecoveryWindowInDays(value: number | number[], operator?: Operator | string) {
    return this.if(`RecoveryWindowInDays`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by a tag key and value pair.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCancelRotateSecret()
   * - .toCreateSecret()
   * - .toDeleteResourcePolicy()
   * - .toDeleteSecret()
   * - .toDescribeSecret()
   * - .toGetResourcePolicy()
   * - .toGetSecretValue()
   * - .toListSecretVersionIds()
   * - .toPutResourcePolicy()
   * - .toPutSecretValue()
   * - .toRestoreSecret()
   * - .toRotateSecret()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateSecret()
   * - .toUpdateSecretVersionStage()
   * - .toValidateResourcePolicy()
   *
   * Applies to resource types:
   * - Secret
   *
   * @param tagkey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagkey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagkey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the rotation Lambda function in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toRotateSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRotationLambdaARN(value: string | string[], operator?: Operator | string) {
    return this.if(`RotationLambdaARN`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the SecretID value in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCancelRotateSecret()
   * - .toDeleteResourcePolicy()
   * - .toDeleteSecret()
   * - .toDescribeSecret()
   * - .toGetResourcePolicy()
   * - .toGetSecretValue()
   * - .toListSecretVersionIds()
   * - .toPutResourcePolicy()
   * - .toPutSecretValue()
   * - .toRestoreSecret()
   * - .toRotateSecret()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateSecret()
   * - .toUpdateSecretVersionStage()
   * - .toValidateResourcePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSecretId(value: string | string[], operator?: Operator | string) {
    return this.if(`SecretId`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the unique identifier of the version of the secret in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toGetSecretValue()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionId(value: string | string[], operator?: Operator | string) {
    return this.if(`VersionId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of version stages in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toGetSecretValue()
   * - .toUpdateSecretVersionStage()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionStage(value: string | string[], operator?: Operator | string) {
    return this.if(`VersionStage`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the rotation Lambda function associated with the secret.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCancelRotateSecret()
   * - .toDeleteResourcePolicy()
   * - .toDeleteSecret()
   * - .toDescribeSecret()
   * - .toGetResourcePolicy()
   * - .toGetSecretValue()
   * - .toListSecretVersionIds()
   * - .toPutResourcePolicy()
   * - .toPutSecretValue()
   * - .toRestoreSecret()
   * - .toRotateSecret()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateSecret()
   * - .toUpdateSecretVersionStage()
   * - .toValidateResourcePolicy()
   *
   * Applies to resource types:
   * - Secret
   *
   * @param allowRotationLambdaArn The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifResource(allowRotationLambdaArn: string, value: string | string[], operator?: Operator | string) {
    return this.if(`resource/${ allowRotationLambdaArn }`, value, operator || 'ArnLike');
  }
}
