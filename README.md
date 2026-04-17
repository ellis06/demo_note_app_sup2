# MyNotes

A note-taking app built with React Native, Expo, and Supabase.

## Features

- 🔐 Magic Link authentication (no passwords)
- 📝 Create, edit, and delete notes
- 📌 Pin important notes
- 🏷️ Organize notes with categories
- 🔄 Real-time sync across devices
- 🗑️ Soft delete with trash recovery
- 📱 Mobile-first design

## Tech Stack

- **Runtime:** React Native with Expo SDK 51
- **Language:** TypeScript (strict mode)
- **Routing:** expo-router (file-based)
- **Backend:** Supabase (Auth, Database, RLS)
- **Authentication:** Supabase Auth (email magic link)
- **Database:** PostgreSQL via Supabase
- **State Management:** React Context + useReducer
- **Local Storage:** AsyncStorage

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- Expo CLI: \
pm install -g expo-cli\

### Installation

1. **Install dependencies:**
   \\\ash
   npm install
   \\\

2. **Set up environment variables:**
   - Copy \.env.example\ to \.env\
   - Add your Supabase credentials:
     \\\
     EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
     EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     \\\

3. **Start the development server:**
   \\\ash
   npm start
   \\\

4. **Run on devices:**
   - iOS: Press \i\ in terminal
   - Android: Press \\ in terminal
   - Web: Press \w\ in terminal

## Project Structure

\\\
src/
  ├── screens/       # Screen components
  ├── components/    # Reusable UI components
  ├── hooks/         # Custom React hooks
  ├── services/      # Supabase client and API calls
  ├── utils/         # Helper functions
  ├── types/         # TypeScript types
  └── config/        # App configuration

app/
  ├── _layout.tsx    # Root navigation layout
  └── index.tsx      # Home screen
\\\

## Available Scripts

- \
pm start\ - Start Expo dev server
- \
pm run android\ - Run on Android emulator
- \
pm run ios\ - Run on iOS simulator
- \
pm run web\ - Run on web browser
- \
pm test\ - Run tests
- \
pm run type-check\ - Run TypeScript type checking
- \
pm run lint\ - Lint code

## Development

### Code Quality

- Strict TypeScript mode enabled
- ESLint for code consistency
- No inline styles - use \StyleSheet.create\
- All Supabase calls in services layer

### Database

- RLS (Row Level Security) policies required
- All user data is scoped to their ID
- Soft deletes with 30-day trash retention

## Contributing

See [PRD.md](./PRD.md) for feature specifications.

## License

MIT
