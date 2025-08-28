---
title: "Ledger"
summary: "End-to-end encrypted iOS peer-to-peer ledger app with device linking and transaction workflows"
tech: ["Swift", "SwiftUI", "CryptoKit", "Firebase", "Siri Shortcuts"]
links:
  github: "https://github.com/niloymeharchandani/ledger-ios"
  demo: "https://apps.apple.com/app/ledger"
startDate: "2025-08-01"
endDate: "2025-08-31"
featured: true
category: "mobile"
---

## Overview

A secure, end-to-end encrypted iOS ledger application that enables peer-to-peer financial tracking with advanced security features and seamless device synchronization.

## Key Features

- **End-to-End Encryption**: All transactions encrypted using CryptoKit
- **Per-Device Key Management**: Unique encryption keys for each device
- **QR-Based Device Linking**: Simple and secure device pairing process
- **Approval-Based Workflows**: Transaction approval system across linked devices
- **Siri Integration**: Quick transaction entry via Siri Shortcuts
- **Cross-Device Sync**: Real-time synchronization across all linked devices

## Technical Implementation

- **Encryption**: CryptoKit for AES-256 encryption and key derivation
- **Backend**: Firebase Firestore with security rules for encrypted data
- **UI Framework**: SwiftUI with custom animations and transitions
- **Voice Integration**: SiriKit for hands-free transaction logging
- **Key Management**: Secure Enclave integration for key storage

## Security Features

- **Zero-Knowledge Architecture**: Server never has access to plaintext data
- **Forward Secrecy**: Regular key rotation for enhanced security
- **Biometric Authentication**: Face ID/Touch ID for app access
- **Offline Capability**: Local storage with sync when online

## Future Enhancements

- **UPI Integration**: Planned integration with India's Unified Payments Interface
- **Multi-Currency Support**: International currency tracking
- **Advanced Analytics**: Spending pattern analysis and insights
- **Web Dashboard**: Cross-platform access via encrypted web interface

## Technical Challenges

1. **Key Synchronization**: Secure key distribution across devices
2. **Conflict Resolution**: Handling concurrent edits across devices
3. **Performance**: Efficient encryption/decryption for large datasets
