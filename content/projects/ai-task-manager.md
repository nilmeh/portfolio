---
title: "TextileSaaS"
summary: "Multi-tenant SaaS platform with ERP, CRM, inventory, and analytics tools for SMEs, targeting textile industry"
tech: ["NestJS", "Prisma", "PostgreSQL", "SwiftUI", "AWS S3", "CloudFront", "SwiftData"]
links:
  github: "https://github.com/niloymeharchandani/textile-saas"
  demo: "https://textilesaas.com"
startDate: "2025-06-01"
endDate: "Present"
featured: true
category: "saas"
---

## Overview

A production-grade multi-tenant SaaS platform designed to streamline operations for small and medium enterprises in the textile industry. Features comprehensive ERP, CRM, inventory management, and analytics tools with both web and iOS applications.

## Key Features

- **Multi-tenant Architecture**: Secure, scalable platform supporting multiple clients
- **ERP Integration**: Complete enterprise resource planning with order management
- **CRM System**: Customer relationship management with lead tracking
- **Inventory Analytics**: Real-time inventory tracking with predictive analytics
- **Cross-platform**: Web application with native iOS app for mobile operations
- **Offline-first**: SwiftData caching for seamless offline functionality

## Technical Implementation

- **Backend**: NestJS with Prisma ORM for type-safe database operations
- **Database**: PostgreSQL with optimized queries and indexing
- **Mobile**: SwiftUI with SwiftData for offline-first architecture
- **Storage**: AWS S3 with CloudFront CDN for global content delivery
- **Image Processing**: Client-side optimization with presigned S3 uploads
- **Security**: Multi-tenant data isolation and secure authentication

## Business Impact

- **Market Research**: Conducting client validation to optimize product-market fit
- **Monetization Strategy**: Developing tiered pricing model based on usage
- **Target Market**: Initially focusing on textile SMEs with expansion plans
- **Operational Efficiency**: Designed to reduce manual processes by 70%

## Challenges & Solutions

1. **Multi-tenancy**: Implemented row-level security and tenant isolation
2. **Offline Sync**: Built conflict resolution for offline-first mobile app
3. **Scalability**: Designed architecture to handle 1000+ concurrent tenants
