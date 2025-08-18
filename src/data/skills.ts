import { Skill } from '@/types';

export const skills: Skill[] = [
  // Cloud Providers
  { name: 'AWS', years: 7, category: 'Cloud Providers', icon: 'Cloud' },
  { name: 'Google Cloud Platform', years: 5, category: 'Cloud Providers', icon: 'Cloud' },
  { name: 'Azure', years: 4, category: 'Cloud Providers', icon: 'Cloud' },
  { name: 'OpenStack', years: 6, category: 'Cloud Providers', icon: 'Server' },
  
  // Performance Engineering
  { name: 'Load Testing', years: 5, category: 'Performance Engineering', icon: 'BarChart' },
  { name: 'Observability', years: 6, category: 'Performance Engineering', icon: 'LineChart' },
  { name: 'Benchmarking', years: 4, category: 'Performance Engineering', icon: 'Activity' },
  
  // Networking
  { name: 'VPC', years: 7, category: 'Networking', icon: 'Network' },
  { name: 'TCP/IP', years: 9, category: 'Networking', icon: 'Network' },
  { name: 'gRPC', years: 4, category: 'Networking', icon: 'Share2' },
  
  // Security
  { name: 'IAM', years: 6, category: 'Security', icon: 'Shield' },
  { name: 'Cognito', years: 4, category: 'Security', icon: 'Lock' },
  { name: 'ISO 27001', years: 3, category: 'Security', icon: 'FileCheck' },
  
  // Containers
  { name: 'Docker', years: 8, category: 'Containers', icon: 'Box' },
  { name: 'Kubernetes', years: 6, category: 'Containers', icon: 'Boxes' },
  { name: 'ECS', years: 5, category: 'Containers', icon: 'Container' },
  
  // Storage
  { name: 'S3', years: 7, category: 'Storage', icon: 'Database' },
  { name: 'MinIO', years: 4, category: 'Storage', icon: 'HardDrive' },
  
  // Databases
  { name: 'RDS', years: 6, category: 'Databases', icon: 'Database' },
  { name: 'DynamoDB', years: 5, category: 'Databases', icon: 'Database' },
  { name: 'MongoDB', years: 4, category: 'Databases', icon: 'Database' },
  
  // IaC
  { name: 'Terraform', years: 7, category: 'IaC', icon: 'FileCode' },
  { name: 'Pulumi', years: 4, category: 'IaC', icon: 'FileCode' },
  { name: 'Ansible', years: 6, category: 'IaC', icon: 'Terminal' },
  
  // CI/CD
  { name: 'GitLab CI', years: 6, category: 'CI/CD', icon: 'GitPullRequest' },
  { name: 'ArgoCD', years: 4, category: 'CI/CD', icon: 'GitMerge' },
  { name: 'GitHub Actions', years: 5, category: 'CI/CD', icon: 'GitCommit' },
  
  // Monitoring
  { name: 'Grafana', years: 7, category: 'Monitoring', icon: 'LineChart' },
  { name: 'Prometheus', years: 6, category: 'Monitoring', icon: 'BarChart4' },
  { name: 'Tempo', years: 3, category: 'Monitoring', icon: 'Timer' },
  { name: 'Pyroscope', years: 2, category: 'Monitoring', icon: 'Flame' },
  
  // Programming
  { name: 'Python', years: 10, category: 'Programming', icon: 'Code' },
  { name: 'TypeScript', years: 6, category: 'Programming', icon: 'Code2' },
  { name: 'Bash', years: 9, category: 'Programming', icon: 'Terminal' },
  { name: 'Java', years: 7, category: 'Programming', icon: 'Coffee' },
  
  // OS & Infra
  { name: 'Linux', years: 12, category: 'OS & Infra', icon: 'Terminal' },
  { name: 'EC2', years: 7, category: 'OS & Infra', icon: 'Server' },
  { name: 'Raspberry Pi', years: 5, category: 'OS & Infra', icon: 'Cpu' }
];

export const getSkillCategories = (): string[] => {
  const categories = new Set<string>();
  
  skills.forEach(skill => {
    categories.add(skill.category);
  });
  
  return Array.from(categories);
};