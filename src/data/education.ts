import { Education, Publication } from '@/types';

export const education: Education[] = [
  {
    degree: 'Ph.D. in Computer Science (Cloud Computing)',
    university: 'University of Technology',
    country: 'United Kingdom',
    startDate: '2015/09',
    endDate: '2019/05'
  },
  {
    degree: 'M.S. in Computer Engineering',
    university: 'Tech Institute',
    country: 'United States',
    startDate: '2013/08',
    endDate: '2015/05'
  }
];

export const publications: Publication[] = [
  {
    title: 'Optimizing Resource Allocation in Multi-Tenant Kubernetes Clusters',
    authors: ['Your Name', 'Jane Smith', 'John Doe'],
    journal: 'IEEE Transactions on Cloud Computing',
    year: '2023',
    url: 'https://doi.org/10.1109/example'
  },
  {
    title: 'Performance Analysis of Distributed Database Systems in Hybrid Cloud Environments',
    authors: ['Your Name', 'Alice Johnson'],
    journal: 'ACM Symposium on Cloud Computing',
    year: '2022',
    url: 'https://doi.org/10.1145/example'
  },
  {
    title: 'Securing Containerized Applications: Challenges and Solutions',
    authors: ['Your Name', 'Bob Williams', 'Carol Brown'],
    journal: 'Journal of Network and Systems Management',
    year: '2021',
    url: 'https://doi.org/10.1007/example'
  },
  {
    title: 'Cost-Effective Strategies for Deploying Machine Learning Workloads in the Cloud',
    authors: ['Your Name', 'David Miller'],
    journal: 'International Conference on Cloud Engineering',
    year: '2020',
    url: 'https://doi.org/10.1109/example2'
  },
  {
    title: 'Energy-Efficient Resource Management in OpenStack Environments',
    authors: ['Your Name', 'Emily Wilson', 'Frank Thomas'],
    journal: 'IEEE International Conference on Cloud Computing',
    year: '2018',
    url: 'https://doi.org/10.1109/example3'
  }
];

export const googleScholarUrl = 'https://scholar.google.com/citations?user=example';