import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [outposts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsoutposts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Outposts extends PolicyStatement {
  public servicePrefix = 'outposts';

  /**
   * Statement provider for service [outposts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsoutposts.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an Outpost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOutpost.html
   */
  public toCreateOutpost() {
    return this.to('CreateOutpost');
  }

  /**
   * Grants permission to delete an Outpost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_DeleteOutpost.html
   */
  public toDeleteOutpost() {
    return this.to('DeleteOutpost');
  }

  /**
   * Grants permission to delete an site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_DeleteSite.html
   */
  public toDeleteSite() {
    return this.to('DeleteSite');
  }

  /**
   * Grants permission to get information about the specified Outpost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpost.html
   */
  public toGetOutpost() {
    return this.to('GetOutpost');
  }

  /**
   * Grants permission to list the instance types for the specified Outpost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpostInstanceTypes.html
   */
  public toGetOutpostInstanceTypes() {
    return this.to('GetOutpostInstanceTypes');
  }

  /**
   * Grants permission to list the Outposts for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListOutposts.html
   */
  public toListOutposts() {
    return this.to('ListOutposts');
  }

  /**
   * Grants permission to list the sites for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListSites.html
   */
  public toListSites() {
    return this.to('ListSites');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateOutpost",
      "DeleteOutpost",
      "DeleteSite",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "GetOutpost",
      "GetOutpostInstanceTypes"
    ],
    "List": [
      "ListOutposts",
      "ListSites",
      "ListTagsForResource"
    ]
  };
}
