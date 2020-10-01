import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ecs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ecs extends PolicyStatement {
  public servicePrefix = 'ecs';
  protected actionList: Actions = {
    "CreateCapacityProvider": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html",
      "description": "Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html",
      "description": "Creates a new Amazon ECS cluster.",
      "accessLevel": "Write",
      "conditions": [
        "ecs:capacity-provider",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateService": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html",
      "description": "Runs and maintains a desired number of tasks from a specified task definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:capacity-provider",
        "ecs:task-definition",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTaskSet": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html",
      "description": "Creates a new Amazon ECS task set.",
      "accessLevel": "Write",
      "conditions": [
        "ecs:cluster",
        "ecs:service",
        "ecs:task-definition"
      ]
    },
    "DeleteAccountSetting": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html",
      "description": "Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are disabled for new resources that are created.",
      "accessLevel": "Write"
    },
    "DeleteAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html",
      "description": "Deletes one or more custom attributes from an Amazon ECS resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DeleteCapacityProvider": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCapacityProvider.html",
      "description": "Deletes the specified capacity provider.",
      "accessLevel": "Write",
      "resourceTypes": {
        "capacity-provider": {
          "required": true
        }
      }
    },
    "DeleteCluster": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html",
      "description": "Deletes the specified cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DeleteService": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html",
      "description": "Deletes a specified service within a cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DeleteTaskSet": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html",
      "description": "Deletes the specified task set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task-set": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:service"
      ]
    },
    "DeregisterContainerInstance": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html",
      "description": "Deregisters an Amazon ECS container instance from the specified cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DeregisterTaskDefinition": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html",
      "description": "Deregisters the specified task definition by family and revision.",
      "accessLevel": "Write"
    },
    "DescribeCapacityProviders": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeCapacityProviders.html",
      "description": "Describes one or more Amazon ECS capacity providers.",
      "accessLevel": "Read",
      "resourceTypes": {
        "capacity-provider": {
          "required": true
        }
      }
    },
    "DescribeClusters": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html",
      "description": "Describes one or more of your clusters.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "DescribeContainerInstances": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html",
      "description": "Describes Amazon ECS container instances.",
      "accessLevel": "Read",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DescribeServices": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html",
      "description": "Describes the specified services running in your cluster.",
      "accessLevel": "Read",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DescribeTaskDefinition": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html",
      "description": "Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.",
      "accessLevel": "Read"
    },
    "DescribeTaskSets": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html",
      "description": "Describes Amazon ECS task sets.",
      "accessLevel": "Read",
      "resourceTypes": {
        "task-set": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:service"
      ]
    },
    "DescribeTasks": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html",
      "description": "Describes a specified task or tasks.",
      "accessLevel": "Read",
      "resourceTypes": {
        "task": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "DiscoverPollEndpoint": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html",
      "description": "Returns an endpoint for the Amazon ECS agent to poll for updates.",
      "accessLevel": "Write"
    },
    "ListAccountSettings": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html",
      "description": "Lists the account settings for an Amazon ECS resource for a specified principal.",
      "accessLevel": "List"
    },
    "ListAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html",
      "description": "Lists the attributes for Amazon ECS resources within a specified target type and cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListClusters": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html",
      "description": "Returns a list of existing clusters.",
      "accessLevel": "List"
    },
    "ListContainerInstances": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html",
      "description": "Returns a list of container instances in a specified cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "ListServices": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html",
      "description": "Lists the services that are running in a specified cluster.",
      "accessLevel": "List",
      "conditions": [
        "ecs:cluster"
      ]
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html",
      "description": "List tags for the specified resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "container-instance": {
          "required": false
        },
        "task": {
          "required": false
        },
        "task-definition": {
          "required": false
        }
      }
    },
    "ListTaskDefinitionFamilies": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html",
      "description": "Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definitions).",
      "accessLevel": "List"
    },
    "ListTaskDefinitions": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html",
      "description": "Returns a list of task definitions that are registered to your account.",
      "accessLevel": "List"
    },
    "ListTasks": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html",
      "description": "Returns a list of tasks for a specified cluster.",
      "accessLevel": "List",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "Poll": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html",
      "description": "Grants permission to an agent to connect with the Amazon ECS service to report status and get commands.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "PutAccountSetting": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html",
      "description": "Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are enabled for new resources that are created. Enabling this setting is required to use new Amazon ECS features such as resource tagging.",
      "accessLevel": "Write"
    },
    "PutAccountSettingDefault": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html",
      "description": "Modifies the ARN and resource ID format of a resource type for all IAM users on an account for which no individual account setting has been set. Enabling this setting is required to use new Amazon ECS features such as resource tagging.",
      "accessLevel": "Write"
    },
    "PutAttributes": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html",
      "description": "Create or update an attribute on an Amazon ECS resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "PutClusterCapacityProviders": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html",
      "description": "Modifies the available capacity providers and the default capacity provider strategy for a cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "capacity-provider": {
          "required": true
        }
      },
      "conditions": [
        "ecs:capacity-provider"
      ]
    },
    "RegisterContainerInstance": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html",
      "description": "Registers an EC2 instance into the specified cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "RegisterTaskDefinition": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html",
      "description": "Registers a new task definition from the supplied family and containerDefinitions.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "RunTask": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html",
      "description": "Start a task using random placement and the default Amazon ECS scheduler.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task-definition": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:capacity-provider",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StartTask": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html",
      "description": "Starts a new task from the specified task definition on the specified container instance or instances.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task-definition": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:container-instances",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StartTelemetrySession": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html#enable_cloudwatch",
      "description": "Grants permission to start a telemetry session.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "StopTask": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html",
      "description": "Stops a running task.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "SubmitAttachmentStateChanges": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html",
      "description": "Sent to acknowledge that attachments changed states.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "SubmitContainerStateChange": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html",
      "description": "Sent to acknowledge that a container changed states.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "SubmitTaskStateChange": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html",
      "description": "Sent to acknowledge that a task changed states.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html",
      "description": "Tags the specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "container-instance": {
          "required": false
        },
        "service": {
          "required": false
        },
        "task": {
          "required": false
        },
        "task-definition": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html",
      "description": "Untags the specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "cluster": {
          "required": false
        },
        "container-instance": {
          "required": false
        },
        "service": {
          "required": false
        },
        "task": {
          "required": false
        },
        "task-definition": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateClusterSettings": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateClusterSettings.html",
      "description": "Modifies the settings to use for a cluster.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cluster": {
          "required": true
        }
      }
    },
    "UpdateContainerAgent": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html",
      "description": "Updates the Amazon ECS container agent on a specified container instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "UpdateContainerInstancesState": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html",
      "description": "Enables the user to modify the status of an Amazon ECS container instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "container-instance": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "UpdateService": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html",
      "description": "Modifies the parameters of a service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:capacity-provider",
        "ecs:task-definition"
      ]
    },
    "UpdateServicePrimaryTaskSet": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html",
      "description": "Modifies the primary task set used in a service.",
      "accessLevel": "Write",
      "resourceTypes": {
        "service": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster"
      ]
    },
    "UpdateTaskSet": {
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html",
      "description": "Updates the specified task set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "task-set": {
          "required": true
        }
      },
      "conditions": [
        "ecs:cluster",
        "ecs:service"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "cluster": {
      "name": "cluster",
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_clusters.html",
      "arn": "arn:${Partition}:ecs:${Region}:${Account}:cluster/${ClusterName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ecs:ResourceTag/${TagKey}"
      ]
    },
    "container-instance": {
      "name": "container-instance",
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html",
      "arn": "arn:${Partition}:ecs:${Region}:${Account}:container-instance/${ContainerInstanceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ecs:ResourceTag/${TagKey}"
      ]
    },
    "service": {
      "name": "service",
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html",
      "arn": "arn:${Partition}:ecs:${Region}:${Account}:service/${ServiceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ecs:ResourceTag/${TagKey}"
      ]
    },
    "task": {
      "name": "task",
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html",
      "arn": "arn:${Partition}:ecs:${Region}:${Account}:task/${TaskId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ecs:ResourceTag/${TagKey}"
      ]
    },
    "task-definition": {
      "name": "task-definition",
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html",
      "arn": "arn:${Partition}:ecs:${Region}:${Account}:task-definition/${TaskDefinitionFamilyName}:${TaskDefinitionRevisionNumber}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ecs:ResourceTag/${TagKey}"
      ]
    },
    "capacity-provider": {
      "name": "capacity-provider",
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/capacity_provider_definitions.html",
      "arn": "arn:${Partition}:ecs:${Region}:${Account}:capacity-provider/${CapacityProviderName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ecs:ResourceTag/${TagKey}"
      ]
    },
    "task-set": {
      "name": "task-set",
      "url": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_sets.html",
      "arn": "arn:${Partition}:ecs:${Region}:${Account}:task-set/${ClusterName}/${ServiceName}/${TaskSetId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ecs:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [ecs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html
   */
  public toCreateCapacityProvider() {
    this.to('ecs:CreateCapacityProvider');
    return this;
  }

  /**
   * Creates a new Amazon ECS cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCapacityProvider()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    this.to('ecs:CreateCluster');
    return this;
  }

  /**
   * Runs and maintains a desired number of tasks from a specified task definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifCapacityProvider()
   * - .ifTaskDefinition()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html
   */
  public toCreateService() {
    this.to('ecs:CreateService');
    return this;
  }

  /**
   * Creates a new Amazon ECS task set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifService()
   * - .ifTaskDefinition()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateTaskSet.html
   */
  public toCreateTaskSet() {
    this.to('ecs:CreateTaskSet');
    return this;
  }

  /**
   * Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are disabled for new resources that are created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAccountSetting.html
   */
  public toDeleteAccountSetting() {
    this.to('ecs:DeleteAccountSetting');
    return this;
  }

  /**
   * Deletes one or more custom attributes from an Amazon ECS resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteAttributes.html
   */
  public toDeleteAttributes() {
    this.to('ecs:DeleteAttributes');
    return this;
  }

  /**
   * Deletes the specified capacity provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCapacityProvider.html
   */
  public toDeleteCapacityProvider() {
    this.to('ecs:DeleteCapacityProvider');
    return this;
  }

  /**
   * Deletes the specified cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    this.to('ecs:DeleteCluster');
    return this;
  }

  /**
   * Deletes a specified service within a cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteService.html
   */
  public toDeleteService() {
    this.to('ecs:DeleteService');
    return this;
  }

  /**
   * Deletes the specified task set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html
   */
  public toDeleteTaskSet() {
    this.to('ecs:DeleteTaskSet');
    return this;
  }

  /**
   * Deregisters an Amazon ECS container instance from the specified cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterContainerInstance.html
   */
  public toDeregisterContainerInstance() {
    this.to('ecs:DeregisterContainerInstance');
    return this;
  }

  /**
   * Deregisters the specified task definition by family and revision.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html
   */
  public toDeregisterTaskDefinition() {
    this.to('ecs:DeregisterTaskDefinition');
    return this;
  }

  /**
   * Describes one or more Amazon ECS capacity providers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeCapacityProviders.html
   */
  public toDescribeCapacityProviders() {
    this.to('ecs:DescribeCapacityProviders');
    return this;
  }

  /**
   * Describes one or more of your clusters.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    this.to('ecs:DescribeClusters');
    return this;
  }

  /**
   * Describes Amazon ECS container instances.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html
   */
  public toDescribeContainerInstances() {
    this.to('ecs:DescribeContainerInstances');
    return this;
  }

  /**
   * Describes the specified services running in your cluster.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeServices.html
   */
  public toDescribeServices() {
    this.to('ecs:DescribeServices');
    return this;
  }

  /**
   * Describes a task definition. You can specify a family and revision to find information about a specific task definition, or you can simply specify the family to find the latest ACTIVE revision in that family.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskDefinition.html
   */
  public toDescribeTaskDefinition() {
    this.to('ecs:DescribeTaskDefinition');
    return this;
  }

  /**
   * Describes Amazon ECS task sets.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTaskSets.html
   */
  public toDescribeTaskSets() {
    this.to('ecs:DescribeTaskSets');
    return this;
  }

  /**
   * Describes a specified task or tasks.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html
   */
  public toDescribeTasks() {
    this.to('ecs:DescribeTasks');
    return this;
  }

  /**
   * Returns an endpoint for the Amazon ECS agent to poll for updates.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DiscoverPollEndpoint.html
   */
  public toDiscoverPollEndpoint() {
    this.to('ecs:DiscoverPollEndpoint');
    return this;
  }

  /**
   * Lists the account settings for an Amazon ECS resource for a specified principal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAccountSettings.html
   */
  public toListAccountSettings() {
    this.to('ecs:ListAccountSettings');
    return this;
  }

  /**
   * Lists the attributes for Amazon ECS resources within a specified target type and cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListAttributes.html
   */
  public toListAttributes() {
    this.to('ecs:ListAttributes');
    return this;
  }

  /**
   * Returns a list of existing clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    this.to('ecs:ListClusters');
    return this;
  }

  /**
   * Returns a list of container instances in a specified cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListContainerInstances.html
   */
  public toListContainerInstances() {
    this.to('ecs:ListContainerInstances');
    return this;
  }

  /**
   * Lists the services that are running in a specified cluster.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    this.to('ecs:ListServices');
    return this;
  }

  /**
   * List tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ecs:ListTagsForResource');
    return this;
  }

  /**
   * Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any ACTIVE task definitions).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListServices.html
   */
  public toListTaskDefinitionFamilies() {
    this.to('ecs:ListTaskDefinitionFamilies');
    return this;
  }

  /**
   * Returns a list of task definitions that are registered to your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTaskDefinitions.html
   */
  public toListTaskDefinitions() {
    this.to('ecs:ListTaskDefinitions');
    return this;
  }

  /**
   * Returns a list of tasks for a specified cluster.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ListTasks.html
   */
  public toListTasks() {
    this.to('ecs:ListTasks');
    return this;
  }

  /**
   * Grants permission to an agent to connect with the Amazon ECS service to report status and get commands.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html
   */
  public toPoll() {
    this.to('ecs:Poll');
    return this;
  }

  /**
   * Modifies the ARN and resource ID format of a resource for a specified IAM user, IAM role, or the root user for an account. You can specify whether the new ARN and resource ID format are enabled for new resources that are created. Enabling this setting is required to use new Amazon ECS features such as resource tagging.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html
   */
  public toPutAccountSetting() {
    this.to('ecs:PutAccountSetting');
    return this;
  }

  /**
   * Modifies the ARN and resource ID format of a resource type for all IAM users on an account for which no individual account setting has been set. Enabling this setting is required to use new Amazon ECS features such as resource tagging.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html
   */
  public toPutAccountSettingDefault() {
    this.to('ecs:PutAccountSettingDefault');
    return this;
  }

  /**
   * Create or update an attribute on an Amazon ECS resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAttributes.html
   */
  public toPutAttributes() {
    this.to('ecs:PutAttributes');
    return this;
  }

  /**
   * Modifies the available capacity providers and the default capacity provider strategy for a cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCapacityProvider()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html
   */
  public toPutClusterCapacityProviders() {
    this.to('ecs:PutClusterCapacityProviders');
    return this;
  }

  /**
   * Registers an EC2 instance into the specified cluster.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterContainerInstance.html
   */
  public toRegisterContainerInstance() {
    this.to('ecs:RegisterContainerInstance');
    return this;
  }

  /**
   * Registers a new task definition from the supplied family and containerDefinitions.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RegisterTaskDefinition.html
   */
  public toRegisterTaskDefinition() {
    this.to('ecs:RegisterTaskDefinition');
    return this;
  }

  /**
   * Start a task using random placement and the default Amazon ECS scheduler.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifCapacityProvider()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html
   */
  public toRunTask() {
    this.to('ecs:RunTask');
    return this;
  }

  /**
   * Starts a new task from the specified task definition on the specified container instance or instances.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifContainerInstances()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StartTask.html
   */
  public toStartTask() {
    this.to('ecs:StartTask');
    return this;
  }

  /**
   * Grants permission to start a telemetry session.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html#enable_cloudwatch
   */
  public toStartTelemetrySession() {
    this.to('ecs:StartTelemetrySession');
    return this;
  }

  /**
   * Stops a running task.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_StopTask.html
   */
  public toStopTask() {
    this.to('ecs:StopTask');
    return this;
  }

  /**
   * Sent to acknowledge that attachments changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitAttachmentStateChanges.html
   */
  public toSubmitAttachmentStateChanges() {
    this.to('ecs:SubmitAttachmentStateChanges');
    return this;
  }

  /**
   * Sent to acknowledge that a container changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitContainerStateChange.html
   */
  public toSubmitContainerStateChange() {
    this.to('ecs:SubmitContainerStateChange');
    return this;
  }

  /**
   * Sent to acknowledge that a task changed states.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_SubmitTaskStateChange.html
   */
  public toSubmitTaskStateChange() {
    this.to('ecs:SubmitTaskStateChange');
    return this;
  }

  /**
   * Tags the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('ecs:TagResource');
    return this;
  }

  /**
   * Untags the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('ecs:UntagResource');
    return this;
  }

  /**
   * Modifies the settings to use for a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateClusterSettings.html
   */
  public toUpdateClusterSettings() {
    this.to('ecs:UpdateClusterSettings');
    return this;
  }

  /**
   * Updates the Amazon ECS container agent on a specified container instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerAgent.html
   */
  public toUpdateContainerAgent() {
    this.to('ecs:UpdateContainerAgent');
    return this;
  }

  /**
   * Enables the user to modify the status of an Amazon ECS container instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateContainerInstancesState.html
   */
  public toUpdateContainerInstancesState() {
    this.to('ecs:UpdateContainerInstancesState');
    return this;
  }

  /**
   * Modifies the parameters of a service.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifCapacityProvider()
   * - .ifTaskDefinition()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateService.html
   */
  public toUpdateService() {
    this.to('ecs:UpdateService');
    return this;
  }

  /**
   * Modifies the primary task set used in a service.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateServicePrimaryTaskSet.html
   */
  public toUpdateServicePrimaryTaskSet() {
    this.to('ecs:UpdateServicePrimaryTaskSet');
    return this;
  }

  /**
   * Updates the specified task set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCluster()
   * - .ifService()
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_UpdateTaskSet.html
   */
  public toUpdateTaskSet() {
    this.to('ecs:UpdateTaskSet');
    return this;
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:cluster/${ClusterName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type container-instance to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html
   *
   * @param containerInstanceId - Identifier for the containerInstanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onContainerInstance(containerInstanceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:container-instance/${ContainerInstanceId}';
    arn = arn.replace('${ContainerInstanceId}', containerInstanceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html
   *
   * @param serviceName - Identifier for the serviceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onService(serviceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:service/${ServiceName}';
    arn = arn.replace('${ServiceName}', serviceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html
   *
   * @param taskId - Identifier for the taskId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTask(taskId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:task/${TaskId}';
    arn = arn.replace('${TaskId}', taskId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task-definition to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html
   *
   * @param taskDefinitionFamilyName - Identifier for the taskDefinitionFamilyName.
   * @param taskDefinitionRevisionNumber - Identifier for the taskDefinitionRevisionNumber.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTaskDefinition(taskDefinitionFamilyName: string, taskDefinitionRevisionNumber: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:task-definition/${TaskDefinitionFamilyName}:${TaskDefinitionRevisionNumber}';
    arn = arn.replace('${TaskDefinitionFamilyName}', taskDefinitionFamilyName);
    arn = arn.replace('${TaskDefinitionRevisionNumber}', taskDefinitionRevisionNumber);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type capacity-provider to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/capacity_provider_definitions.html
   *
   * @param capacityProviderName - Identifier for the capacityProviderName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCapacityProvider(capacityProviderName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:capacity-provider/${CapacityProviderName}';
    arn = arn.replace('${CapacityProviderName}', capacityProviderName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type task-set to the statement
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_sets.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param serviceName - Identifier for the serviceName.
   * @param taskSetId - Identifier for the taskSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTaskSet(clusterName: string, serviceName: string, taskSetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecs:${Region}:${Account}:task-set/${ClusterName}/${ServiceName}/${TaskSetId}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${ServiceName}', serviceName);
    arn = arn.replace('${TaskSetId}', taskSetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource.
   *
   * Applies to resource types:
   * - cluster
   * - container-instance
   * - service
   * - task
   * - task-definition
   * - capacity-provider
   * - task-set
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`ecs:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The ARN of an Amazon ECS capacity provider.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toCreateService()
   * - .toPutClusterCapacityProviders()
   * - .toRunTask()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifCapacityProvider(value: string | string[], operator?: string) {
    return this.if(`ecs:capacity-provider`, value, operator || 'ArnEquals');
  }

  /**
   * The ARN of an Amazon ECS cluster.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toCreateTaskSet()
   * - .toDeleteAttributes()
   * - .toDeleteService()
   * - .toDeleteTaskSet()
   * - .toDescribeContainerInstances()
   * - .toDescribeServices()
   * - .toDescribeTaskSets()
   * - .toDescribeTasks()
   * - .toListServices()
   * - .toListTasks()
   * - .toPoll()
   * - .toPutAttributes()
   * - .toRunTask()
   * - .toStartTask()
   * - .toStartTelemetrySession()
   * - .toStopTask()
   * - .toUpdateContainerAgent()
   * - .toUpdateContainerInstancesState()
   * - .toUpdateService()
   * - .toUpdateServicePrimaryTaskSet()
   * - .toUpdateTaskSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifCluster(value: string | string[], operator?: string) {
    return this.if(`ecs:cluster`, value, operator || 'ArnEquals');
  }

  /**
   * The ARN of an Amazon ECS container instance.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toStartTask()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifContainerInstances(value: string | string[], operator?: string) {
    return this.if(`ecs:container-instances`, value, operator || 'ArnEquals');
  }

  /**
   * The ARN of an Amazon ECS service.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toCreateTaskSet()
   * - .toDeleteTaskSet()
   * - .toDescribeTaskSets()
   * - .toUpdateTaskSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifService(value: string | string[], operator?: string) {
    return this.if(`ecs:service`, value, operator || 'ArnEquals');
  }

  /**
   * The ARN of an Amazon ECS task definition.
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/iam-policy-structure.html#amazon-ecs-keys
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toCreateTaskSet()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifTaskDefinition(value: string | string[], operator?: string) {
    return this.if(`ecs:task-definition`, value, operator || 'ArnEquals');
  }
}
