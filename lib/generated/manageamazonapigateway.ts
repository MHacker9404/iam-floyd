import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [apigateway](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_manageamazonapigateway.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Apigateway extends PolicyStatement {
  public servicePrefix = 'apigateway';
  protected actionList: Actions = {
    "DELETE": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_DELETE.html",
      "description": "Used to delete resources",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "GET": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_GET.html",
      "description": "Used to get information about resources",
      "accessLevel": "Read",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      }
    },
    "PATCH": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_PATCH.html",
      "description": "Used to update resources",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "POST": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_POST.html",
      "description": "Used to create child resources",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PUT": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_PUT.html",
      "description": "Used to update resources (and, although not recommended, can be used to create child resources)",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "SetWebACL": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/WEBACL_SET.html",
      "description": "Gives WebAcl permissions to WAF",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      }
    },
    "UpdateRestApiPolicy": {
      "url": "",
      "description": "Used to update the Resource Policy for a given API",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "apigateway-general": {
      "name": "apigateway-general",
      "url": "https://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html",
      "arn": "arn:${Partition}:apigateway:${Region}::${ApiGatewayResourcePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [apigateway](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_manageamazonapigateway.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Used to delete resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_DELETE.html
   */
  public toDELETE() {
    this.to('apigateway:DELETE');
    return this;
  }

  /**
   * Used to get information about resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_GET.html
   */
  public toGET() {
    this.to('apigateway:GET');
    return this;
  }

  /**
   * Used to update resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_PATCH.html
   */
  public toPATCH() {
    this.to('apigateway:PATCH');
    return this;
  }

  /**
   * Used to create child resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_POST.html
   */
  public toPOST() {
    this.to('apigateway:POST');
    return this;
  }

  /**
   * Used to update resources (and, although not recommended, can be used to create child resources)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_PUT.html
   */
  public toPUT() {
    this.to('apigateway:PUT');
    return this;
  }

  /**
   * Gives WebAcl permissions to WAF
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/WEBACL_SET.html
   */
  public toSetWebACL() {
    this.to('apigateway:SetWebACL');
    return this;
  }

  /**
   * Used to update the Resource Policy for a given API
   *
   * Access Level: Write
   */
  public toUpdateRestApiPolicy() {
    this.to('apigateway:UpdateRestApiPolicy');
    return this;
  }

  /**
   * Adds a resource of type apigateway-general to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html
   *
   * @param apiGatewayResourcePath - Identifier for the apiGatewayResourcePath.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApigatewayGeneral(apiGatewayResourcePath: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::${ApiGatewayResourcePath}';
    arn = arn.replace('${ApiGatewayResourcePath}', apiGatewayResourcePath);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
