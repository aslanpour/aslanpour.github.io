import { ArchitectureDiagram } from '@/types';

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: 1,
    title: 'Multi-Region Microservices Architecture',
    description: 'High-availability architecture spanning three AWS regions with automatic failover',
    imageUrl: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2070',
    tags: ['AWS', 'Microservices', 'High Availability']
  },
  {
    id: 2,
    title: 'Serverless Data Processing Pipeline',
    description: 'Event-driven serverless architecture for real-time data processing',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034',
    tags: ['Serverless', 'Lambda', 'Event-driven']
  },
  {
    id: 3,
    title: 'Kubernetes Multi-Cluster Federation',
    description: 'Federated Kubernetes clusters across multiple cloud providers',
    imageUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071',
    tags: ['Kubernetes', 'Multi-cloud', 'Federation']
  },
  {
    id: 4,
    title: 'Hybrid Cloud Network Architecture',
    description: 'Secure connectivity between on-premises and cloud infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070',
    tags: ['Hybrid Cloud', 'VPN', 'Direct Connect']
  },
  {
    id: 5,
    title: 'Zero-Trust Security Model',
    description: 'Implementation of zero-trust security principles in a cloud environment',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070',
    tags: ['Security', 'Zero-Trust', 'IAM']
  },
  {
    id: 6,
    title: 'ML/AI Training Infrastructure',
    description: 'Scalable infrastructure for training and deploying machine learning models',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065',
    tags: ['Machine Learning', 'GPU Clusters', 'AutoScaling']
  }
];