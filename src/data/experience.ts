import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    role: 'Principal Cloud Architect',
    company: 'TechSolutions Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: null,
    responsibilities: [
      'Lead a team of 15 cloud engineers designing and implementing scalable, secure solutions',
      'Reduced infrastructure costs by 35% through optimization and architecture redesign',
      'Implemented hybrid cloud strategy using AWS, GCP and on-premise OpenStack clusters',
      'Designed and deployed multi-region Kubernetes clusters with 99.99% uptime SLA'
    ]
  },
  {
    role: 'Senior DevOps Engineer',
    company: 'DataStream Networks',
    location: 'Seattle, WA',
    startDate: '2019-03',
    endDate: '2021-12',
    responsibilities: [
      'Designed and implemented CI/CD pipelines reducing deployment time by 75%',
      'Led migration from monolithic architecture to microservices using Kubernetes',
      'Implemented infrastructure as code using Terraform and Ansible',
      'Established observability practices with Prometheus, Grafana and Tempo'
    ]
  },
  {
    role: 'Cloud Infrastructure Engineer',
    company: 'AI Research Labs',
    location: 'Boston, MA',
    startDate: '2017-06',
    endDate: '2019-02',
    responsibilities: [
      'Designed and maintained cloud infrastructure for ML research team of 50+ researchers',
      'Implemented auto-scaling compute clusters for GPU-intensive workloads',
      'Developed custom monitoring solutions for ML training jobs',
      'Collaborated with research teams to optimize infrastructure for various ML frameworks'
    ]
  },
  {
    role: 'Research Assistant',
    company: 'University of Technology',
    location: 'Cambridge, UK',
    startDate: '2015-09',
    endDate: '2017-05',
    responsibilities: [
      'Conducted research on performance optimization in cloud computing environments',
      'Implemented experimental cloud configurations using OpenStack',
      'Published 3 papers in top-tier cloud computing conferences',
      'Developed benchmarking tools for evaluating cloud performance'
    ]
  }
];