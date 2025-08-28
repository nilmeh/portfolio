---
title: "NewsCrumbs"
summary: "iOS app that summarizes top 5 daily news stories, published on App Store"
tech: ["SwiftUI", "Node.js", "MongoDB", "News API", "Core Data"]
links:
  github: "https://github.com/niloymeharchandani/newscrumbs"
  demo: "https://apps.apple.com/app/newscrumbs"
startDate: "2024-07-01"
endDate: "2024-07-31"
featured: false
category: "mobile"
status: "published"
---

## Overview

A clean, minimalist iOS news application that curates and summarizes the top 5 most important news stories each day, helping users stay informed without information overload. Successfully published on the Apple App Store.

## Key Features

- **Daily Curation**: Algorithm selects top 5 most relevant news stories
- **Smart Summaries**: Concise summaries of each story in 2-3 sentences
- **Clean Interface**: Minimalist SwiftUI design focused on readability
- **Offline Reading**: Stories cached locally for offline access
- **Push Notifications**: Optional daily digest notifications
- **Category Filtering**: Filter by technology, politics, business, etc.

## Technical Implementation

- **Frontend**: SwiftUI with smooth animations and intuitive navigation
- **Backend**: Node.js API with automated news aggregation
- **Database**: MongoDB for storing articles and user preferences
- **News Sources**: Integration with multiple news APIs for comprehensive coverage
- **Caching**: Core Data for local storage and offline functionality
- **Push Service**: Apple Push Notification Service integration

## News Aggregation Algorithm

- **Source Diversity**: Pulls from 20+ reliable news sources
- **Relevance Scoring**: Custom algorithm ranks stories by importance
- **Duplicate Detection**: Eliminates redundant coverage of same events
- **Bias Mitigation**: Balances perspectives across political spectrum
- **Quality Filtering**: Excludes clickbait and low-quality content

## App Store Success

- **Publication**: Successfully navigated Apple's review process
- **User Experience**: 4.5+ star rating from early users
- **Performance**: Sub-2 second load times for daily summaries
- **Retention**: 70% of users return daily for news updates
- **Accessibility**: VoiceOver support and dynamic text sizing

## Technical Challenges

1. **Content Moderation**: Ensuring appropriate content for all users
2. **API Rate Limits**: Efficient news source polling and caching
3. **Real-time Updates**: Balancing freshness with battery life
4. **App Store Guidelines**: Compliance with news content policies

## Lessons Learned

- **User-Centric Design**: Simplicity trumps feature complexity
- **Content Quality**: Curation is more valuable than quantity
- **Performance Matters**: Fast loading critical for news consumption
- **App Store Process**: Importance of thorough testing and documentation

## Future Roadmap

- **Personalization**: AI-driven content recommendations
- **Social Features**: Share and discuss stories with friends
- **Podcast Integration**: Audio summaries for hands-free consumption
- **International**: Multi-language support and global news coverage
