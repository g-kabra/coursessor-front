variable "project_id" {
  default = "coursessor-380913"
  type        = string
}

variable "gcp_creds" {
  default = "coursessor-380913-fd61f75edfe4.json"
}

variable "region" {
  description = "The region where Cloud Run service will be deployed."
  default     = "europe-west8"
  type        = string
}

variable "image_repository" {
  description = "The name of the Docker image repository to deploy to Cloud Run."
  default     = "https://console.cloud.google.com/storage/browser/_details/coursessor-380913_cloudbuild/source/1679316197.900199-4c52e4d1532e41a9bb62965d2c7ef1cc.tgz?project=coursessor-380913"
  type        = string
}
