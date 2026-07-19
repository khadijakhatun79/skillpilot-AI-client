import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || 'mock_client_id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'mock_client_secret',
    }),
    Credentials({
      async authorize(credentials) {
        // Mock authorization for now since we have no DB
        if (credentials.email && credentials.password) {
          return {
            id: '1',
            name: 'Demo User',
            email: credentials.email as string,
            role: 'user', // Default role
          };
        }
        return null;
      },
    }),
  ],
});
