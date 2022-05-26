// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import {aws_lambda as lambda} from "aws-cdk-lib"

export const PYTHON_LAMBDA_RUNTIME: lambda.Runtime = lambda.Runtime.PYTHON_3_8

// Greengrass core minimal policy template
// NOTE: Additional permissions may be needed for components
export const greengrassCoreMinimalIoTPolicy = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iot:Connect"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "iot:Receive",
        "iot:Publish"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "iot:Subscribe"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": ["iot:GetThingShadow", "iot:UpdateThingShadow", "iot:DeleteThingShadow"],
      "Resource": ["arn:aws:iot:<%= region %>:<%= account %>:thing/<%= thingname %>*"]
    },
    {
      "Effect": "Allow",
      "Action": "iot:AssumeRoleWithCertificate",
      "Resource": "arn:aws:iot:<%= region %>:<%= account %>:rolealias/<%= rolealiasname %>"
    },
    {
      "Effect": "Allow",
      "Action": ["greengrass:GetComponentVersionArtifact", "greengrass:ResolveComponentCandidates", "greengrass:GetDeploymentConfiguration"],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}`
