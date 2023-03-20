provider "google" {
    project = var.project_id
}

resource "google_cloud_run_service" "default" {
    name     = "coursessorgcr"
    location = var.region

    metadata {
      annotations = {
        "run.googleapis.com/client-name" = "terraform"
      }
    }

    template {
      spec {
        containers {
          image = "europe-central2-docker.pkg.dev/coursessor-380913/coursessor-repo/coursessor-image"
        }
      }
    }
 }

 data "google_iam_policy" "noauth" {
   binding {
     role = "roles/run.invoker"
     members = ["allUsers"]
   }
 }

 resource "google_cloud_run_service_iam_policy" "noauth" {
   location    = google_cloud_run_service.default.location
   project     = google_cloud_run_service.default.project
   service     = google_cloud_run_service.default.name

   policy_data = data.google_iam_policy.noauth.policy_data
}
