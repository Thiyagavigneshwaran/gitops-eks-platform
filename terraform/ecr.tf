resource "aws_ecr_repository" "app" {
  name                 = "gitops-demo-api"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name = "gitops-demo-api"
  }
}