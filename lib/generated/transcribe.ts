import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [transcribe](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranscribe.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Transcribe extends PolicyStatement {
  public servicePrefix = 'transcribe';

  /**
   * Statement provider for service [transcribe](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranscribe.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new custom language model.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateLanguageModel.html
   */
  public toCreateLanguageModel() {
    this.to('transcribe:CreateLanguageModel');
    return this;
  }

  /**
   * Grants permission to create a new custom vocabulary that you can use to change the way Amazon Transcribe Medical handles transcription of an audio file.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateMedicalVocabulary.html
   */
  public toCreateMedicalVocabulary() {
    this.to('transcribe:CreateMedicalVocabulary');
    return this;
  }

  /**
   * Grants permission to create a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabulary.html
   */
  public toCreateVocabulary() {
    this.to('transcribe:CreateVocabulary');
    return this;
  }

  /**
   * Grants permission to create a new vocabulary filter that you can use to filter out words from the transcription of an audio file generated by Amazon Transcribe
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_CreateVocabularyFilter.html
   */
  public toCreateVocabularyFilter() {
    this.to('transcribe:CreateVocabularyFilter');
    return this;
  }

  /**
   * Grants permission to delete a previously created custom language model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteLanguageModel.html
   */
  public toDeleteLanguageModel() {
    this.to('transcribe:DeleteLanguageModel');
    return this;
  }

  /**
   * Grants permission to delete a previously submitted medical transcription job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalTranscriptionJob.html
   */
  public toDeleteMedicalTranscriptionJob() {
    this.to('transcribe:DeleteMedicalTranscriptionJob');
    return this;
  }

  /**
   * Grants permission to delete a medical vocabulary from Amazon Transcribe.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteMedicalVocabulary.html
   */
  public toDeleteMedicalVocabulary() {
    this.to('transcribe:DeleteMedicalVocabulary');
    return this;
  }

  /**
   * Grants permission to delete a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteTranscriptionJob.html
   */
  public toDeleteTranscriptionJob() {
    this.to('transcribe:DeleteTranscriptionJob');
    return this;
  }

  /**
   * Grants permission to delete a vocabulary from Amazon Transcribe.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteVocabulary.html
   */
  public toDeleteVocabulary() {
    this.to('transcribe:DeleteVocabulary');
    return this;
  }

  /**
   * Grants permission to delete a vocabulary filter from Amazon Transcribe.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DeleteVocabularyFilter.html
   */
  public toDeleteVocabularyFilter() {
    this.to('transcribe:DeleteVocabularyFilter');
    return this;
  }

  /**
   * Grants permission to return information about a custom language model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_DescribeLanguageModel.html
   */
  public toDescribeLanguageModel() {
    this.to('transcribe:DescribeLanguageModel');
    return this;
  }

  /**
   * Grants permission to return information about a medical transcription job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalTranscriptionJob.html
   */
  public toGetMedicalTranscriptionJob() {
    this.to('transcribe:GetMedicalTranscriptionJob');
    return this;
  }

  /**
   * Grants permission to get information about a medical vocabulary.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetMedicalVocabulary.html
   */
  public toGetMedicalVocabulary() {
    this.to('transcribe:GetMedicalVocabulary');
    return this;
  }

  /**
   * Grants permission to return information about a transcription job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetTranscriptionJob.html
   */
  public toGetTranscriptionJob() {
    this.to('transcribe:GetTranscriptionJob');
    return this;
  }

  /**
   * Grants permission to to get information about a vocabulary.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetVocabulary.html
   */
  public toGetVocabulary() {
    this.to('transcribe:GetVocabulary');
    return this;
  }

  /**
   * Grants permission to get information about a vocabulary filter.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_GetVocabularyFilter.html
   */
  public toGetVocabularyFilter() {
    this.to('transcribe:GetVocabularyFilter');
    return this;
  }

  /**
   * Grants permission to list custom language models.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListLanguageModels.html
   */
  public toListLanguageModels() {
    this.to('transcribe:ListLanguageModels');
    return this;
  }

  /**
   * Grants permission to list medical transcription jobs with the specified status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalTranscriptionJobs.html
   */
  public toListMedicalTranscriptionJobs() {
    this.to('transcribe:ListMedicalTranscriptionJobs');
    return this;
  }

  /**
   * Grants permission to return a list of medical vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListMedicalVocabularies.html
   */
  public toListMedicalVocabularies() {
    this.to('transcribe:ListMedicalVocabularies');
    return this;
  }

  /**
   * Grants permission to list transcription jobs with the specified status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListTranscriptionJobs.html
   */
  public toListTranscriptionJobs() {
    this.to('transcribe:ListTranscriptionJobs');
    return this;
  }

  /**
   * Grants permission to return a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListVocabularies.html
   */
  public toListVocabularies() {
    this.to('transcribe:ListVocabularies');
    return this;
  }

  /**
   * Grants permission to return a list of vocabulary filters that match the specified criteria. If no criteria are specified, returns the at most 5 vocabulary filters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_ListVocabularyFilters.html
   */
  public toListVocabularyFilters() {
    this.to('transcribe:ListVocabularyFilters');
    return this;
  }

  /**
   * Grants permission to start a protocol where audio is streamed to Transcribe Medical and the transcription results are streamed to your application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartMedicalStreamTranscription.html
   */
  public toStartMedicalStreamTranscription() {
    this.to('transcribe:StartMedicalStreamTranscription');
    return this;
  }

  /**
   * Grants permission to start a WebSocket where audio is streamed to Transcribe Medical and the transcription results are streamed to your application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartMedicalStreamTranscriptionWebSocket.html
   */
  public toStartMedicalStreamTranscriptionWebSocket() {
    this.to('transcribe:StartMedicalStreamTranscriptionWebSocket');
    return this;
  }

  /**
   * Grants permission to start an asynchronous job to transcribe medical speech to text.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_StartMedicalTranscriptionJob.html
   */
  public toStartMedicalTranscriptionJob() {
    this.to('transcribe:StartMedicalTranscriptionJob');
    return this;
  }

  /**
   * Grants permission to start a bidirectional HTTP2 stream to transcribe speech to text in real time.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartStreamTranscription.html
   */
  public toStartStreamTranscription() {
    this.to('transcribe:StartStreamTranscription');
    return this;
  }

  /**
   * Grants permission to start a websocket stream to transcribe speech to text in real time.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_streaming_StartStreamTranscriptionWebSocket.html
   */
  public toStartStreamTranscriptionWebSocket() {
    this.to('transcribe:StartStreamTranscriptionWebSocket');
    return this;
  }

  /**
   * Grants permission to start an asynchronous job to transcribe speech to text.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifOutputBucketName()
   * - .ifOutputEncryptionKMSKeyId()
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_StartTranscriptionJob.html
   */
  public toStartTranscriptionJob() {
    this.to('transcribe:StartTranscriptionJob');
    return this;
  }

  /**
   * Grants permission to update an existing medical vocabulary with new values. The UpdateMedicalVocabulary operation overwrites all of the existing information with the values that you provide in the request.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateMedicalVocabulary.html
   */
  public toUpdateMedicalVocabulary() {
    this.to('transcribe:UpdateMedicalVocabulary');
    return this;
  }

  /**
   * Grants permission to update an existing vocabulary with new values. The UpdateVocabulary operation overwrites all of the existing information with the values that you provide in the request.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateVocabulary.html
   */
  public toUpdateVocabulary() {
    this.to('transcribe:UpdateVocabulary');
    return this;
  }

  /**
   * Grants permission to update an existing vocabulary filter with new values. The UpdateVocabularyFilter operation overwrites all of the existing information with the values that you provide in the request.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/transcribe/latest/dg/API_UpdateVocabularyFilter.html
   */
  public toUpdateVocabularyFilter() {
    this.to('transcribe:UpdateVocabularyFilter');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateLanguageModel",
      "CreateMedicalVocabulary",
      "CreateVocabulary",
      "CreateVocabularyFilter",
      "DeleteLanguageModel",
      "DeleteMedicalTranscriptionJob",
      "DeleteMedicalVocabulary",
      "DeleteTranscriptionJob",
      "DeleteVocabulary",
      "DeleteVocabularyFilter",
      "StartMedicalStreamTranscription",
      "StartMedicalStreamTranscriptionWebSocket",
      "StartMedicalTranscriptionJob",
      "StartStreamTranscription",
      "StartStreamTranscriptionWebSocket",
      "StartTranscriptionJob",
      "UpdateMedicalVocabulary",
      "UpdateVocabulary",
      "UpdateVocabularyFilter"
    ],
    "Read": [
      "DescribeLanguageModel",
      "GetMedicalTranscriptionJob",
      "GetMedicalVocabulary",
      "GetTranscriptionJob",
      "GetVocabulary",
      "GetVocabularyFilter"
    ],
    "List": [
      "ListLanguageModels",
      "ListMedicalTranscriptionJobs",
      "ListMedicalVocabularies",
      "ListTranscriptionJobs",
      "ListVocabularies",
      "ListVocabularyFilters"
    ]
  };

  /**
   * Enables you to control access based on the output bucket name included in the request
   *
   * Applies to actions:
   * - .toStartTranscriptionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputBucketName(value: string | string[], operator?: Operator | string) {
    return this.if(`transcribe:OutputBucketName`, value, operator || 'StringLike');
  }

  /**
   * Enables you to control access based on the KMS key id included in the request
   *
   * Applies to actions:
   * - .toStartTranscriptionJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutputEncryptionKMSKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`transcribe:OutputEncryptionKMSKeyId`, value, operator || 'StringLike');
  }
}