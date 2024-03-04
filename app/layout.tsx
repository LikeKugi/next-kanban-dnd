import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import AppLayout from '@/shared/ui/AppLayout/AppLayout';
import { ConfigProvider } from 'antd';
import { theme } from '@/shared/styles/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kanban Board',
  description: 'Generated by create next app',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <AppLayout>
              {children}
            </AppLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}