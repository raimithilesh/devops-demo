#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DevopsDemoStack } from '../lib/devops-demo-stack';

const app = new cdk.App();
new DevopsDemoStack(app, 'DevopsDemoStack', {
  env: {
    account: '713411715170',
    region: 'us-east-1',
  }
});

app.synth();