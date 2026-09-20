# Full GitOps EKS Platform

A production-style DevOps project demonstrating Infrastructure as Code, CI/CD, GitOps deployment, Kubernetes, monitoring, alerting, and failure recovery on AWS.

---

## 1. Project Overview

This project implements an end-to-end GitOps-based application deployment platform on Amazon EKS.

The infrastructure is provisioned using Terraform, application images are built and pushed to Amazon ECR through GitLab CI, and Argo CD continuously deploys the desired Kubernetes state from GitHub into Amazon EKS.

Prometheus and Grafana provide monitoring and observability, while Grafana Alerting sends notifications to Slack when application availability drops below the configured threshold.

The project also includes a real failure and recovery test where the application was intentionally reduced from 3 replicas to 2 replicas, an alert was triggered and delivered to Slack, and the application was then restored to 3 healthy replicas.

---

## 2. Architecture

```mermaid
flowchart LR

    DEV[Developer]

    GITLAB[GitLab Repository]
    CI[GitLab CI/CD]

    ECR[Amazon ECR]

    GITHUB[GitHub GitOps Repository]

    ARGO[Argo CD]

    EKS[Amazon EKS]

    APP[GitOps Demo API]
    PROM[Prometheus]
    GRAF[Grafana]
    ALERT[Grafana Alerting]
    SLACK[Slack]

    TF[Terraform]
    VPC[AWS VPC]

    DEV --> GITLAB
    GITLAB --> CI

    CI -->|Build Docker Image| ECR
    CI -->|Update Kubernetes Manifest| GITHUB

    GITHUB --> ARGO
    ARGO --> EKS

    EKS --> APP

    EKS --> PROM
    PROM --> GRAF
    GRAF --> ALERT
    ALERT --> SLACK

    TF --> VPC
    TF --> EKS
