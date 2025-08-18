import { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: '2023-04-15',
    expiryDate: '2026-04-15',
    credentialId: 'AWS-PSA-123456',
    url: 'https://www.credly.com/badges/example1'
  },
  {
    name: 'Google Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: '2022-10-20',
    expiryDate: '2024-10-20',
    credentialId: 'GCP-PCA-789012',
    url: 'https://www.credential.net/example2'
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2022-06-10',
    expiryDate: '2025-06-10',
    credentialId: 'CKA-345678',
    url: 'https://www.credly.com/badges/example3'
  },
  {
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    date: '2021-11-05',
    expiryDate: '2024-11-05',
    credentialId: 'MSFT-ASA-901234',
    url: 'https://www.credly.com/badges/example4'
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: '2021-03-22',
    expiryDate: null,
    credentialId: 'HC-TA-567890',
    url: 'https://www.credly.com/badges/example5'
  }
];